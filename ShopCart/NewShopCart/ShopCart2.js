function stockItems(item_id, item_name, price) {
    this.item_id = item_id;
    this.item_name = item_name;
    this.price = price;
    //this.quantity = quantity;
    //this.total = total;
}

var stock = [];
var cart = [];
var orders = [];
var totalOrderAmt = 0;

class cart_item {
    constructor(id, description, quantity) {
        this.id = id;
        this.description = description;
        this.quantity = quantity
    }
}

var miniBreakfast = new stockItems(1, "Mini Breakfast", 44);
var scrambledBreakfast = new stockItems(2, "Scrambled Breakfast", 40);
var pattyBreakfast = new stockItems(3, "Patty Breakfast", 75);
var giantMuffin = new stockItems(4, "Giant Muffin", 24);
var chelseaBun = new stockItems(5, "Chelsea Bun", 18);
var cheeseBurger = new stockItems(6, "Cheese Burger", 46);
var hippoBurger = new stockItems(7, "Hippo Burger", 72);
var cheeseRoll = new stockItems(8, "Cheese Roll", 33);
var bbqCickenRoll = new stockItems(9, "BBQ Chicken Roll", 46);
var alfredoPasta = new stockItems(10, "Alfredo Pasta", 48);
stock.push(miniBreakfast, scrambledBreakfast, pattyBreakfast, giantMuffin, chelseaBun, cheeseBurger, hippoBurger, cheeseRoll, bbqCickenRoll, alfredoPasta);


function add_selection(x) {
    if (cart.length == 0) { // cart is empty in the beginning only
        cart.push(new cart_item(stock[x].item_id, stock[x].item_name, 1));
        display_all();
        return;
    }
    //stock[x].quantity = stock[x].quantity + 1;
    //stock[x].total = stock[x].price * stock[x].quantity;
    //totalOrderAmt += stock[x].price;
    //cart = [];
    //for (var i in stock) {
       // if (stock[i].quantity > 0) {
         //   cart += "<br>" + stock[i].item_name + " x" + stock[i].quantity;
           // }
    //}
    //display_all();
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
    //for (i in stock) {
        //stock[i].quantity = 0;
       // stock[i].total = 0;
    //}
    display_all();
}


function display_all() {

    var myTable = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    //myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
   // myTable += "<th style='width: 100px; color: red; text-align: right;'>Remove</th>";

    for (i = 0; i < stock.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + stock[i].item_id + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + stock[i].item_name + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + stock[i].price + "</td>";
        //myTable += "<td style='width: 100px; text-align: right;'>" + stock[i].total + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        //myTable += "<td><button onclick='subtract_selection(" + i + ")'>Remove</button></td>";
    }

    myTable += "</table>";
    myTable += "<br/><br/>Your Shopping Cart Contains:" + cart;
    myTable += "<br/><p>Total: " + totalOrderAmt + "</p>";
    myTable += "<td><button onclick='displayTotal()'>Display Order Number and Total</button></td>";

    // document.write(myTable);
    document.getElementById("demo").innerHTML = myTable;
}


console.log(cart);