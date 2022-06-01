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

function handleClick() {
  // Create date filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // Filter data where the date is equal to the date filter above
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  };

  // Call buildTable function to rebuild table using filteredData
  // @NOTE: If no date was entered,
  // filteredData will just be original tableData
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build table when page loads
buildTable(tableData);
