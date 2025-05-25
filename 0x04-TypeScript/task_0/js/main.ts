document.addEventListener("DOMContentLoaded", () => {
  // Your existing code here, starting from creating the table

  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  const header = document.createElement("tr");
  const headerFirstName = document.createElement("th");
  headerFirstName.textContent = "First Name";
  const headerLocation = document.createElement("th");
  headerLocation.textContent = "Location";
  header.appendChild(headerFirstName);
  header.appendChild(headerLocation);
  tbody.appendChild(header);

  studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
});


