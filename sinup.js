document.addEventListener("DOMContentLoaded", function() {
    // Lắng nghe sự kiện submit của biểu mẫu đăng ký
    document.getElementById("signupForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của biểu mẫu

        // Lấy giá trị từ các trường nhập liệu
        var fullname = document.getElementById("fullname").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;

        // Kiểm tra xem các trường đã được điền đầy đủ và mật khẩu đã được xác nhận chưa
        if (fullname && email && password && confirmPassword && password === confirmPassword) {
            // Nếu mọi thứ hợp lệ, chuyển hướng sang trang đăng nhập
            window.location.href = "signin.html";
        } else {
            // Nếu có lỗi, hiển thị thông báo
            alert("Please fill in all fields and ensure passwords match.");
        }
    });
});
