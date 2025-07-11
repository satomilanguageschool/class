// Mock data for general users (ID required)
const generalUsers = [
    { id: "SP001", firstname: "Mariame", lastname: "Tiane", password: "p1"},
    { id: "SP002", firstname: "Sarr", lastname: "Abdoulaye", password: "p2"},
];

// Login form submission handler
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const id = document.getElementById("id").value.trim();
    const password = document.getElementById("password").value.trim();

    if (firstname === "Satomi" && lastname === "Hirose" && password === "sp1") {
        // Redirect to another page
        window.location.href = "https://satomilanguageschool.github.io/class/Satomi.html"; // Replace with your page URL
    };
    if (firstname === "Fatima" && lastname === "Coulibably" && password === "sp2") {
        // Redirect to another page
        window.location.href = "https://satomilanguageschool.github.io/class/Teacher/Home/Fatima.html"; // Replace with your page URL
    };
    if (firstname === "Meoko" && lastname === "Gningue" && password === "sp3") {
        // Redirect to another page
        window.location.href = "https://satomilanguageschool.github.io/class/Teacher/Home/Moeko.html"; // Replace with your page URL
    };
    // Check if the user is a general user with ID
    const generalUser = generalUsers.find(user =>
        user.id === id &&
        user.firstname === firstname &&
        user.lastname === lastname &&
        user.password === password
    );

    if (generalUser) {
        // Redirect to another page for general users
        window.location.href = "https://satomilanguageschool.github.io/class/Student/Home/Student%20Entrance%20Portal.html"; // Change this to the actual page
        return;
    }
    // If no match, show an error
    alert("Erreur d'identifant, réessayer s'il vous plait/ユーザー名エラー。もう一度お試しください");
});
