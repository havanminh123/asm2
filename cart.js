// document.addEventListener("DOMContentLoaded", function() {
//     console.log()
//     const cartIcon = document.getElementById("cart-icon");
//     const cartTable = document.getElementById("cart-table");
//     const addToCartButtons = document.querySelectorAll(".cart-button");
//     const totalPriceElement = document.getElementById("total-amount");

//     let totalPrice = 0;
//     let itemCount = 0;
//     const itemCountElement = document.createElement("span"); // Tạo một phần tử span mới
//     itemCountElement.id = "item-count"; // Đặt id cho phần tử
//     itemCountElement.innerText = `(0)`; // Đặt nội dung ban đầu
//     // Thêm phần tử vào DOM
//     document.body.appendChild(itemCountElement);

//     addToCartButtons.forEach(button => {
//         button.addEventListener("click", function(event) {
//             const priceString = event.target.parentElement.previousElementSibling.querySelector("span").innerText;
//             const price = parseFloat(priceString.substring(1));
//             totalPrice += price;
//             itemCount++;
//             totalPriceElement.innerText = totalPrice.toFixed(2);
//             itemCountElement.innerText = `(${itemCount})`; // Cập nhật số lượng sản phẩm trong giỏ hàng
//         });
//     });

//     cartIcon.addEventListener("click", function() {
//         if (cartTable.classList.contains("show")) {
//             cartTable.classList.remove("show");
//         } else {
//             cartTable.classList.add("show");
//         }
//     });
// });
document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll(".product");
    const cartTableBody = document.querySelector("#cart-table tbody");
    const totalPriceElement = document.querySelector("#total-price");

    let totalPrice = 0;

    products.forEach(product => {
        const addToCartButton = product.querySelector(".cart-button");
        const price = parseFloat(product.querySelector(".price span").innerText.replace("$", ""));

        addToCartButton.addEventListener("click", function(event) {
            event.preventDefault();
            addToCart(product, price);
        });
    });

    function addToCart(product, price) {
        const productName = product.querySelector(".description span").innerText;
        
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${productName}</td>
            <td>$${price.toFixed(2)}</td>
            <td><button class="delete-button">Delete</button></td>
        `;
        
        cartTableBody.appendChild(row);

        totalPrice += price;
        totalPriceElement.innerText = `$${totalPrice.toFixed(2)}`;
    }

    cartTableBody.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-button")) {
            const row = event.target.closest("tr");
            const price = parseFloat(row.querySelector("td:nth-child(2)").innerText.replace("$", ""));
            totalPrice -= price;
            totalPriceElement.innerText = `$${totalPrice.toFixed(2)}`;
            row.remove();
        }
    });
});



// Định nghĩa hàm để hiển thị phần giỏ hàng khi nhấp vào nút giỏ hàng
document.getElementById("cart-icon").addEventListener("click", function() {
    document.getElementById("cart").classList.toggle("show");
});

// Định nghĩa hàm để đóng phần giỏ hàng khi nhấp vào nút đóng
document.getElementById("close-cart").addEventListener("click", function() {
    document.getElementById("cart").classList.remove("show");
});

// Định nghĩa hàm để thêm sản phẩm vào giỏ hàng
var cartButtons = document.querySelectorAll(".cart-button");
cartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var product = button.parentNode.parentNode;
        var productTitle = product.querySelector(".description span").innerText;
        var productPrice = product.querySelector(".price span").innerText;
        addToCart(productTitle, productPrice);
    });
});

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(title, price) {
    var cartTable = document.getElementById("cart-table").getElementsByTagName("tbody")[0];
    var newRow = cartTable.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    cell1.innerHTML = title;
    cell2.innerHTML = price;
    cell3.innerHTML = '<button class="remove-button">Remove</button>';
    updateTotal();
}

// Hàm cập nhật tổng giá trị
function updateTotal() {
    var total = 0;
    var priceCells = document.querySelectorAll("#cart-table tbody tr td:nth-child(2)");
    priceCells.forEach(function(cell) {
        total += parseFloat(cell.innerText.replace("$", ""));
    });
    document.getElementById("total-price").innerText = "$" + total.toFixed(2);
}

// Định nghĩa sự kiện xóa sản phẩm khỏi giỏ hàng
document.getElementById("cart-table").addEventListener("click", function(event) {
    if (event.target.classList.contains("remove-button")) {
        var row = event.target.parentNode.parentNode;
        row.parentNode.removeChild(row);
        updateTotal();
    }
});





document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search-container form');
    const searchInput = document.querySelector('.search-container input[type="text"]');
    const products = document.querySelectorAll('.product');
    
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        products.forEach(function(product) {
            const description = product.querySelector('.description');
            
            if (description.textContent.toLowerCase().includes(searchTerm)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});


