function stockItems(item_id, item_name, price, quantity = 0, total = 0) {
    this.item_id = item_id;
    this.item_name = item_name;
    this.price = price;
    this.quantity = quantity;
    this.total = total;
}

var stock = [];
var cart = [];
var orders = [];
var totalOrderAmt = 0;

var coke = new stockItems(1, "coke", 7.5);
var kit_kat = new stockItems(2, "kit kat", 9.5);
var bar_one = new stockItems(3, "bar One", 8.5);
var apple = new stockItems(4, "apple", 2.25);
var banana = new stockItems(5, "banana", 1.25);
var twix = new stockItems(6, "twix", 8.25);
var bread = new stockItems(7, "bread", 15.00);
var lettuce = new stockItems(8, "lettuce", 9.00);
var milk = new stockItems(9, "milk", 18.00);
var chillies = new stockItems(10, "chillies", 4.99);
stock.push(coke, kit_kat, bar_one, apple, banana, twix, bread, lettuce, milk, chillies);


function add_selection(x) {
    stock[x].quantity = stock[x].quantity + 1;
    stock[x].total = stock[x].price * stock[x].quantity;
    totalOrderAmt += stock[x].price;
    cart = [];
    for (var i in stock) {
        if (stock[i].quantity > 0) {
            cart += "<br>" + stock[i].item_name + " x" + stock[i].quantity;
            }
    }
    display_all();
}


function subtract_selection(x) {
    if (stock[x].quantity > 0) {
        stock[x].quantity = stock[x].quantity - 1;
        stock[x].total = stock[x].price * stock[x].quantity;
        totalOrderAmt -= stock[x].price;
    }
    cart = [];
    for (var i in stock) {
        if (stock[i].quantity > 0) {
        cart += "<br>" + stock[i].item_name + " x" + stock[i].quantity;
        }
    }
    display_all();
    
}


order_number = 1;
orders = [];

function displayTotal() {

    document.getElementById("total").innerHTML = "Please see below your order number and Total:<br> " + "Your Order Number: " + order_number + 
    "<br>Items: " + cart + "<br/>Total order amount is R" + totalOrderAmt.toFixed(2);
    orders.push(order_number);
    order_number += 1;
    cart = [];
    for (i in stock) {
        stock[i].quantity = 0;
        stock[i].total = 0;
    }
    display_all();
}


function display_all() {

    var myTable = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Remove</th>";

    for (i = 0; i < stock.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + stock[i].item_id + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + stock[i].item_name + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + stock[i].price + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + stock[i].quantity + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + stock[i].total + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button onclick='subtract_selection(" + i + ")'>Remove</button></td>";
    }

    myTable += "</table>";
    myTable += "<br/><br/>Your Shopping Cart Contains:" + cart;
    myTable += "<br/><p>Total: " + totalOrderAmt + "</p>";
    myTable += "<td><button onclick='displayTotal()'>Display Order Number and Total</button></td>";

    // document.write(myTable);
    document.getElementById("demo").innerHTML = myTable;
}


console.log(cart);