class Stock_item { //rows in the Stock table will each be a stock item

    constructor(stock_id, stock_name, price) {
        this.stock_id = stock_id;
        this.stock_name = stock_name;
        this.price = price;
    }
}

class Cart_item { // rows in the cart table will each be a cart item

    constructor(user_id, stock_id, quantity) {
     //   this.user_id = user_id;
        this.stock_id = stock_id;
        this.quantity = quantity;
    }
}

// class User {

//     constructor(user_id, name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
// }

class Order {

    constructor(order_id, user_id, stock_id, quantity) {
        this.order_id = order_id;
        this.user_id = user_id;
        this.stock_id = stock_id;
        this.quantity = quantity;
    }
}

// when the program starts
let orders = [];
let user_id = 0;

let menu = [
    new Stock_item(1, "Coke", 12.5), // a row in the stock table represents an object
    new Stock_item(2, "Fanta", 12.5),
    new Stock_item(3, "Sprite", 12.5),
    new Stock_item(4, "Stoney", 12.5),
    new Stock_item(5, "Bar One", 14.5),
    new Stock_item(6, "Kit Kat", 14.5),
    new Stock_item(7, "Jungle Bar", 14.5),
    new Stock_item(8, "Tex Bar", 14.5),
    new Stock_item(9, "Chips", 15.5)
];

// let users = [
//     new User(1, "James", "Jonas"),
//     new User(2, "Simon", "Green"),
//     new User(3, "Simba", "Aloha")
// ];

// display_all function

// Display all Stock and all users
document.write("<b> Choose an item </b><br><br>");

for (let i = 0; i < menu.length; i++) {
    document.write (menu[i].stock_id + " " + menu[i].stock_name + " " + menu[i].price + "<br>");
}

// let item = prompt ("Choose an item");
// let qty = prompt ("How many?");

let item = 2;
let qty = 3;

let cart = [new Cart_item(1, item, qty)]; // when the add button is pressed

document.write("<br><b> Your cart : </b><br>");

for (let j = 0; j < cart.length; j++) {
    document.write (cart[j].user_id + " " + cart[j].stock_id + " " + cart[j].quantity + "<br>");
}