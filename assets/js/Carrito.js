let cart = [];
let total = 0;

// Función para agregar productos al carrito
function addToCart(name, price) {
    const item = cart.find(product => product.name === name);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    total += price;
    updateCart();
}

// Función para actualizar el carrito
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <button onclick="removeFromCart('${item.name}', ${item.price})">Eliminar</button>
        `;
        cartItems.appendChild(div);
    });
    cartTotal.textContent = total.toFixed(2);
}

// Función para eliminar productos del carrito
function removeFromCart(name, price) {
    const item = cart.find(product => product.name === name);
    if (item.quantity > 1) {
        item.quantity -= 1;
    } else {
        cart = cart.filter(product => product.name !== name);
    }
    total -= price;
    updateCart();
}

// Función para vaciar el carrito
function clearCart() {
    cart = [];
    total = 0;
    updateCart();
}

// Función para abrir el modal de pago
function openCheckoutModal() {
    if (cart.length === 0) {
        alert("El carrito está vacío. Agrega productos antes de pasar a caja.");
        return;
    }
    const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
    checkoutModal.show();
}

// Función para confirmar la compra
function confirmPurchase() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const card = document.getElementById('card').value;

    if (!name || !email || !address || !card) {
        alert("Por favor, completa todos los campos del formulario.");
        return;
    }

    alert(`¡Gracias por tu compra, ${name}! Tu pedido será enviado a ${address}.`);
    clearCart();
    const checkoutModal = bootstrap.Modal.getInstance(document.getElementById('checkoutModal'));
    checkoutModal.hide();
}