
// let cart = [];
// let totalAmount = 0;

// function addToCart(itemName, price) 
// {
//     cart.push({ name: itemName, price: price });
//     updateCart();
//     calculateTotal();
// }


// function updateCart()
// {
//     const cartItems = document.getElementById('cartItems');
//     cartItems.innerHTML = '';
//     cart.forEach(item => {
//         const li = document.createElement('li');
//         li.textContent = `${item.name} - ${item.price} RS`;
//         cartItems.appendChild(li);
//     });
// }


// function calculateTotal() 
// {
//     totalAmount = cart.reduce((total, item) => total + item.price, 0);
//     document.getElementById('totalAmount').textContent = totalAmount;
// }


// function applyDiscount() 
// {
//     const discountInput = document.getElementById('discount');
//     const discountPercentage = parseFloat(discountInput.value);

//     if (discountPercentage < 0 || discountPercentage > 100) 
//     {
//         alert('Discount percentage must be between 0 and 100.');
//         return;
//     }

//     const discountAmount = (discountPercentage / 100) * totalAmount;
//     const discountedTotal = totalAmount - discountAmount;

//     document.getElementById('totalAmount').textContent = discountedTotal.toFixed(3);
// }


let cart = [];
let totalAmount = 0;

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    updateCartAndTotal();
}

function updateCartAndTotal() {
    updateCart();
    calculateTotal();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} RS`;
        cartItems.appendChild(li);
    });
}

function calculateTotal() {
    totalAmount = cart.reduce((total, item) => total + item.price, 0);
    displayTotal();
}

function displayTotal() {
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2); // Display total with 2 decimal places
}

function applyDiscount() {
    const discountInput = document.getElementById('discount');
    const discountPercentage = parseFloat(discountInput.value);

    if (discountPercentage < 0 || discountPercentage > 100) {
        alert('Discount percentage must be between 0 and 100.');
        return;
    }

    const discountAmount = (discountPercentage / 100) * totalAmount;
    const discountedTotal = totalAmount - discountAmount;

    displayDiscountedTotal(discountedTotal);
}

function displayDiscountedTotal(discountedTotal) {
    document.getElementById('totalAmount').textContent = discountedTotal.toFixed(2); // Display discounted total with 2 decimal places
}
