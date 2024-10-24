document.addEventListener('DOMContentLoaded', loadStudents);

function loadStudents() {
    fetch('get_students.php')
        .then(response => response.json())
        .then(data => {
            const studentSelect = document.getElementById('studentSelect');
            studentSelect.innerHTML = '<option value="">-- Select a Student --</option>';

            data.forEach(student => {
                const option = document.createElement('option');
                option.value = student.name;
                option.textContent = student.name;
                studentSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error:', error));
}

document.getElementById('marksForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const studentName = document.getElementById('studentSelect').value;
    const marks = document.getElementById('marks').value;

    if (studentName) {
        const marksList = document.getElementById('marksList');
        const listItem = document.createElement('li');
        listItem.textContent = `${studentName}: ${marks}`;
        marksList.appendChild(listItem);

        // Clear the input fields
        document.getElementById('marksForm').reset();
    }
});


document.getElementById('marksForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const studentName = document.getElementById('studentSelect').value;
    const marks = document.getElementById('marks').value;

    if (studentName) {
        const marksList = document.getElementById('marksList');
        const listItem = document.createElement('li');
        listItem.textContent = `${studentName}: ${marks}`;
        marksList.appendChild(listItem);

        // Clear the input fields
        document.getElementById('marksForm').reset();
    }
});
