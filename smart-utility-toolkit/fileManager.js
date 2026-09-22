// fileManager.js
// A simple File Manager demonstrating CRUD operations using Node.js's "fs" module
// Run with: node fileManager.js

const fs = require("fs");
const logger = require("./modules/logger");

const filePath = "./test.txt";

// 1. CREATE FILE
function createFile() {
  logger.info("Creating File...");
  fs.writeFile(filePath, "Hello Node.js", (err) => {
    if (err) {
      logger.error(`Failed to create file: ${err.message}`);
      return;
    }
    logger.success("File Created");
    readFile();
  });
}

// 2. READ FILE
function readFile() {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      logger.error(`Failed to read file: ${err.message}`);
      return;
    }
    logger.info("Reading File");
    console.log(data);
    updateFile();
  });
}

// 3. UPDATE FILE (append content)
function updateFile() {
  fs.appendFile(filePath, "\nLearning FS Module", (err) => {
    if (err) {
      logger.error(`Failed to update file: ${err.message}`);
      return;
    }
    logger.success("File Updated");

    // Show updated content
    fs.readFile(filePath, "utf8", (err, data) => {
      if (!err) console.log(data);
      deleteFile();
    });
  });
}

// 4. DELETE FILE
function deleteFile() {
  fs.unlink(filePath, (err) => {
    if (err) {
      logger.error(`Failed to delete file: ${err.message}`);
      return;
    }
    logger.success("File Deleted");
  });
}

// Handle missing file gracefully (bonus check)
function safeReadMissingFile() {
  fs.readFile("./nonexistent.txt", "utf8", (err, data) => {
    if (err) {
      logger.error(`File not found: ${err.message}`);
      return;
    }
    console.log(data);
  });
}

// Run the CRUD sequence
createFile();
safeReadMissingFile();
