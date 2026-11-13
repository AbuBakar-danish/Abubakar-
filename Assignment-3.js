
         //birth year calculator

var userName = prompt("Enter your name:");

var age = Number(prompt("Enter your current age:"));

var currentYear = Number(prompt("Enter current year:"));

var birthYear = currentYear - age;

alert("Hello " + userName + "! Your birth year is " + birthYear);














        //bill simulator


var item1 = Number(prompt("Enter first item price:"));

var item2 = Number(prompt("Enter second item price:"));

var item3 = Number(prompt("Enter third item price:"));

var totalBill = item1 + item2 + item3;

var members = Number(prompt("Enter total family members:"));

var perPerson = totalBill / members;

alert(
    "Total Bill: Rs. " + totalBill +
    "\nEach Person Share: Rs. " + perPerson
);














              //calculator  


 
var num1 = Number(prompt("Enter first number:"));

var num2 = Number(prompt("Enter second number:"));

var operator = prompt("Enter operator (+, -, *, /):");

var result;

if (operator === "+") {
    result = num1 + num2;
    alert("Result: " + result);
}
else if (operator === "-") {
    result = num1 - num2;
    alert("Result: " + result);
}
else if (operator === "*") {
    result = num1 * num2;
    alert("Result: " + result);
}
else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
        alert("Result: " + result);
    }
    else {
        alert("Cannot divide by zero!");
    }
}
else {
    alert("Invalid Operator!");
}
             












       //movie ticket 
 
       

  
var age = Number(prompt("Enter your age:"));
var student = prompt("Are you a student? yes/no");
var code = prompt("Enter promo code:");

var price = 500;

if (age < 12) {
    price = 0;
}
else if (student === "yes") {
    price = price * 0.8;
}

alert("Ticket Price: Rs. " + price);

if (code === "VIP123") {
    if (age >= 12 && (student === "yes" || student === "no")) {
        alert("VIP Backstage Pass!");
    }
}
