// we can check the code's in snippet in chrome
// output kısmından ctrl + alt + n ile çalışır.(kodun olduğu sayfayı seçmeliyiz)

// we can give values words, numbers and '_', '?' symbols.

function message_lenght_calculation(){
    
    var myMessage = prompt("Enter your message: ");
    alert("You have written " + myMessage.length + " characters, you have "+ (280 - myMessage.length) + " characters left." );
}

function slicing_message(){

    var myMessage = prompt("Enter your message: ");
    alert(myMessage.slice(0,140));
}

function upperCaseFirstCharacter(){
    var name = prompt("What is your name?");
    var editedName = name.slice(0,1).toUpperCase() + name.slice(1,name.length).toLowerCase();
    alert("Welcome dear " + editedName + " :)");
}

function dogAgeConverter(){
    // it converts dogs age to human
    var dogAge = parseInt(prompt("How old is your dog ?"));
    var humanAge = ((dogAge - 2) * 4) + 21;
    alert("Your dog is " + humanAge + " years old in human years.");
}

function getMilk(money){
    // 1.5 dollar per milk bottles 
    // how many milk coul we get?
    var bottles = money / 1.5
    console.log("leaveHouse");
    console.log("goRight");
    console.log("buy " + Math.floor(bottles) + " bottles of milk");
    console.log("goLeft");
    console.log("arriveHome");
}

//getMilk(5)

function lifeInWeeks(age){
    // In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years old.
    var remainingAge = 90 - age;
    var days = (remainingAge * 365);
    var weeks = (remainingAge * 52);
    var months = (remainingAge * 12);
    console.log("You have " + days + " days, " + weeks + " weeks, and "+ months + " months left.")    
    
}

// lifeInWeeks(51)

function bmiCalculator(weight, height){
    var bmi = weight / Math.pow(height, 2);
    return console.log(Math.round(bmi));
}

// bmiCalculator(65, 1.8);
