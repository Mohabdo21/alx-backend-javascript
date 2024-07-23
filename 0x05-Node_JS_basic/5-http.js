const http = require('http');
const fs = require('fs').promises;
const url = require('url');

const PORT = 1245;
const databaseFile = process.argv[2];

/**
 * Reads the CSV file and returns student statistics.
 * @param {string} dataFilePath - The path to the CSV data file.
 * @returns {Promise<string>} - A promise that resolves to a string with student statistics.
 */
const countStudents = async (dataFilePath) => {
  try {
    const fileContent = await fs.readFile(dataFilePath, 'utf8');
    const lines = fileContent.trim().split('\n');

    if (lines.length < 2) throw new Error('Cannot load the database');

    const [header, ...rows] = lines;
    const fieldNames = header.split(',');
    const studentProps = fieldNames.slice(0, -1);

    // Create a map to hold the student groups
    const studentGroups = rows.reduce((acc, row) => {
      const studentData = row.split(',');
      if (studentData.length === fieldNames.length) {
        const student = Object.fromEntries(
          studentProps.map((prop, idx) => [prop, studentData[idx]]),
        );
        const field = studentData[studentData.length - 1];
        if (!acc.has(field)) acc.set(field, []);
        acc.get(field).push(student);
      }
      return acc;
    }, new Map());

    const totalStudents = Array.from(studentGroups.values()).reduce(
      (sum, students) => sum + students.length,
      0,
    );

    // Build the result string
    let result = `Number of students: ${totalStudents}`;
    studentGroups.forEach((students, field) => {
      const studentNames = students
        .map((student) => student.firstname)
        .join(', ');
      result += `\nNumber of students in ${field}: ${students.length}. List: ${studentNames}`;
    });

    return result;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

/**
 * Handles incoming requests to the HTTP server.
 * @param {http.IncomingMessage} req - The request object.
 * @param {http.ServerResponse} res - The response object.
 */
const requestHandler = async (req, res) => {
  const parsedUrl = url.parse(req.url);

  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    try {
      const studentData = await countStudents(databaseFile);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`This is the list of our students\n${studentData}`);
    } catch (error) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end(error.message);
    }
  } else {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
};

const app = http.createServer(requestHandler);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

module.exports = app;
