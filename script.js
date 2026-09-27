/* =========================================
   VOGUE - Fashion E-Commerce Website
   JavaScript
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navigation.classList.toggle("active");

        if (navigation.classList.contains("active")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }
    });
}


/* =========================================
   CLOSE MOBILE MENU AFTER CLICKING LINK
========================================= */

const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");

        if (menuBtn) {
            menuBtn.textContent = "☰";
        }
    });
});


/* =========================================
   CART
========================================= */

let cartCount = 0;

const cartCountElement = document.querySelector(".cart-count");
const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        if (cartCountElement) {
            cartCountElement.textContent = cartCount;
        }

        const originalText = button.textContent;

        button.textContent = "Added ✓";
        button.style.background = "#171717";
        button.style.color = "#fff";

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = "";
            button.style.color = "";
        }, 1000);
    });

});


/* =========================================
   WISHLIST
========================================= */

const wishlistButtons = document.querySelectorAll(".wishlist");

wishlistButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (button.textContent === "♡") {
            button.textContent = "♥";
            button.style.color = "#b14b4b";
        } else {
            button.textContent = "♡";
            button.style.color = "";
        }

    });

});


/* =========================================
   PRODUCT SEARCH
========================================= */

const searchInput = document.querySelector(".search-box input");
const productCards = document.querySelectorAll(".product-card");

if (searchInput) {

    searchInput.addEventListener("input", () => {

        const searchValue = searchInput.value.toLowerCase().trim();

        productCards.forEach(card => {

            const productName = card
                .querySelector("h3")
                .textContent
                .toLowerCase();

            if (productName.includes(searchValue)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

}


/* =========================================
   CATEGORY FILTER
========================================= */

const categoryFilter = document.querySelector(".filter-options select");

if (categoryFilter) {

    categoryFilter.addEventListener("change", () => {

        const selectedCategory = categoryFilter.value.toLowerCase();

        productCards.forEach(card => {

            const productCategory =
                card.dataset.category
                    ? card.dataset.category.toLowerCase()
                    : "";

            if (
                selectedCategory === "all" ||
                selectedCategory === "" ||
                productCategory === selectedCategory
            ) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

}


/* =========================================
   PRICE SORTING
========================================= */

const sortSelect = document.querySelectorAll(".filter-options select")[1];

if (sortSelect) {

    sortSelect.addEventListener("change", () => {

        const productGrid = document.querySelector(".product-grid");

        if (!productGrid) return;

        const cards = Array.from(
            productGrid.querySelectorAll(".product-card")
        );

        const prices = cards.map(card => {

            const priceText = card
                .querySelector(".product-info p")
                .textContent
                .replace(/[^0-9]/g, "");

            return parseInt(priceText);
        });

        const selectedSort = sortSelect.value;

        if (selectedSort === "low-high") {

            cards.sort((a, b) => {

                const priceA = parseInt(
                    a.querySelector(".product-info p")
                        .textContent
                        .replace(/[^0-9]/g, "")
                );

                const priceB = parseInt(
                    b.querySelector(".product-info p")
                        .textContent
                        .replace(/[^0-9]/g, "")
                );

                return priceA - priceB;
            });

        } else if (selectedSort === "high-low") {

            cards.sort((a, b) => {

                const priceA = parseInt(
                    a.querySelector(".product-info p")
                        .textContent
                        .replace(/[^0-9]/g, "")
                );

                const priceB = parseInt(
                    b.querySelector(".product-info p")
                        .textContent
                        .replace(/[^0-9]/g, "")
                );

                return priceB - priceA;
            });

        }

        cards.forEach(card => {
            productGrid.appendChild(card);
        });

    });

}


/* =========================================
   NEWSLETTER
========================================= */

const newsletterForm = document.querySelector(".newsletter form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const emailInput = newsletterForm.querySelector("input");

        if (emailInput.value.trim() === "") {
            alert("Please enter your email address.");
            return;
        }

        alert(
            "Thank you for subscribing to VOGUE! You will receive 10% off your first order."
        );

        emailInput.value = "";

    });

}


/* =========================================
   CART BUTTON
========================================= */

const cartButton = document.querySelector(".cart-btn");

if (cartButton) {

    cartButton.addEventListener("click", () => {

        if (cartCount === 0) {
            alert("Your cart is currently empty.");
        } else {
            alert(
                "You have " +
                cartCount +
                " item(s) in your cart."
            );
        }

    });

}


/* =========================================
   CATEGORY CARDS
========================================= */

const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach(card => {

    card.addEventListener("click", () => {

        const shopSection = document.querySelector("#shop");

        if (shopSection) {
            shopSection.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


/* =========================================
   SIMPLE SCROLL EFFECT
========================================= */

const shopButtons = document.querySelectorAll(
    'a[href="#shop"], a[href="#new-arrivals"]'
);

shopButtons.forEach(button => {

    button.addEventListener("click", event => {

        const targetId = button.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});