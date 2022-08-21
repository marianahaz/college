// Import parameters
var params = new URLSearchParams(window.location.search),
name = params.get("name"),
age = params.get("age"),
address = params.get("address"),
deliveryDate = params.get("deliveryDate"),
giftWrap = params.get("giftWrap"),
shipping = params.get("shipping"),
genre = params.get("genre"),
total = params.get("total"),
items = JSON.parse(params.get("items"));

// Add info to the client information area
var addName = document.createElement('li');
addName.textContent = 'Name: ' + name;
var addAge = document.createElement('li');
addAge.textContent = 'Age: ' + age;
var addAddress = document.createElement('li');
addAddress.textContent = 'Address: ' + address;
var addDate = document.createElement('li');
addDate.textContent = 'Your delivery date: ' + deliveryDate;

// Filter shipping values to more readable text 
switch (shipping) {
    case 'normal':
        shipping = 'Normal (Free)';
        break;
    case 'expressRegular':
        shipping = 'Express Regular ($10)';
        break;
    case 'express':
        shipping = 'Express Special ($15)';
        break;
    case 'fast':
        shipping = 'Fast Express ($20)';
        break;
}

var addShipping = document.createElement('li');
addShipping.textContent = 'Selected shipping method: ' + shipping;

// Check if gift wrap is selected. If it's not, don't display anything.
var addGiftWrap;
if (giftWrap == 'true') {
    addGiftWrap = document.createElement('li');
    addGiftWrap.textContent = 'You have selected gift wrapping for this order';
} else {
    addGiftWrap = '';
}

var addGenre = document.createElement('li');
addGenre.textContent = 'Your favorite genre: ' + genre + ' (we\'ll add a gift with your purchase!)';

var addTotal = document.createElement('li');
addTotal.textContent = 'Your purchase total (CAD): $' + total;

document.querySelector('#userInfo').append(addName, addAge, addAddress, addDate, addGiftWrap,addShipping, addGenre, addTotal);


// Add information to the order area
for (var i = 0; i < items.length; i++) {
    if (items[i][1] != 0) {
        var addItem = document.createElement('li');
        addItem.textContent = items[i][1] + ' \'' + items[i][0] + '\'';
        document.querySelector('#itemsPicked').append(addItem);
    }
}
