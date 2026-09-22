// modules/logger.js
// Custom logger module to print timestamped log messages

function log(message) {
  const timestamp = new Date().toLocaleString();
  console.log(`[${timestamp}] ${message}`);
}

// Exporting an object with multiple helper functions
module.exports = {
  log,
  info: (msg) => log(`INFO: ${msg}`),
  error: (msg) => log(`ERROR: ${msg}`),
  success: (msg) => log(`SUCCESS: ${msg}`),
};
