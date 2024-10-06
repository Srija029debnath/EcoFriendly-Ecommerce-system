document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;

    // Check if dark mode is stored in localStorage
    if (localStorage.getItem("dark-mode") === "enabled") {
        enableDarkMode();
    }

    // Toggle button event listener
    toggleButton.addEventListener("click", () => {
        if (localStorage.getItem("dark-mode") !== "enabled") {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });

    function enableDarkMode() {
        body.classList.add("dark-mode");
        document.querySelectorAll("a").forEach(el => el.classList.add("dark-mode"));
        localStorage.setItem("dark-mode", "enabled");
        toggleButton.textContent = "☀️ Light Mode"; // Change button text
    }

    function disableDarkMode() {
        body.classList.remove("dark-mode");
        document.querySelectorAll("a").forEach(el => el.classList.remove("dark-mode"));
        localStorage.setItem("dark-mode", "disabled");
        toggleButton.textContent = "🌙 Dark Mode"; // Change button text
    }
});
// Product Data (example)
const products = [
    {
        title: "Fruit tray",
        image: "abc/fruit tray2.jpg",
        price: 800,
        discount: 20,  
        rating: 4.5  
    },
    {
        title: "Eco-friendly Penstand",
        image: "abc/pen stand.jpg",
        price: 15.99,
        discount: 10,  
        rating: 4.2
    },
    {
        title: "Eco-friendly Tray",
        image: "abc/oval tray.jpg",
        price: 49.99,
        discount: 15,  
        rating: 4.7
    },
    {
        title: "Reusable Notebook",
        image: "abc/diary.jpg",
        price: 12.99,
        discount: 25,  
        rating: 4.8
    },
    {
        title: "Storage Basket",
        image: "abc/owl.webp",
        price: 35.99,
        discount: 20,  
        rating: 4.5  
    },
    {
        title: "Eco-friendly Planters",
        image: "abc/planters.jpeg",
        price: 15.99,
        discount: 10,  
        rating: 4.2
    },
    {
        title: "Storage Basket",
        image: "abc/owl2.webp ",
        price: 49.99,
        discount: 15,  
        rating: 4.7
    },
    {
        title: "Reusable Notebook",
        image: "abc/newfiles.jpg",
        price: 12.99,
        discount: 25,  
        rating: 4.8
    },
    {
        title: "Eco-Friendly Handbag",
        price: "900",
        discount:25,
        image: "abc/bag.jpg",
        rating: 4
    },
    {
        title: "Stylish Purse",
        price: "1100",
        discount:25,
        image: "abc/bag2.jpg",
        rating: 5
    },
    {
        title: "Leather Wallet",
        price: "1200",
        discount:25,
        image: "abc/bag3.jpg",
        rating: 3
    },
    {
        title: "Canvas Tote Bag",
        price: "1300",
        discount:25,
        image: "abc/bag4.jpeg",
        rating: 4
    },
    {
        title: "Eco-Friendly Handbag",
        price: "1500",
        discount:25,
        image: "abc/bag5.jpg",
        rating: 4
    },
    {
        title: "Stylish Purse",
        price: "$1700",
        discount:25,
        image: "abc/bag6.jpg",
        rating: 5
    },
    {
        title: "Leather Wallet",
        price: "1500",
        discount :20,
        image: "abc/bag7.jpg",
        rating: 4
    },
    {
        title: "Canvas Tote Bag",
        price: "1499",
        discount:25,
        image: "abc/bag8.jpeg",
        rating: 4
    }
];

// Function to generate product cards dynamically
function generateProductCards() {
    const productGrid = document.getElementById('product-grid');

    products.forEach(product => {
        const discountPrice = (product.price - (product.price * (product.discount / 100))).toFixed(2);

        // Create product card container
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Product image
        const productImg = document.createElement('img');
        productImg.src = product.image;
        productImg.alt = product.title;
        productCard.appendChild(productImg);

        // Product title
        const productTitle = document.createElement('h3');
        productTitle.classList.add('product-title');
        productTitle.innerText = product.title;
        productCard.appendChild(productTitle);

        // Product price
        const productPrice = document.createElement('p');
        productPrice.classList.add('product-price');
        productPrice.innerHTML = `
            <span class="original-price">{High prizes}</span> 
            <span class="discount-price">{20% discount on every product}</span>
        `;
        productCard.appendChild(productPrice);

       
        // Product rating
        const productRating = document.createElement('div');
        productRating.classList.add('product-rating');
        productRating.innerHTML = generateStars(product.rating);
        productCard.appendChild(productRating);

        // Append the product card to the grid
        productGrid.appendChild(productCard);
    });
}

// Function to generate star ratings based on the rating value
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<span class="star">★</span>';  // Full star
        } else if (i - rating < 1) {
            stars += '<span class="star">☆</span>';  // Half star (or not filled fully)
        } else {
            stars += '<span class="star">☆</span>';  // Empty star
        }
    }
    return stars;
}

// Call the function to generate product cards when the page loads
document.addEventListener('DOMContentLoaded', generateProductCards);


// Newsletter Form Script
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission for demo

    const email = document.getElementById('newsletter-email').value;

    if (validateEmail(email)) {
        alert('Thank you for subscribing to our newsletter!');
        document.getElementById('newsletter-email').value = ''; // Reset email input
    } else {
        alert('Please enter a valid email address.');
    }
});

// Simple email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
