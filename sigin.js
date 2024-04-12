document.getElementById('signinForm').addEventListener('submit', function(event) {
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;

    // Lấy thông tin đăng ký từ trang đăng ký
    var registeredEmail = document.getElementById('email').value;
    var registeredPassword = document.getElementById('password').value;

    if (!email || !password) {
        alert("Please fill in all fields.");
        event.preventDefault(); // Prevent form submission
    } else if (email !== registeredEmail || password !== registeredPassword) {
        alert("Invalid email or password.");
        event.preventDefault(); // Prevent form submission
    } else {
        // Form is valid, continue with submission
        // Redirect to home page after successful signin
        window.location.href = "index.html";
    }
});
