document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPassword").value;
    let role = document.getElementById("loginRole").value;

    // Static credentials
    const users = {
        teacher: { email: "somnadh@example.com", password: "somnad" },
        admin:   { email: "admin@example.com",   password: "admin123" },
        student: { email: "student@example.com", password: "stud123" }
    };

    // Check if role is selected
    if (!role) {
        document.getElementById("loginMsg").innerText = "Please select a role!";
        return;
    }

    // Validate credentials
    if (email === users[role].email && pass === users[role].password) {

        document.getElementById("loginMsg").style.color = "green";
        document.getElementById("loginMsg").innerText = "Login Successful! Redirecting...";

        // Redirect based on role
        if (role === "teacher") {
            window.location.href = "teacher.html";
        } else if (role === "admin") {
            window.location.href = "admin.html";
        } else if (role === "student") {
            window.location.href = "student.html";
        }

    } else {
        document.getElementById("loginMsg").style.color = "red";
        document.getElementById("loginMsg").innerText = "Invalid Email or Password!";
    }
});


function showRegister() {
    document.getElementById("registerBox").classList.toggle("hidden");
}