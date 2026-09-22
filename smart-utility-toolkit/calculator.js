// calculator.js
// A simple CLI-based calculator using process.argv
//
// Usage:
//   node calculator.js add 10 5
//   node calculator.js sub 10 5
//   node calculator.js mul 10 5
//   node calculator.js div 10 5

const logger = require("./modules/logger");

// process.argv[0] -> node path
// process.argv[1] -> file path
// process.argv[2] -> operation
// process.argv[3], process.argv[4] -> numbers

const operation = process.argv[2];
const num1 = parseFloat(process.argv[3]);
const num2 = parseFloat(process.argv[4]);

logger.info(`Calculator started with operation: ${operation}`);

// Validate inputs
if (!operation || isNaN(num1) || isNaN(num2)) {
  logger.error("Invalid input. Please provide a valid operation and two numbers.");
  console.log("Usage: node calculator.js <add|sub|mul|div> <num1> <num2>");
  process.exit(1);
}

let result;

switch (operation) {
  case "add":
    result = num1 + num2;
    break;

  case "sub":
    result = num1 - num2;
    break;

  case "mul":
    result = num1 * num2;
    break;

  case "div":
    if (num2 === 0) {
      logger.error("Division by zero is not allowed.");
      process.exit(1);
    }
    result = num1 / num2;
    break;

  default:
    logger.error(`Unknown operation: "${operation}"`);
    console.log("Supported operations: add, sub, mul, div");
    process.exit(1);
}

console.log(`Result: ${result}`);
logger.success("Calculation completed successfully.");
