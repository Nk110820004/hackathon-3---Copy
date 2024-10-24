
let messages = [
    { sender: 'teacher', message: 'Please make sure your child completes the homework on time.' },
    { sender: 'parent', message: 'Thank you, I will ensure that.' }
];
function loadMessages() {
    const messageContainer = document.getElementById('messages');
    messageContainer.innerHTML = ''; // Clear previous messages
    
    messages.forEach((msg, index) => {
        console.log(`${msg.sender === 'parent' ? 'Parent' : 'Teacher'}: ${msg.message}`);

        // Display messages in the UI
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', msg.sender);
        messageDiv.innerHTML = `<strong>${msg.sender === 'parent' ? 'You' : 'Teacher'}:</strong> ${msg.message}`;
        messageContainer.appendChild(messageDiv);
    });
}

// Handle form submission (sending a message)
document.getElementById('messageForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

    if (message.trim() !== "") {
        // Add the new message to the messages array
        messages.push({
            sender: 'parent',
            message: message
        });

        // Log the message to the console
        console.log(`Parent: ${message}`);

        // Reload the messages in the UI
        loadMessages();

        // Clear the input field
        messageInput.value = '';
    }
});

// Load messages on page load
window.onload = loadMessages;
