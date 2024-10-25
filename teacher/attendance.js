const students = [
    { name: 'Alice Brown' },
    { name: 'Bob Johnson' },
    { name: 'Charlie Davis' },
    { name: 'David Lee' },
    { name: 'Emily Chen' },
  ];
  students.sort((a, b) => a.name.localeCompare(b.name));
  const studentList = document.getElementById('studentList');
  
  // Function to create table rows for each student
  function createStudentRows() {
    students.forEach((student, index) => {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      const statusCell = document.createElement('td');
  
      // Set the student name cell content
      nameCell.textContent = student.name;
  
      // Create radio buttons for present and absent
      const presentRadio = document.createElement('input');
      presentRadio.type = 'radio';
      presentRadio.name = `student${index}`;
      presentRadio.value = 'Present';
  
      const absentRadio = document.createElement('input');
      absentRadio.type = 'radio';
      absentRadio.name = `student${index}`;
      absentRadio.value = 'Absent';
  
      // Create labels for radio buttons
      const presentLabel = document.createElement('label');
      presentLabel.textContent = 'Present';
      presentLabel.appendChild(presentRadio);
  
      const absentLabel = document.createElement('label');
      absentLabel.textContent = 'Absent';
      absentLabel.appendChild(absentRadio);
  
      // Add the radio buttons to the status cell
      statusCell.appendChild(presentLabel);
      statusCell.appendChild(absentLabel);
  
      // Add the cells to the row
      row.appendChild(nameCell);
      row.appendChild(statusCell);
  
      // Add the row to the table body
      studentList.appendChild(row);
    });
  }
  
  // Create student rows on page load
  createStudentRows();
  
  // Get the submit attendance button element
  const submitAttendanceButton = document.getElementById('submitAttendance');
  const messageDiv = document.createElement('div'); 
  messageDiv.id = 'thankYouMessage';
  messageDiv.style.display = 'none'; 
  document.body.appendChild(messageDiv);
  
  // Add an event listener to the button
  submitAttendanceButton.addEventListener('click', () => {
    const unmarkedStudents = []; // Array to hold names of unmarked students
  
    // Check each row for marked attendance
    Array.from(studentList.children).forEach((row) => {
      const presentRadio = row.cells[1].querySelector('input[value="Present"]');
      const absentRadio = row.cells[1].querySelector('input[value="Absent"]');
      
      // If neither radio button is checked, add the student's name to the unmarked list
      if (!presentRadio.checked && !absentRadio.checked) {
        const studentName = row.cells[0].textContent;
        unmarkedStudents.push(studentName);
      }
    });
  
    // If there are unmarked students, alert their names
    if (unmarkedStudents.length > 0) {
      alert(`Please mark attendance for the following students:\n${unmarkedStudents.join('\n')}`);
    } else {
      // If all students are marked, proceed with attendance data collection
      const attendanceData = Array.from(studentList.children).map((row) => {
        const studentName = row.cells[0].textContent;
        const presentRadio = row.cells[1].querySelector('input[value="Present"]');
        const absentRadio = row.cells[1].querySelector('input[value="Absent"]');
        const status = presentRadio.checked ? 'Present' : 'Absent';
  
        return { studentName, status };
      });
      submitAttendanceButton.disabled = true;
            messageDiv.textContent = "Thank you! Enjoy your day.";
            messageDiv.style.display = 'block';
  
      // Log the attendance data to the console
      console.log(attendanceData);
    }
  });