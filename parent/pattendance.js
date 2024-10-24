// Sample data that simulates teacher's attendance updates for a student
let attendanceData = [
    { date: '2024-10-21', subject: 'Math', status: 'Present' },
    { date: '2024-10-21', subject: 'English', status: 'Absent' },
    { date: '2024-10-22', subject: 'Science', status: 'Present' },
    { date: '2024-10-23', subject: 'Math', status: 'Absent' },
];

// Function to display the attendance data on the table
function displayAttendance() {
    const tableBody = document.querySelector('#attendance-table tbody');
    tableBody.innerHTML = ''; // Clear existing table rows

    attendanceData.forEach(record => {
        const row = document.createElement('tr');

        const dateCell = document.createElement('td');
        dateCell.textContent = record.date;
        
        const subjectCell = document.createElement('td');
        subjectCell.textContent = record.subject;

        const statusCell = document.createElement('td');
        statusCell.textContent = record.status;

        row.appendChild(dateCell);
        row.appendChild(subjectCell);
        row.appendChild(statusCell);

        tableBody.appendChild(row);
    });
}

// Mock function to simulate teacher's attendance update (this could come from an API in the future)
// function updateAttendance() {
//     // New data can be fetched and added to `attendanceData`
//     attendanceData.push(
//         { date: '2024-10-24', subject: 'Math', status: 'Present' },
//         { date: '2024-10-24', subject: 'Science', status: 'Present' }
//     );

//     displayAttendance(); // Refresh the display
// }

// // Event listener for the refresh button to load new attendance data
// document.getElementById('refresh-btn').addEventListener('click', updateAttendance);

// Initial load of attendance data when the page loads
displayAttendance();
