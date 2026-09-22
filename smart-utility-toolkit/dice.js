// dice.js
// Random Dice Generator using Node.js's "crypto" module for secure randomness
// Run with: node dice.js

const crypto = require("crypto");
const fs = require("fs");
const logger = require("./modules/logger");

// Generates a cryptographically secure random integer between 1 and 6
function rollDice() {
  // randomInt(min, max) -> min inclusive, max exclusive, so use 1 to 7
  return crypto.randomInt(1, 7);
}

// Simulate multiple dice rolls
const numberOfRolls = 5;
const history = [];

logger.info(`Rolling dice ${numberOfRolls} times...`);

for (let i = 1; i <= numberOfRolls; i++) {
  const value = rollDice();
  console.log(`Roll ${i}: Dice Rolled: ${value}`);
  history.push(`Roll ${i}: ${value}`);
}

// Bonus: store dice roll history in a text file
fs.writeFile("./dice_history.txt", history.join("\n"), (err) => {
  if (err) {
    logger.error(`Could not save dice history: ${err.message}`);
    return;
  }
  logger.success("Dice roll history saved to dice_history.txt");
});
