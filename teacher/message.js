document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const teacherName = document.getElementById('teacherName').value;
    const messageContent = document.getElementById('message').value;

    // Create a new message element
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'teacher');
    messageDiv.textContent = `${teacherName}: ${messageContent}`;

    // Append the new message to the message list
    document.getElementById('messageList').appendChild(messageDiv);

    // Clear the input fields
    document.getElementById('messageForm').reset();
});
