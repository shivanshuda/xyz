// Retrieve logged-in user from localStorage
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (loggedInUser && loggedInUser.role === "client") {
    document.getElementById("profileImage").src = `images/${loggedInUser.id}.jpg` || "images/default-profile.png";
    document.getElementById("userName").textContent = loggedInUser.name || "User";
    document.getElementById("userEmail").textContent = loggedInUser.email || "example@example.com";
    document.getElementById("userRole").textContent = loggedInUser.role || "Client";
    
    document.getElementById("userDepartment").textContent = loggedInUser.department || "Not assigned";
    document.getElementById("userAttendance").textContent = loggedInUser.attendance || "No data";
    document.getElementById("userSalary").textContent = loggedInUser.salary || "Not specified";
    document.getElementById("userContact").textContent = loggedInUser.contact_no || "No contact details";
    document.getElementById("userAddress").textContent = loggedInUser.address || "No address provided";
    document.getElementById("userJoiningDate").textContent = loggedInUser.joining_date || "No date available";
} else {
    alert("Access Denied: Clients Only!");
    window.location.href = "index.html"; // Redirect to login if unauthorized
}

// Logout functionality
document.getElementById("logoutBtn").addEventListener("click", function () {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
});

// Settings button functionality
document.getElementById("settingsBtn").addEventListener("click", function () {
    alert("Settings feature coming soon!");
});
