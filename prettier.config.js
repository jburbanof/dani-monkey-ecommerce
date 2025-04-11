// prettier.config.js

/** @type {import("prettier").Config} */
module.exports = {
    semi: true,                  // Add semicolons at the end of statements
    singleQuote: true,          // Use single quotes instead of double quotes
    trailingComma: 'es5',       // Add trailing commas where valid in ES5 (objects, arrays, etc.)
    tabWidth: 2,                // Number of spaces per indentation level
    useTabs: false,             // Indent lines with spaces instead of tabs
    printWidth: 100,            // Specify the line length that the printer will wrap on
    bracketSpacing: true,       // Print spaces between brackets in object literals
    arrowParens: 'avoid',       // Omit parens when possible for single-arg arrow functions
    endOfLine: 'auto',          // Maintain existing line endings (useful for cross-OS projects)
  };