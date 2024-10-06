const products = [
    {
        title: "Planter",
        price: "1000",
        discount:20,
        image: "abc/planters.jpeg",
        rating: 4
    },
    {
        title: "Designer coster",
        price: "900",
        discount:20,
        image: "abc/coster.webp",
        rating: 5
    },
    {
        title: "File",
        price: "600",
        discount:10,
        image: "abc/newfiles.jpg",
        rating: 3
    },
    {
        title: "Storage basket",
        price: "1000",
        discount:20,
        image: "abc/owl2.webp",
        rating: 4
    },
    {
        title: "Fruit tray",
        price: "900",
        discount:20,
        image: "abc/fruit tray2.jpg",
        rating: 4
    },
    {
        title: "Pen stand",
        price: "500",
        discount:10,
        image: "abc/pen stand.jpg",
        rating: 5
    },
    {
        title: "Diary",
        price: "900",
        discount:20,
        image: "abc/diary.jpg",
        rating: 4
    },
    {
        title: "Oval tray",
        price: "500",
        discount:10,
        image: "abc/oval tray.jpg",
        rating: 5
    },
    {
        title: "Tray",
        price: "1320",
        discount:20,
        image: "abc/tray1.webp",
        rating: 3
    },
    {
        title: "Love shaped tray",
        price: "980",
        discount:20,
        image: "abc/tray2.webp",
        rating: 4
    },
    {
        title: "Tray",
        price: "960",
        discount:20,
        image: "abc/tray3.jpeg",
        rating: 5
    },
    {
        title: "Tray",
        price: "890",
        discount:20,
        image: "abc/tray4.jpeg",
        rating: 3
    },
    {
        title: "Coster",
        price: "650",
        discount:10,
        image: "abc/coster6.jpg",
        rating: 4
    },
    {
        title: "Coster",
        price: "400",
        discount:5,
        image: "abc/coster2.jpeg",
        rating: 5
    },
    {
        title: "Coster",
        price: "400",
        discount:5,
        image: "abc/coster3.webp",
        rating: 3
    },
    {
        title: "Coster",
        price: "400",
        discount:5,
        image: "abc/coster4.jpg",
        rating: 4
    },
    {
        title: "Coster",
        price: "400",
        discount:5,
        image: "abc/coster5.jpg",
        rating: 4
    },
    {
        title: "Coster",
        price: "400",
        discount:5,
        image: "abc/coster.webp",
        rating: 4
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

