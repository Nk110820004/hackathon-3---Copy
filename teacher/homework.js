document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    console.log(`Sending message Subject: ${subject}\nMessage: ${message}`);
    document.getElementById('confirmation').classList.remove('hidden');
    this.reset();
});
