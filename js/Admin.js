document.addEventListener("DOMContentLoaded", function () {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");

    if (loggedInUser.role === "admin") {
        document.getElementById("adminName").textContent = loggedInUser.name || "Admin";
        document.getElementById("adminEmail").textContent = loggedInUser.email || "admin@example.com";

        // Dummy user data (replace with API call in production)
        const allUsers = [
            { id: "USER001", name: "John Doe", email: "user1@gmail.com", role: "client" },
            { id: "USER002", name: "Jane Smith", email: "user2@gmail.com", role: "client" },
            { id: "USER003", name: "Alice Johnson", email: "user3@gmail.com", role: "client" },
            { id: "USER004", name: "Bob Brown", email: "user4@gmail.com", role: "client" },
            { id: "USER005", name: "Charlie Williams", email: "user5@gmail.com", role: "client" }
        ];

        const userBlocks = document.getElementById("userBlocks");

        if (allUsers.length === 0) {
            userBlocks.innerHTML = `<p class="no-users">No users found</p>`;
        } else {
            allUsers.forEach(user => {
                const userBlock = document.createElement("div");
                userBlock.classList.add("user-block");
                userBlock.innerHTML = `
                    <h4>${user.name}</h4>
                    <p><strong>ID:</strong> ${user.id}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Role:</strong> ${user.role}</p>
                `;
                userBlocks.appendChild(userBlock);
            });
        }
    } else {
        alert("Access Denied: Admins Only!");
        window.location.href = "index.html";
    }
});
