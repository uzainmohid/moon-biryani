// // Function to handle the order button click
// function orderItem(itemName, itemPrice) {
//     alert(`You have successfully ordered ${itemName} for ${itemPrice}!`);
// }

// // Select the button and the nav list
// const navToggle = document.querySelector('.nav-toggle');
// const navList = document.querySelector('.nav-list');

// // Add click event listener to toggle visibility
// navToggle.addEventListener('click', () => {
//   navList.classList.toggle('show');
// });

// toggle nav funtion
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
    });
} else {
    console.error('Navigation elements not found');
}

// Function to show an alert with item details
function showAlert(message) {
    alert(message);  // Simple alert showing the message passed
}


// // Function to handle the order when the "Order Now" button is clicked
// function orderItem(itemName, price) {
//     // Create a confirmation message with an item and price summary
//     const message = `Your order for <strong>${itemName}</strong> has been placed successfully! Total: <strong>${price}</strong>. Thank you for ordering with Moon Biryani!`;

//     // Call function to display the confirmation message
//     displayOrderConfirmation(message, itemName, price);
// }

// // Function to show a custom order confirmation message to the user
// function displayOrderConfirmation(message, itemName, price) {
//     // Prevent multiple pop-ups from appearing
//     if (document.querySelector('.order-confirmation')) {
//         return;
//     }

//     // Create a new div element for the modal and overlay
//     const overlay = document.createElement('div');
//     overlay.classList.add('order-overlay');
    
//     const confirmationDiv = document.createElement('div');
//     confirmationDiv.classList.add('order-confirmation');
    
//     // Set the inner HTML of the confirmation message with order details
//     confirmationDiv.innerHTML = `
//         <div class="order-content">
//             <p class="order-message">${message}</p>
//             <button class="close-btn" onclick="closeConfirmation()">Close</button>
//         </div>
//     `;
    
//     // Append the overlay and confirmation div to the body
//     document.body.appendChild(overlay);
//     document.body.appendChild(confirmationDiv);
    
//     // Show the modal with animation
//     setTimeout(() => {
//         overlay.classList.add('show');
//         confirmationDiv.classList.add('show');
//     }, 10);

//     // Optional: Auto-close after 5 seconds
//     setTimeout(closeConfirmation, 5000);
// }

// // Function to close the confirmation message and overlay
// function closeConfirmation() {
//     const confirmationDiv = document.querySelector('.order-confirmation');
//     const overlay = document.querySelector('.order-overlay');
    
//     if (confirmationDiv && overlay) {
//         // Add fade-out effect
//         confirmationDiv.classList.add('fade-out');
//         overlay.classList.add('fade-out');
        
//         // Remove the elements after animation
//         setTimeout(() => {
//             confirmationDiv.remove();
//             overlay.remove();
//         }, 500); // Match the fade-out duration
//     }
// }

// function orderItem(itemName, price) {
//     const message = `Your order for <strong>${itemName}</strong> has been placed successfully! Total: <strong>${price}</strong>. Thank you for ordering with Moon Biryani!`;
//     displayOrderConfirmation(message, itemName, price);
// }

// function displayOrderConfirmation(message, itemName, price) {
//     // Prevent multiple pop-ups from appearing at the same time
//     if (document.querySelector('.order-confirmation')) {
//         return;
//     }

//     const overlay = document.createElement('div');
//     overlay.classList.add('order-overlay');
//     overlay.setAttribute('role', 'dialog');
//     overlay.setAttribute('aria-labelledby', 'orderConfirmationTitle');
//     overlay.setAttribute('aria-hidden', 'false');
    
//     const confirmationDiv = document.createElement('div');
//     confirmationDiv.classList.add('order-confirmation');
//     confirmationDiv.setAttribute('role', 'document');

//     // Set the inner HTML of the confirmation message
//     confirmationDiv.innerHTML = `
//         <div class="order-content">
//             <h2 id="orderConfirmationTitle">Order Confirmation</h2>
//             <p class="order-message">${message}</p>
//             <button class="close-btn" onclick="closeConfirmation()">Close</button>
//         </div>
//     `;

//     // Append overlay and confirmation div to the body
//     document.body.appendChild(overlay);
//     document.body.appendChild(confirmationDiv);

//     // Set focus to the modal for accessibility
//     confirmationDiv.querySelector('.close-btn').focus();

//     // Show the modal with animation
//     setTimeout(() => {
//         overlay.classList.add('show');
//         confirmationDiv.classList.add('show');
//     }, 10);

//     // Close modal after 5 seconds if not closed manually
//     setTimeout(closeConfirmation, 5000);

//     // Add event listener for closing the modal when clicking outside
//     overlay.addEventListener('click', closeConfirmation);

//     // Add event listener for closing with 'Esc' key
//     window.addEventListener('keydown', function(event) {
//         if (event.key === 'Escape') {
//             closeConfirmation();
//         }
//     });
// }

// function closeConfirmation() {
//     const confirmationDiv = document.querySelector('.order-confirmation');
//     const overlay = document.querySelector('.order-overlay');

//     if (confirmationDiv && overlay) {
//         // Add fade-out effect
//         confirmationDiv.classList.add('fade-out');
//         overlay.classList.add('fade-out');
        
//         // Remove elements after fade-out animation
//         setTimeout(() => {
//             confirmationDiv.remove();
//             overlay.remove();
//         }, 500); // Match the fade-out duration
//     }
// }





// Array to store items and their prices
// let cart = [];

// // Function to order an item
// function orderItem(itemName, price) {
//     // Add the item to the cart
//     cart.push({ itemName, price });
    
//     // Update the total and display the cart
//     updateCartDisplay();
    
//     // Create a confirmation message with item details and total price
//     const message = createOrderConfirmationMessage();
    
//     // Call function to display the confirmation message
//     displayOrderConfirmation(message);
// }

// // Function to create a message summarizing all items and total price
// function createOrderConfirmationMessage() {
//     let orderSummary = '';
//     let totalPrice = 0;

//     cart.forEach(item => {
//         orderSummary += `<p>${item.itemName}: <strong>${item.price}</strong></p>`;
//         totalPrice += item.price;
//     });

//     return `
//         <h3>Your Order Summary</h3>
//         ${orderSummary}
//         <p><strong>Total: ${totalPrice}</strong></p>
//         <p>Thank you for ordering with Moon Biryani!</p>
//     `;
// }

// // Function to display the order confirmation
// function displayOrderConfirmation(message) {
//     // Prevent multiple pop-ups from appearing
//     if (document.querySelector('.order-confirmation')) {
//         return;
//     }

//     // Create a new div element for the modal and overlay
//     const overlay = document.createElement('div');
//     overlay.classList.add('order-overlay');
    
//     const confirmationDiv = document.createElement('div');
//     confirmationDiv.classList.add('order-confirmation');
    
//     // Set the inner HTML of the confirmation message with order details
//     confirmationDiv.innerHTML = `
//         <div class="order-content">
//             ${message}
//             <button class="close-btn" onclick="closeConfirmation()">Close</button>
//         </div>
//     `;
    
//     // Append the overlay and confirmation div to the body
//     document.body.appendChild(overlay);
//     document.body.appendChild(confirmationDiv);
    
//     // Show the modal with animation
//     setTimeout(() => {
//         overlay.classList.add('show');
//         confirmationDiv.classList.add('show');
//     }, 10);

//     // Optional: Auto-close after 5 seconds
//     setTimeout(closeConfirmation, 5000);
// }

// // Function to close the confirmation message and overlay
// function closeConfirmation() {
//     const confirmationDiv = document.querySelector('.order-confirmation');
//     const overlay = document.querySelector('.order-overlay');
    
//     if (confirmationDiv && overlay) {
//         // Add fade-out effect
//         confirmationDiv.classList.add('fade-out');
//         overlay.classList.add('fade-out');
        
//         // Remove the elements after animation
//         setTimeout(() => {
//             confirmationDiv.remove();
//             overlay.remove();
//         }, 500); // Match the fade-out duration
//     }
// }

// // Function to update the cart display on the screen
// function updateCartDisplay() {
//     const cartDiv = document.querySelector('.cart');
//     if (!cartDiv) return;

//     let cartHTML = '<h3>Your Cart</h3>';
//     let total = 0;

//     cart.forEach(item => {
//         cartHTML += `<p>${item.itemName}: <strong>${item.price}</strong></p>`;
//         total += item.price;
//     });

//     cartHTML += `<p><strong>Total: ${total}</strong></p>`;
//     cartDiv.innerHTML = cartHTML;
// }

// // Function to initialize the cart display (to be called when the page loads)
// function initCart() {
//     const cartDiv = document.createElement('div');
//     cartDiv.classList.add('cart');
//     document.body.appendChild(cartDiv);

//     updateCartDisplay();
// }

// // Initialize the cart on page load
// initCart();


// Array to store items and their prices
// let cart = [];

// // Function to order an item
// function orderItem(itemName, price) {
//     // Add the item to the cart
//     cart.push({ itemName, price });
    
//     // Update the total and display the cart
//     updateCartDisplay();
    
//     // Create a confirmation message with item details and total price
//     const message = createOrderConfirmationMessage();
    
//     // Call function to display the confirmation message
//     displayOrderConfirmation(message);
// }

// // Function to create a message summarizing all items and total price
// function createOrderConfirmationMessage() {
//     let orderSummary = '';
//     let totalPrice = 0;

//     cart.forEach(item => {
//         orderSummary += `<p><strong>${item.itemName}:</strong> $${item.price}</p>`;
//         totalPrice += item.price;
//     });

//     return `
//         <h3>Your Order Summary</h3>
//         ${orderSummary}
//         <p><strong>Total: $${totalPrice}</strong></p>
//         <p>Thank you for ordering with Moon Biryani!</p>
//     `;
// }

// // Function to display the order confirmation
// function displayOrderConfirmation(message) {
//     // Prevent multiple pop-ups from appearing
//     if (document.querySelector('.order-confirmation')) {
//         return;
//     }

//     // Create a new div element for the modal and overlay
//     const overlay = document.createElement('div');
//     overlay.classList.add('order-overlay');
    
//     const confirmationDiv = document.createElement('div');
//     confirmationDiv.classList.add('order-confirmation');
    
//     // Set the inner HTML of the confirmation message with order details
//     confirmationDiv.innerHTML = `
//         <div class="order-content">
//             ${message}
//             <button class="close-btn" onclick="closeConfirmation()">Close</button>
//         </div>
//     `;
    
//     // Append the overlay and confirmation div to the body
//     document.body.appendChild(overlay);
//     document.body.appendChild(confirmationDiv);
    
//     // Show the modal with animation
//     setTimeout(() => {
//         overlay.classList.add('show');
//         confirmationDiv.classList.add('show');
//     }, 10);

//     // Optional: Auto-close after 5 seconds
//     setTimeout(closeConfirmation, 5000);
// }

// // Function to close the confirmation message and overlay
// function closeConfirmation() {
//     const confirmationDiv = document.querySelector('.order-confirmation');
//     const overlay = document.querySelector('.order-overlay');
    
//     if (confirmationDiv && overlay) {
//         // Add fade-out effect
//         confirmationDiv.classList.add('fade-out');
//         overlay.classList.add('fade-out');
        
//         // Remove the elements after animation
//         setTimeout(() => {
//             confirmationDiv.remove();
//             overlay.remove();
//         }, 500); // Match the fade-out duration
//     }
// }

// // Function to update the cart display on the screen
// function updateCartDisplay() {
//     const cartDiv = document.querySelector('.cart');
//     if (!cartDiv) return;

//     let cartHTML = '<h3>Your Cart</h3>';
//     let total = 0;

//     cart.forEach(item => {
//         cartHTML += `<p><strong>${item.itemName}</strong>: $${item.price}</p>`;
//         total += item.price;
//     });

//     cartHTML += `<p><strong>Total: $${total}</strong></p>`;
//     cartDiv.innerHTML = cartHTML;
// }

// // Function to initialize the cart display (to be called when the page loads)
// function initCart() {
//     const cartDiv = document.createElement('div');
//     cartDiv.classList.add('cart');
//     document.body.appendChild(cartDiv);

//     updateCartDisplay();
// }

// // Initialize the cart on page load
// initCart();


// Array to store items and their prices
// let cart = [];

// // Function to order an item
// function orderItem(itemName, price) {
//     // Add the item to the cart
//     cart.push({ itemName, price });
    
//     // Update the total and display the cart
//     updateCartDisplay();
    
//     // Create a confirmation message with item details and total price
//     const message = createOrderConfirmationMessage();
    
//     // Call function to display the confirmation message
//     displayOrderConfirmation(message);
// }

// // Function to create a message summarizing all items and total price
// function createOrderConfirmationMessage() {
//     let orderSummary = '';
//     let totalPrice = 0;

//     cart.forEach(item => {
//         orderSummary += `<p><strong>${item.itemName}:</strong> $${item.price}</p>`;
//         totalPrice += item.price;
//     });

//     return `
//         <h3>Your Order Summary</h3>
//         ${orderSummary}
//         <p><strong>Total: $${totalPrice}</strong></p>
//         <p>Thank you for ordering with Moon Biryani!</p>
//     `;
// }

// // Function to display the order confirmation
// function displayOrderConfirmation(message) {
//     // Prevent multiple pop-ups from appearing
//     if (document.querySelector('.order-confirmation')) {
//         return;
//     }

//     // Create a new div element for the modal and overlay
//     const overlay = document.createElement('div');
//     overlay.classList.add('order-overlay');
    
//     const confirmationDiv = document.createElement('div');
//     confirmationDiv.classList.add('order-confirmation');
    
//     // Set the inner HTML of the confirmation message with order details
//     confirmationDiv.innerHTML = `
//         <div class="order-content">
//             ${message}
//             <button class="close-btn" onclick="closeConfirmation()">Close</button>
//         </div>
//     `;
    
//     // Append the overlay and confirmation div to the body
//     document.body.appendChild(overlay);
//     document.body.appendChild(confirmationDiv);
    
//     // Show the modal with animation
//     setTimeout(() => {
//         overlay.classList.add('show');
//         confirmationDiv.classList.add('show');
//     }, 10);
// }

// // Function to close the confirmation message and overlay
// function closeConfirmation() {
//     const confirmationDiv = document.querySelector('.order-confirmation');
//     const overlay = document.querySelector('.order-overlay');
    
//     if (confirmationDiv && overlay) {
//         // Add fade-out effect
//         confirmationDiv.classList.add('fade-out');
//         overlay.classList.add('fade-out');
        
//         // Remove the elements after animation
//         setTimeout(() => {
//             confirmationDiv.remove();
//             overlay.remove();
//         }, 500); // Match the fade-out duration
//     }
// }

// // Function to update the cart display on the screen
// function updateCartDisplay() {
//     const cartDiv = document.querySelector('.cart');
//     if (!cartDiv) return;

//     let cartHTML = '<h3>Your Cart</h3>';
//     let total = 0;

//     cart.forEach(item => {
//         cartHTML += `<p><strong>${item.itemName}</strong>: $${item.price}</p>`;
//         total += item.price;
//     });

//     cartHTML += `<p><strong>Total: $${total}</strong></p>`;
//     cartDiv.innerHTML = cartHTML;
// }

// // Function to initialize the cart display (to be called when the page loads)
// function initCart() {
//     const cartDiv = document.createElement('div');
//     cartDiv.classList.add('cart');
//     document.body.appendChild(cartDiv);

//     updateCartDisplay();
// }

// // Initialize the cart on page load
// initCart();



// Function to handle form submission and validation
// function contactForm() {
//     // Get form input values
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const message = document.getElementById('message').value.trim();

//     // Basic validation: Check if all fields are filled
//     if (name === "" || email === "" || message === "") {
//         alert("Please fill in all fields before submitting the form.");
//         return false;  // Prevent form submission if validation fails
//     }

//     // Display the form data in the console (for debugging purposes)
//     console.log("Form Submitted:");
//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log("Message:", message);

//     // Display a confirmation message to the user
//     displayConfirmationMessage();

//     // Optionally, clear the form after submission (if desired)
//     clearForm();

//     return false;  // Prevent the form from actually submitting (page reload)
// }

// // Function to display a confirmation message after form submission
// function displayConfirmationMessage() {
//     // Create a div for the confirmation message
//     const confirmationDiv = document.createElement('div');
//     confirmationDiv.classList.add('confirmation-message');

//     // Add the message content
//     confirmationDiv.innerHTML = `
//         <p>Thank you for reaching out! Our team will contact you soon.</p>
//         <button onclick="closeConfirmation()">Close</button>
//     `;

//     // Append the confirmation message to the body
//     document.body.appendChild(confirmationDiv);

//     // Optionally, auto-close after 5 seconds
//     setTimeout(closeConfirmation, 5000);
// }

// // Function to close the confirmation message
// function closeConfirmation() {
//     const confirmationDiv = document.querySelector('.confirmation-message');
//     if (confirmationDiv) {
//         confirmationDiv.remove();
//     }
// }

// // Optionally, clear the form fields after submission
// function clearForm() {
//     document.getElementById('name').value = "";
//     document.getElementById('email').value = "";
//     document.getElementById('message').value = "";
// }

// Function to handle form submission and validation
// function contactForm() {
//     // Get form input values
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const message = document.getElementById('message').value.trim();

//     // Basic validation: Check if all fields are filled
//     if (name === "" || email === "" || message === "") {
//         alert("Please fill in all fields before submitting the form.");
//         return false;  // Prevent form submission if validation fails
//     }

//     // Display the form data in the console (for debugging purposes)
//     console.log("Form Submitted:");
//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log("Message:", message);

//     // Display a confirmation message to the user
//     displayConfirmationMessage();

//     // Optionally, clear the form after submission (if desired)
//     clearForm();

//     return false;  // Prevent the form from actually submitting (page reload)
// }

// // Function to display a confirmation message after form submission
// function displayConfirmationMessage() {
//     // Check if confirmation message already exists to prevent multiple messages
//     const existingMessage = document.querySelector('.confirmation-message');
//     if (existingMessage) return; // Avoid adding another message if one is already displayed

//     // Create a div for the confirmation message
//     const confirmationDiv = document.createElement('div');
//     confirmationDiv.classList.add('confirmation-message');

//     // Add the message content
//     confirmationDiv.innerHTML = `
//         <p>Thank you for reaching out! Our team will contact you soon.</p>
//         <button onclick="closeConfirmation()">Close</button>
//     `;

//     // Append the confirmation message to the body
//     document.body.appendChild(confirmationDiv);

//     // Optionally, auto-close after 5 seconds
//     setTimeout(closeConfirmation, 5000);
// }

// // Function to close the confirmation message
// function closeConfirmation() {
//     const confirmationDiv = document.querySelector('.confirmation-message');
//     if (confirmationDiv) {
//         confirmationDiv.remove();
//     }
// }

// // Optionally, clear the form fields after submission
// function clearForm() {
//     document.getElementById('name').value = "";
//     document.getElementById('email').value = "";
//     document.getElementById('message').value = "";
// }

// Function to handle form submission and validation
// function contactForm() {
//     // Get form input values
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const message = document.getElementById('message').value.trim();

//     // Basic validation: Check if all fields are filled
//     if (name === "" || email === "" || message === "") {
//         alert("Please fill in all fields before submitting the form.");
//         return false;  // Prevent form submission if validation fails
//     }

//     // Display the form data in the console (for debugging purposes)
//     console.log("Form Submitted:");
//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log("Message:", message);

//     // Display a confirmation message to the user
//     displayConfirmationMessage();

//     // Optionally, clear the form after submission (if desired)
//     clearForm();

//     return false;  // Prevent the form from actually submitting (page reload)
// }

// // Function to display a confirmation message after form submission
// function displayConfirmationMessage() {
//     // Check if confirmation message already exists to prevent multiple messages
//     const existingMessage = document.querySelector('.confirmation-message');
//     if (existingMessage) return; // Avoid adding another message if one is already displayed

//     // Create a div for the confirmation message
//     const confirmationDiv = document.createElement('div');
//     confirmationDiv.classList.add('confirmation-message');

//     // Add the message content
//     confirmationDiv.innerHTML = 
//         `<p>Thank you for reaching out! Our team will contact you soon.</p>
//         <button onclick="closeConfirmation()">Close</button>`;

//     // Append the confirmation message to the body
//     document.body.appendChild(confirmationDiv);

//     // Optionally, auto-close after 5 seconds
//     setTimeout(closeConfirmation, 5000);
// }

// // Function to close the confirmation message
// function closeConfirmation() {
//     const confirmationDiv = document.querySelector('.confirmation-message');
//     if (confirmationDiv) {
//         confirmationDiv.remove();
//     }
// }

// // Optionally, clear the form fields after submission
// function clearForm() {
//     document.getElementById('name').value = "";
//     document.getElementById('email').value = "";
//     document.getElementById('message').value = "";
// }

// Function to handle form submission and validation
function contactForm() {
    // Get form input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation: Check if all fields are filled
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting the form.");
        return false;  // Prevent form submission if validation fails
    }

    // Display the form data in the console (for debugging purposes)
    console.log("Form Submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Display a confirmation message to the user
    displayConfirmationMessage();

    // Optionally, clear the form after submission (if desired)
    clearForm();

    return false;  // Prevent the form from actually submitting (page reload)
}

// Function to display a confirmation message after form submission
function displayConfirmationMessage() {
    // Check if confirmation message already exists to prevent multiple messages
    const existingMessage = document.querySelector('.confirmation-message');
    if (existingMessage) return; // Avoid adding another message if one is already displayed

    // Create a div for the confirmation message
    const confirmationDiv = document.createElement('div');
    confirmationDiv.classList.add('confirmation-message');

    // Add the message content
    confirmationDiv.innerHTML = `
        <p>Thank you for reaching out! Our team will contact you soon.</p>
        <button onclick="closeConfirmation()">Close</button>
    `;

    // Append the confirmation message to the body
    document.body.appendChild(confirmationDiv);

    // Optionally, auto-close after 5 seconds
    setTimeout(closeConfirmation, 5000);
}

// Function to close the confirmation message
function closeConfirmation() {
    const confirmationDiv = document.querySelector('.confirmation-message');
    if (confirmationDiv) {
        confirmationDiv.remove();
    }
}

// Optionally, clear the form fields after submission
function clearForm() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
}

// let cart = [];
// let totalPrice = 0;

// function orderItem(itemName, price) {
//     // Add the item to the cart
//     cart.push({ name: itemName, price: price });
//     totalPrice += price;

//     // Update the cart UI
//     updateCart();
// }

// function updateCart() {
//     // Get the cart items list container
//     const cartItemsList = document.getElementById("cartItemsList");

//     // Clear the current cart
//     cartItemsList.innerHTML = '';

//     // Add items to the cart list dynamically
//     cart.forEach(item => {
//         const li = document.createElement("li");
//         li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
//         cartItemsList.appendChild(li);
//     });

//     // Update the total price
//     document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);
// }

// function checkout() {
//     if (cart.length === 0) {
//         alert("Your cart is empty! Please add items to the cart.");
//         return;
//     }
    
//     // Create a checkout modal
//     const checkoutModal = document.createElement("div");
//     checkoutModal.classList.add("modal");

//     const modalContent = `
//         <div class="modal-content">
//             <h2>Order Summary</h2>
//             <ul>
//                 ${cart.map(item => `<li>${item.name} - $${item.price.toFixed(2)}</li>`).join('')}
//             </ul>
//             <div class="modal-total">
//                 <h3>Total: $${totalPrice.toFixed(2)}</h3>
//             </div>
//             <button class="modal-btn" onclick="confirmCheckout()">Confirm</button>
//             <button class="modal-btn" onclick="cancelCheckout()">Cancel</button>
//         </div>
//     `;

//     checkoutModal.innerHTML = modalContent;
//     document.body.appendChild(checkoutModal);

//     // Add fade-in effect
//     setTimeout(() => {
//         checkoutModal.classList.add("show");
//     }, 100);

//     // Prevent scrolling while the modal is open
//     document.body.style.overflow = 'hidden';
// }

// function confirmCheckout() {
//     alert(`Your total is $${totalPrice.toFixed(2)}. Thank you for your purchase!`);

//     // Clear cart after checkout
//     cart = [];
//     totalPrice = 0;
//     updateCart();

//     // Close the modal
//     closeModal();
// }

// function cancelCheckout() {
//     // Close the modal without confirming
//     closeModal();
// }

// function closeModal() {
//     const modal = document.querySelector(".modal");
//     modal.classList.remove("show");

//     setTimeout(() => {
//         modal.remove();
//     }, 300);  // Time to wait before removing the modal
//     document.body.style.overflow = '';  // Allow scrolling again
// }


