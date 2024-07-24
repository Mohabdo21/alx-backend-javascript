// const readline = require('readline');
//
// // Interface for input and output
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
//
// // Welcome message
// console.log('Welcome to Holberton School, what is your name?');
//
// // Handle the line event
// rl.on('line', (input) => {
//   console.log(`Your name is: ${input}`);
// });
//
// // Handle the end event on the input stream
// process.stdin.on('end', () => {
//   rl.close();
// });
//
// // Handle the close event
// rl.on('close', () => {
//   console.log('This important software is now closing');
// });

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    console.log(`Your name is: ${chunk.toString().trim()}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
