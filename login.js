document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form submission to server

    // Get the values of the input fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate the input (basic validation example)
    if(username === "admin" && password === "1234") {
        // Redirect to home page
        window.location.href = "agro.html"; 
    } else {
        alert("Invalid credentials. Try again.");
    }
});
