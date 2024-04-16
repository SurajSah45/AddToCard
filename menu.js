let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'HOT Coffee...',
        image: '1.PNG',
        price: 30
    },
    {
        id: 2,
        name: 'Veg Roll...',
        image: '22.PNG',
        price: 70
    },
    {
        id: 3,
        name: 'Paneer Roll...',
        image: '23.PNG',
        price: 90
    },
    {
        id: 4,
        name: 'Spring Veg Roll...',
        image: '24.PNG',
        price: 100
    },
    {
        id: 5,
        name: 'Blue Mocktail...',
        image: '25.PNG',
        price: 90
    },
    {
        id: 6,
        name: 'Mango Mocktail...',
        image: '26.PNG',
        price: 100
    },
    {
        id: 7,
        name: 'Veg Bugger...',
        image: '7.PNG',
        price: 59
    },    {
        id: 8,
        name: 'Veg Cheese bugger...',
        image: '28.PNG',
        price: 70
    },    {
        id: 9,
        name: 'Chipotle cheese burger...',
        image: '29.PNG',
        price: 90
    },    {
        id: 10,
        name: 'Pizza margherita...',
        image: '30.PNG',
        price: 129
    },    {
        id: 11,
        name: 'Onion Capsicum Pizza...',
        image: '31.PNG',
        price: 129
    },
    {
        id: 12,
        name: 'Cheese Corn Pizza...',
        image: '32.PNG',
        price: 129
    },
    {
        id: 13,
        name: 'Paneer Tikka...',
        image: '33.PNG',
        price: 120
    },
    {
        id: 14,
        name: 'Veg delite cheese pizza..',
        image: '34.PNG',
        price: 120
    },
     {
        id: 15,
        name: 'Paneer peri peri pizza...',
        image: '35.PNG',
        price: 120
    },

    {
        id: 16,
        name: 'Veg Cheese sandwiches...',
        image: '36.PNG',
        price: 70
    },
    {
        id: 17,
        name: 'Cheese Corn sandwiches...',
        image: '37.PNG',
        price: 90
    },

    {
        id: 18,
        name: 'Paneer Cheese sandwiches...',
        image: '38.PNG',
        price: 110
    },
    {
        id: 19,
        name: 'Shezwaan Paneer sandwiches...',
        image: '39.PNG',
        price: 110
    },
    {
        id: 20,
        name: 'Classic salted fries...',
        image: '40.PNG',
        price: 70
    },
    {
        id: 21,
        name: 'Peri Peri fries...',
        image: '41.PNG',
        price: 80
    },
    {
        id: 22,
        name: 'Peri Peri Cheese fries...',
        image: '42.PNG',
        price: 90
    },

    {
        id: 23,
        name: 'Chipotle cheese fries...',
        image: '43.PNG',
        price: 100
    },

    {
        id: 24,
        name: 'Pizza cheese fries...',
        image: '44.PNG',
        price: 100
    },
  

];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">     
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}