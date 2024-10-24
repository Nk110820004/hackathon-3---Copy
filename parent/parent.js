const homeworkData = [
    {
        subject: "Math",
        message: "Complete exercises on page 23",
        date: "2024-10-20"
    },
    {
        subject: "Science",
        message: "Read chapter 5 and write a summary",
        date: "2024-10-21"
    },
    {
        subject: "English",
        message: "Submit essay on 'My Favorite Book'",
        date: "2024-10-22"
    }
];
// Function to load homework into the list
function loadHomework() {
    const homeworkList = document.getElementById('homeworkItems');
    
    homeworkData.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${item.subject} (${item.date}):</strong> ${item.message}`;
        homeworkList.appendChild(listItem);
    });
}

// Load the homework when the page loads
window.onload = loadHomework;
