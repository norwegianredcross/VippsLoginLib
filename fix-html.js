const fs = require('fs');
const path = require('path');

// Path to the built index.html file
const indexPath = path.resolve(__dirname, 'build', 'index.html');

// Read the file
fs.readFile(indexPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading index.html:', err);
    return;
  }

  // Replace self-closing tags with standard HTML5 void elements
  const fixedHtml = data
    .replace(/<meta([^>]*?)\/>\s*/g, '<meta$1>\n    ')
    .replace(/<link([^>]*?)\/>\s*/g, '<link$1>\n    ')
    .replace(/<img([^>]*?)\/>\s*/g, '<img$1>\n    ')
    .replace(/<input([^>]*?)\/>\s*/g, '<input$1>\n    ')
    .replace(/<br\/>\s*/g, '<br>\n    ')
    .replace(/<hr\/>\s*/g, '<hr>\n    ');

  // Write the fixed HTML back to the file
  fs.writeFile(indexPath, fixedHtml, 'utf8', (writeErr) => {
    if (writeErr) {
      console.error('Error writing fixed index.html:', writeErr);
      return;
    }
    console.log('Successfully fixed HTML void elements in build/index.html');
  });
});
