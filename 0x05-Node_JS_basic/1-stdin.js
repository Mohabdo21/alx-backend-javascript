const readline = require('readline');

// Interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Welcome message
console.log('Welcome to Holberton School, what is your name?');

// Handle the line event
rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);
});

// Handle the close event
rl.on('close', () => {
  console.log('This important software is now closing');
});
