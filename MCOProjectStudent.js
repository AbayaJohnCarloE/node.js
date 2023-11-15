// MEMBERS OF THE MINDTERM PROJECT
//     ABAYA, JOHN CARLO E
//     IBAJO,MARK ANTHONY L
//     MANZANO, EMERSON M
//     RAMAON, THELMA MAE L
// TEAM NAME: Node.JS

// Arrays/Objects for User Information
let shopping = [];
let userName;
let membership;
// Arrays/Objects for Grocery Items
let categories = ["Vegetables", "Fruits", "Chips", "Drinks", "Health&Beauty"];
let vegetable = {Vegetable_Name: "Price", carrot:20, aubergine:15, lettuce:50, cauliflower:50};
let fruit = {Fruit_Name: "Price", apple:20, tangerine:15, pomegranate:25, starapple:25};
let chips = {Chips_Name: "Price", piatos: 40, callbee: 100, pringles: 100, lays:70};
let drinks = {Drinks_Name: "Price", coke:40, pepsi: 37, royal: 32, bukojuice: 20};
let hbeauty = {HealthBeauty_Name: "Price", liquidsoap: 120, shampoo: 110, conditioner: 150, facialcleanser: 50};
let existingUsers = [
    ["Marites", "Chika4Life!", "Gold"], 
    ["MrNobody", "MekusmekosNamgaInian!", "Gold"] ,
    ["Rendon", "MotivationalR4is", "Regular"]
];
// Function to authenticate users
function logIn() {
    userName = prompt("Please Enter your Username: ").trim();

    if(!authenticateUser(userName)){
        alert("Invalid Username or Passcode, try again!");
        let reLog = prompt("Continue? (Yes/No): ");
        
        if(reLog.toLowerCase().trim() == 'yes'){
            logIn();
        } else {
            alert("Thank you, Come again!");
        }
    }
}
// Function to authenticate user credentials
function authenticateUser(usrName){
    for(let i = 0; i < existingUsers.length; i++){
        if(usrName == existingUsers[i][0]){
            let passcode = prompt("Please Enter your Passcode: ");
            passcode = passcode.trim(); 
                if
                (passcode == existingUsers[i][1]){
                    membership = existingUsers[i][2];
                    alert("Welcome " + usrName + " to Red Stallion Mart!");
                    theCategories();
                    return true;
                } else {
                    return false;
                } 
        }
    }   
    return false;
}
// Function to display available categories
function theCategories() {
  console.log("The following are the Available Sections in the Red Stallions Mart!");
  console.table(categories);
  let category = prompt("Please enter the Category of your Choice");
  category = category.toLowerCase().trim();

  switch(category){
    case "vegetables":
    	vegetablePriceList();
        break;
    case "fruits":
    	fruitPriceList();
        break;
    case "chips":
    	chipsPriceList();
        break;
    case "drinks":
    	drinksPriceList();
        break;
    case "beauty&health":
    	beautyhealthPriceList();
        break;
    default:
        alert("The Item is not Available");
          askAgainFunction();
    }
    
}
// Function to display  vegetable price list for a given category
function vegetablePriceList(){
  	console.table(vegetable);
        
    let item = prompt("Please enter the item of your choice");
    item = item.toLowerCase().trim();
    if(vegetable.hasOwnProperty(item)){
        let amount = prompt("Please enter the amount of item to be bought");
        if(amount > 0){
            let tempArr = [item, amount];
            shopping.push(tempArr);
            askAgainFunction();
        } else {
            alert("Invalid Amount, You will be directed to categories again!");
            theCategories();
        }
    } else {
        alert("The Item is not Available, You will be directed to categories again!");
        theCategories();
    }
}
// Function to display  fruit price list for a given category
function fruitPriceList(){
  	console.table(fruit);
  	
    let item = prompt("Please enter the item of your choice");
    item = item.toLowerCase().trim();
    if(fruit.hasOwnProperty(item)){
        let amount = prompt("Please enter the amount of item to be bought");
        if(amount > 0){
            let tempArr = [item, amount];
            shopping.push(tempArr);
            askAgainFunction();
        } else {
            alert("Invalid Amount, You will be directed to categories again!");
            theCategories();
        }
    } else {
        alert("The Item is not Available, You will be directed to categories again!");
        theCategories();
    }
}
// Function to display  chips price list for a given category 
function chipsPriceList(){
  	console.table(chips);

    let item = prompt("Please enter the item of your choice");
    item = item.toLowerCase().trim();
  	if(chips.hasOwnProperty(item)){    
        let amount = prompt("Please enter the amount of item to be bought");
        if(amount > 0){
            let tempArr = [item, amount];
            shopping.push(tempArr);
            askAgainFunction();
        } else {
            alert("Invalid Amount, You will be directed to categories again!");
            theCategories();
        }
                
    } else {
       	alert("The Item is not Available, You will be directed to categories again!");
        theCategories();
    }
}
// Function to display  drinks price list for a given category 
function drinksPriceList(){
  	console.table(drinks);
  	
    let item = prompt("Please enter the item of your choice");
    item = item.toLowerCase().trim();
  	if(drinks.hasOwnProperty(item)){      
        let amount = prompt("Please enter the amount of item to be bought");
        if(amount > 0){
            let tempArr = [item, amount];
            shopping.push(tempArr);
            askAgainFunction();
        } else {
            alert("Invalid Amount, You will be directed to categories again!");
            theCategories();
        }
                
    } else {
       	alert("The Item is not Available, You will be directed to categories again!");
        theCategories();
    }
}
// Function to display  healtybeauty price list for a given category and 
function healthbeautyPriceList(){
  	console.table(hbeauty);
  	
    let item = prompt("Please enter the item of your choice");
    item = item.toLowerCase().trim();
  	if(fruit.hasOwnProperty(item)){       
        let amount = prompt("Please enter the amount of item to be bought");
        if(amount > 0){
            let tempArr = [item, amount];
            shopping.push(tempArr);
            askAgainFunction();
        } else {
            alert("Invalid Amount, You will be directed to categories again!");
            theCategories();
        }
                
    } else {
       	alert("The Item is not Available, You will be directed to categories again!");
        theCategories();
    }
}
// Function to ask the user if they want to add more items
function askAgainFunction() {
  let more = prompt("Add more items in the list? (Yes/No)");
  more = more.toLowerCase().trim();

  switch(more){
    case "yes":
  	    theCategories();
        break;
    case "no":
        console.log("Here is your shopping list and the amount you requested.");
        console.table(shopping);
        isThatAll();
        break;
    default:
        alert("I didn't get that!");
        askAgainFunction();
    }
}
// Function to ask the user if they want to remove items, add more, or print receipt
function isThatAll(){
    let isthatAll = prompt("Should we add more, pop items, or print receipt? (add/remove/receipt)");
    isthatAll = isthatAll.toLowerCase().trim();
    
    switch(isthatAll){
    case "add":
        alert("Got it, let's add more!");
        theCategories();
        break;
    case "remove":
        popItems();
        break;
    case "receipt":
    	resibo();
        break;
    default:
        alert("I didn't get that!");
        isThatAll();
    }
}
// Function to remove the last item added to the shopping list
function popItems(){
    let pop = prompt("Remember, popping Items will remove the last item added, should you pop? (Yes/No)");
    pop = pop.toLowerCase().trim();
    
    if(pop == 'yes'){
        shopping.pop();
        console.log("The new shopping list is presented below: ");
        console.table(shopping);
        isThatAll();
    } else if (more == 'no') {
        console.log("There were no changes made in the shopping list.");
        isThatAll();
    } else {
        alert("I didn't get that!");
        popItems();
    }
}
// Function to print the receipt
function resibo(){
    let shopItemsTotal = 0;

    // Get the receiptDisplay div
    let receiptDisplay = document.getElementById("receiptDisplay");

    // Create a new div to hold the receipt content
    let receiptContent = document.createElement("div");

    // Append receipt content to the new div
    receiptContent.innerHTML += "<p>Red Stallion Mart</p>";
    receiptContent.innerHTML += "<p>Thank you for shopping! Here is the summary of the receipt:</p>";
    receiptContent.innerHTML += "<p>Member Name: " + userName + "<br>Membership Status: " + membership + "</p>";

    // Add receipt items to the new div
    for (let i = 0; i < shopping.length; i++) {
        let itemOrder = shopping[i][shopping[i].length - 2];
        let itemAmt = shopping[i][shopping[i].length - 1];
        let singleItemTotal = itemAmt * getItemPrice(itemOrder);
        shopItemsTotal += singleItemTotal;

        receiptContent.innerHTML += "<p>Item " + (i + 1) + ": " + itemOrder + " w/ Order Amount of: " + itemAmt +
            " @ Php " + getItemPrice(itemOrder) + ".00 each.<br>Total Item Price: " + singleItemTotal.toFixed(2) + "</p>";
    }
        
    // Implement discount for Gold Membership
    let discountPercentage = 10; // Adjust the discount percentage as needed
    let discountAmount = (discountPercentage / 100) * shopItemsTotal;
    let discountedTotal = shopItemsTotal - discountAmount;
if (membership.toLowerCase() == "Gold") {
}
    receiptContent.innerHTML += "<p>Gold Membership Discount Applied: " + discountPercentage + "%</p>";
    receiptContent.innerHTML += "<p>Total Amount (after discount): Php " + discountedTotal.toFixed(2) + "</p>";
    receiptContent.innerHTML += "<p>Total Amount: Php " + shopItemsTotal.toFixed(2) + "</p>";


// Add final message to the new div
receiptContent.innerHTML += "<p>Thank you for shopping with us at Red Stallion Mart!</p>";

// Append the new div to the receiptDisplay div
receiptDisplay.appendChild(receiptContent);

    function getItemPrice(item) {
        if (vegetable.hasOwnProperty(item)) {
            return vegetable[item];
        } else if (fruit.hasOwnProperty(item)) {
            return fruit[item];
        } else if (drinks.hasOwnProperty(item)) {
            return drinks[item];
        } else if (chips.hasOwnProperty(item)) {
            return chips[item];
        } else {
            return hbeauty[item];
        }
    }
}