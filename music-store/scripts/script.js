// Request JSON data from the data.json file
async function populate() {

    const request = new Request('./data.json');

    const response = await fetch(request);
    const allProducts = await response.json();

    createCard(allProducts);

}

// Create class Product with all products info + populateCard method to enter the information
class Product {
    constructor(id, album, artist, image, value, category) {
        this.id = id;
        this.album = album;
        this.artist = artist;
        this.image = image;
        this.value = value;
        this.category = category;
    }
    populateCard() {
        var prodCard = document.createElement('div');
        prodCard.classList.add('product-card', this.id);

        // Create first area with picture, album and artist name 
        var firstColumn = document.createElement('div');
        var prodTitle = document.createElement('h3');
        prodTitle.textContent = this.album;
        var prodArtist = document.createElement('h4');
        prodArtist.textContent = this.artist;
        var prodImage = document.createElement('img');
        prodImage.src = this.image;
        firstColumn.append(prodImage, prodArtist, prodTitle);

        var prodCategory = document.createElement('p');
        prodCategory.classList.add('pd-category')
        prodCategory.textContent = this.category;
        var prodValue = document.createElement('p');
        prodValue.classList.add('pd-value');
        prodValue.textContent = this.value;

        // Create the div with amount and buttons
        var changeAmount = document.createElement('div');
        changeAmount.classList.add('change-amount')
        var prodAmount = document.createElement('span');
        prodAmount.classList.add('pd-amount');
        prodAmount.textContent = 0;
        var more = document.createElement('button');
        var less = document.createElement('button');
        more.textContent = '+';
        less.textContent = '-';
        
        changeAmount.append(less, prodAmount, more);
        // Do the operation when the user clicks the + or - button
        more.addEventListener('click', function(elem) {
            // Get the class in the element that has the target product 
            var targetProd = elem.path[2].classList[1];
            updateAmount('plus', targetProd);
        });

        less.addEventListener('click', function(elem) {
            var targetProd = elem.path[2].classList[1];
            updateAmount('less', targetProd);
        });

        var prodSubtotal = document.createElement('p');
        prodSubtotal.classList.add('pd-subtotal');
        prodSubtotal.textContent = 0;

        // Add all elements to the card and add it to the HTML
        prodCard.append(firstColumn, prodCategory, prodValue, changeAmount, prodSubtotal);

        document.querySelector('#shop').append(prodCard);
    }
}

// Create the cards that will receive information
function createCard(obj) {
    var products = obj["products"];
    var cards = [];

    // Create objects for the cards and populate them
    for (var product of products) {
        cards.push(new Product(product.id, product.title, product.artist, product.image, product.value, product.category)); 
    }
    
    for (var i = 0; i < cards.length; i++) {
        cards[i].populateCard();
    }

}

// Updates amount, subtotal and total after clicking the +/- buttons
function updateAmount(operation, target) {
    var productToUpdate = document.querySelector('.' + target + ' .pd-amount');
    var subtotal = document.querySelector('.' + target + ' .pd-subtotal');
    var price = document.querySelector('.' + target + ' .pd-value').textContent;
    var quantity = parseInt(productToUpdate.textContent);
    var totalInput = document.querySelector('#total');
    var total = parseInt(totalInput.value);

    // Updates amount and total depending on the operation
    if (operation == 'plus') {
        quantity += 1;
        total += parseInt(price);
    } else {
        if (quantity != 0) {
            quantity -= 1;
            total -= parseInt(price);
        }
    }

    productToUpdate.textContent = quantity;

    // Adds changes to the HTML
    subtotal.textContent = '$ ' + parseInt(price) * quantity;
    totalInput.value = total;

    // Remover error message from total input if it appeared
    if (document.querySelector('#totalError').textContent != '') {
        document.querySelector('#totalError').textContent = '';
    }

}

// Calls the main function
populate();


// Send data to the next page
function sendData() {
    // Variables to pass
    var clientName = document.querySelector('#name').value;
    var clientAge = document.querySelector('#age').value;
    var clientAddress = document.querySelector('#address').value;
    var deliveryDate = document.querySelector('#deliveryDate').value;
    var giftWrap = document.querySelector('#giftWrap').checked;
    var shipping = document.querySelector('input[name="shipping"]:checked').value;
    var genre = document.querySelector('#genre').value;
    var total = document.querySelector('#total').value;

    var productCards = document.querySelectorAll('.product-card');
    var items = [];

    productCards.forEach(function(elem) {
        var keyPair = [elem.querySelector('h3').textContent, elem.querySelector('.pd-amount').textContent]
        items.push(keyPair);
    })

    // URL parameters
    var params = new URLSearchParams();
    params.append("name", clientName);
    params.append("age", clientAge);
    params.append("address", clientAddress);
    params.append("deliveryDate", deliveryDate);
    params.append("giftWrap", giftWrap);
    params.append("shipping", shipping);
    params.append("genre", genre);
    params.append("total", total);
    params.append("items", JSON.stringify(items));

    // Sending the info
    var url = "summary.html?" + params.toString();
    location.href = url;
    // window.open(url);
}

// Form validation
var valid;

// Create error message and add to the screen
function addError(id, message) {
    var error = document.querySelector('#' + id);
    error.textContent = message;
    valid = false;
}

// Add today's date to min attribute for delivery date
var today = new Date().toISOString().slice(0,10);
document.querySelector('#deliveryDate').setAttribute('min', today);

// Tests each form input to validate
function validateProfile(e) {

    valid = true;

    if (clientInfo.name.value == '') {
        addError('nameError', 'Please type your name');
    } 

    if (clientInfo.age.value == '') {
        addError('ageError', 'Please type your age');
    } 

    if (clientInfo.address.value == '') {
        addError('addressError', 'Please type your address');
    }

    if (clientInfo.deliveryDate.value == '') {
        addError('dateError', 'Please select a delivery date');
    } 

    if (document.querySelector('input[name="shipping"]:checked') == null) {
        addError('shippingError', 'Please select a shipping method')
    }

    if (clientInfo.genre.value == '') {
        addError('genreError', 'Please select a genre or write your own');
    }

    if (clientInfo.total.value == '0') {
        addError('totalError', 'Please add an item to your purchase');
    }
    
    e.preventDefault();
    if (valid) {
        sendData();
    }

}

// Clear error messages
document.querySelector('#name').addEventListener('blur', function(){
    if (this.value != '') {
        nameError.textContent = '';
    }
});

document.querySelector('#age').addEventListener('blur', function(){
    if (this.value != '') {
        ageError.textContent = '';
    }
});

document.querySelector('#address').addEventListener('blur', function(){
    if (this.value != '') {
        addressError.textContent = '';
    }
});

document.querySelector('#deliveryDate').addEventListener('blur', function(){
    if (this.value != '') {
        dateError.textContent = '';
    }
});

document.querySelectorAll('input[name="shipping"]').forEach(function(elem) {
    elem.addEventListener('click', function(){
        if (document.querySelector('input[name="shipping"]:checked') != null) {
            shippingError.textContent = '';
        }
    });
})

document.querySelector('#genre').addEventListener('blur', function(){
    if (this.value != '') {
        genreError.textContent = '';
    }
});

// Trigger validation on submit
document.clientInfo.addEventListener("submit", validateProfile);

// Reset clears all error messages + resets the selected items
document.clientInfo.addEventListener("reset", function(){
    nameError.textContent = '';
    ageError.textContent = '';
    addressError.textContent = '';
    dateError.textContent = '';
    shippingError.textContent = '';
    genreError.textContent = '';
    totalError.textContent = '';

    var allAmount = document.querySelectorAll('.pd-amount');
    var allSubtotal = document.querySelectorAll('.pd-subtotal');

    allAmount.forEach(function(elem) {
        elem.textContent = 0;
    });

    allSubtotal.forEach(function(elem) {
        elem.textContent = 0;
    });

});

