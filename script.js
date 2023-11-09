// Replace 'YOUR_GOOGLE_SHEET_LINK' with the link you obtained from Step 2
const googleSheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQEk3sGVZPWddYWfYTWrm9dD66iqNgwPZ1DVJTC8XwsRfjpydyOiOTmVgPLUEd61I_j5bEiMbdgZOSL/pubhtml?gid=1434420516&single=true';

// Function to fetch data from Google Sheet
async function fetchData() {
    const response = await fetch(googleSheetUrl);
    const data = await response.text();

    // Split the data into rows
    const rows = data.split(/\r?\n/);

    // Extract and display the data
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "<ul>";
    rows.forEach(row => {
        const cells = row.split(",");
        contentDiv.innerHTML += `<li>${cells.join(" - ")}</li>`;
    });
    contentDiv.innerHTML += "</ul>";
}

// Call the fetchData function
fetchData();
