// app.js
// Demonstrates reusability of custom modules: isEven and logger

const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

logger.info("Starting module reusability demo...");

const numbers = [4, 7, 10, 15, 22, 33];

numbers.forEach((num) => {
  if (isEven(num)) {
    logger.success(`${num} is Even`);
  } else {
    logger.error(`${num} is Odd`);
  }
});

logger.info("Module reusability demo finished.");

// Run with: node app.js
