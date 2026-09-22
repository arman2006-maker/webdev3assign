# Smart Utility Toolkit

Lab Assignment 1 — Web Dev III (Node.js & Express Backend), Unit 1
Built using only Node.js core modules: `process`, `http`, `fs`, `crypto`.

## Folder Structure
```
smart-utility-toolkit/
├── calculator.js       # CLI calculator (process.argv)
├── app.js              # Demonstrates custom module reuse
├── server.js           # HTTP server with multiple routes
├── fileManager.js       # CRUD file operations (fs module)
├── dice.js             # Random dice generator (crypto module)
├── modules/
│   ├── isEven.js       # Custom module - checks even/odd
│   └── logger.js       # Custom module - timestamped logging
└── README.md
```

## How to Run

### 1. CLI Calculator
```
node calculator.js add 10 5
node calculator.js sub 10 5
node calculator.js mul 10 5
node calculator.js div 10 5
```

### 2. Custom Module Demo (isEven + logger)
```
node app.js
```

### 3. HTTP Server
```
node server.js
```
Then visit in browser:
- http://localhost:3000/        → Welcome message
- http://localhost:3000/about   → About page
- http://localhost:3000/contact → Contact page
- Any other URL                 → 404 error

### 4. File Manager (Create, Read, Update, Delete)
```
node fileManager.js
```
Creates `test.txt`, writes to it, reads it, appends text, then deletes it.
Also demonstrates graceful handling of a missing file.

### 5. Dice Generator
```
node dice.js
```
Rolls a secure random dice (1–6) 5 times and saves the history to
`dice_history.txt` (bonus feature).

## Notes
- No external npm packages, Express, or database used — pure Node.js core modules only.
- `logger.js` module adds timestamps to every log line (bonus feature).
- Dice roll history is stored in a text file (bonus feature).
