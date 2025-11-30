// Example user data (for demo purposes only)
const users = [
    { email: "teacher@gmail.com", password: "1234@", role: "teacher" },
    { email: "admin@gmail.com", password: "admin123", role: "admin" },
    { email: "student@gmail.com", password: "student123", role: "student" }
];

// Show registration box
function showRegister() {
    document.getElementById('registerBox').classList.toggle('hidden');
}

// Login form submission
document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const role = document.getElementById('loginRole').value;

    const user = users.find(u => u.email === email && u.password === password && u.role === role);

    const loginMsg = document.getElementById('loginMsg');
    
    if(user){
        loginMsg.style.color = "green";
        loginMsg.textContent = "Login successful! Redirecting...";
        // Redirect based on role
        if(role === "teacher") window.location.href = "teacher.html";
        else if(role === "admin") window.location.href = "admin.html";
        else if(role === "student") window.location.href = "student.html";
    } else {
        loginMsg.style.color = "red";
        loginMsg.textContent = "Invalid credentials or role. Please try again.";
    }
});

// Registration form submission
document.getElementById('regForm').addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value.trim();
    const role = document.getElementById('regRole').value;

    // Check if user already exists
    const exists = users.find(u => u.email === email);
    const regMsg = document.getElementById('regMsg');

    if(exists){
        regMsg.style.color = "red";
        regMsg.textContent = "User already exists!";
        return;
    }

    users.push({ email, password, role });
    regMsg.style.color = "green";
    regMsg.textContent = `Account created for ${role} successfully! You can login now.`;
    document.getElementById('regForm').reset();
});
