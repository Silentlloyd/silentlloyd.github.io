
 function createTableElement(numCols, numRows) {
     var table = document.createElement('table');
     var body = document.getElementById('table');
     body.appendChild(table);
     for (var r = 0; r < numRows; r++) {
         var row = document.createElement('tr');
         row.className = 'row';
     for (var c = 0; c < numCols; c++) {
         var cell = document.createElement('td');
           cell.className = 'cell';
           row.appendChild(cell);
         };
           table.appendChild(row);
     };
  };
createTableElement(3,4);
