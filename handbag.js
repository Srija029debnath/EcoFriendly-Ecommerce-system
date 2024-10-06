// Array of product details
const products = [
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
function generateProducts() {
    const productGrid = document.getElementById('product-grid');
    products.forEach((product) => {
        // Calculate the final price after discount
        const discountedPrice = product.price - (product.price * product.discount / 100);

        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.title}">
                <h2 class="product-title">${product.title}</h2>
                <p class="product-price">
                    <span>₹${discountedPrice}</span> <span class="original-price">₹${product.price}</span>
                    <span class="discount">(${product.discount}% OFF)</span>
                </p>
                <div class="product-rating">
                    ${getStarRating(product.rating)}
                </div>
                <button class="buy-now-btn">Add to Cart</button>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
}

// Function to generate star ratings
function getStarRating(rating) {
    let starHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starHtml += '<span class="star">★</span>';
        } else {
            starHtml += '<span class="star">☆</span>';
        }
    }
    return starHtml;
}

// Call function to generate products on page load
generateProducts();

