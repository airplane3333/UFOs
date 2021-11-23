//import the data into a table from data.js
const tableData = data;

//Reference the HTML table using d3
var tbody = d3.select("tbody");

// function to build the table with data
function buildTable(data) {
    //clear data from the table 
   tbody.html(""); 

//function to build the data table using a forEach loop
    data.forEach((dataRow) => {
      let row = tbody.append("tr");
    // Loop through each field in the data row
      Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
      }
    );
});
}

// creating a new function to filter data
function handleClick() {
    // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  
  // Rebuild the table using the filtered data
  buildTable(filteredData);
}
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);
// Build the table when the page loads
buildTable(tableData);