// ZigZag Conversion (Moderate):
// Convert a given string into a zigzag pattern with a given number of rows.

function convert(s, numRows) {
    if (numRows === 1 || s.length <= numRows) {
      return s;
    }
  
    const rows = new Array(numRows).fill('');
    let direction = -1; // -1 for moving up, 1 for moving down
    let row = 0;
  
    for (const char of s) {
      rows[row] += char;
  
      // Change direction when reaching the first or last row
      if (row === 0 || row === numRows - 1) {
        direction = -direction;
      }
  
      row += direction;
    }
  
    return rows.join('');
  }
  
  // Example usage:
  const s = "PAYPALISHIRING";
  const numRows = 3;
  console.log(convert(s, numRows));
  // Output: "PAHNAPLSIIGYIR"
  