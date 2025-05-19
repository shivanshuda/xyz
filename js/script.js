const users = [
    {
        id: "ADMIN001",
        name: "Admin One",
        email: "admin1@gmail.com",
        password: "admin123",
        role: "admin",
        contact_no: "+91 9876543210",
        address: "Delhi, India",
        joining_date: "2019-06-15"
    },
    {
        id: "ADMIN002",
        name: "Admin Two",
        email: "admin2@gmail.com",
        password: "admin456",
        role: "admin",
        contact_no: "+91 8765432109",
        address: "Mumbai, India",
        joining_date: "2020-08-20"
    },
    {
        id: "USER001",
        name: "John Doe",
        email: "user1@gmail.com",
        password: "user123",
        role: "client",
        contact_no: "+91 7654321098",
        department: "Software Development",
        salary: "$3000",
        attendance: "85%",
        address: "Bangalore, India",
        joining_date: "2021-04-10"
    },
    {
        id: "USER002",
        name: "Jane Smith",
        email: "user2@gmail.com",
        password: "user234",
        role: "client",
        contact_no: "+91 6543210987",
        department: "UI/UX Design",
        salary: "$2800",
        attendance: "90%",
        address: "Hyderabad, India",
        joining_date: "2021-07-18"
    }
];

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const userFound = users.find(user => user.email === email && user.password === password);

    if (userFound) {
        // Store the logged-in user's data in LocalStorage
        localStorage.setItem("loggedInUser", JSON.stringify(userFound));
console.log(userFound)
        // Redirect based on role
        if (userFound.role === "admin") {
            window.location.href = "admin_dashboard.html";
        } else {
            window.location.href = "client_dashboard.html";
        }
    } else {
        alert("Invalid email or password! Please try again.");
    }
});
