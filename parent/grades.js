// Simulated data for the grades
const gradesData = [
    { subject: 'Mathematics', grade: 'A' },
    { subject: 'English', grade: 'B+' },
    { subject: 'Science', grade: 'A-' },
    { subject: 'History', grade: 'B' },
    { subject: 'Physical Education', grade: 'A+' }
];

// Function to load grades into the table
function loadGrades() {
    const tbody = document.querySelector('#gradesTable tbody');
    tbody.innerHTML = ''; // Clear the table

    // Loop through the grades data and add rows to the table
    gradesData.forEach(gradeItem => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${gradeItem.subject}</td><td>${gradeItem.grade}</td>`;
        tbody.appendChild(row);
    });
}

// Function to print the grades
document.getElementById('printButton').addEventListener('click', function () {
    window.print(); // Use the browser's print function
});

// Load the grades on page load
window.onload = loadGrades;
