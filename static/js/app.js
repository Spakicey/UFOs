// Import the data from data.js
const tableData = data;

// Reference the html table using d3
var tbody = d3.select('tbody');

// Function to build table
function buildTable(data) {
  // Clear out existing data
  tbody.html("");

  // Loop through data using forEach
  data.forEach((dataRow) => {
    // Append row to table body
    let row = tbody.append("tr");

    // Loop through dataRow to create each cell of data
    Object.values(dataRow).forEach((val) => {
      // Append table cells and add values to cell
      let cell = row.append("td");
      cell.text(val);
    });
  });
}
