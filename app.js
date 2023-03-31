// --------chap 1---------
// --------ALERT----------

// alert("Thanks for your input!");


// --------chap 2-----------
// ------Variables for Strings-------

var name = "Mark";
console.log(name)

name = "Ace";
console.log(name)

var nationality;
nationality = "U.S.";
console.log(nationality)

var floogle = "Mark";
console.log(floogle)

var name = "Mark";
var floogle = "Mark";

var lastName = "Smith";
var cityOfOrigin = "New Orleans";
var aussieGreeting = "g'Day";
console.log(lastName + cityOfOrigin + aussieGreeting)

var nickname = "Bub";
console.log(nickname)

var thanx = "Thanks for your input!"
alert(thanx);

// ------chap 3------
// -----Variables for Numbers-----

var weight = 150;
weight + 25
console.log(weight + 25)

var originalNum = 23;
var newNum = originalNum + 7;
console.log(newNum)

var originalNum = 23;
var numToBeAdded = 7;
var newNum = originalNum + numToBeAdded;
console.log(newNum)

var originalNum = 90;
var originalNum = originalNum + 10;
console.log(originalNum)

var originalNum = "23";
var newNum = originalNum + 7;
console.log(newNum)

var originalNumber = 23;
var newNumber = originalNumber + 7;
console.log(newNumber)

// var 1stPresident = "Washington";
// Uncaught SyntaxError: Invalid or unexpected token

var prezWhoCame1st = "Washington";
console.log(prezWhoCame1st)

alert(144);

var caseQty = 144;
alert(caseQty);


// ------chap 4------
// --------Variable Names Legal and Illegal-------

// -----------legal variables-------------

// var abc = "black" 
// var abc224 = "blue"
// var abc$ = "green"
// var $$abc = "red"
// var $abc123$$ = "lavender"

// -----------illegal variables-------------

// var 098 = "rose"
// var 1234abc2 = "lilly"
// var @#%^& = "tulip"


// --------chap 5---------
// --------Math expressions-------
// --------Familiar operators-------

var popularNumber = 4;
console.log(popularNumber)

var popularNumber = 2 + 2;
console.log(popularNumber)

alert(2 + 2);

var popularNumber = 12 - 24;
console.log(popularNumber)

var popularNumber = 3 * 12;
console.log(popularNumber)

var num = 10;
var popularNumber = num + 200;
console.log(popularNumber)

var num = 10;
var anotherNum = 1;
var popularNumber = num + anotherNum;
console.log(popularNumber)

var whatsLeftOver = 10 % 3;
console.log(whatsLeftOver)

var whatsLeftOver = 9 % 3;
console.log(whatsLeftOver)

// --------chap 6--------
// --------Math expressions-------
// --------Unfamiliar operators--------

var num = 1;
var newNum = num++;
console.log(newNum)
console.log(num)

var num = 1;
var newNum = ++num;
console.log(newNum)
console.log(num)

var num = 1;
var newNum = num--;
console.log(newNum)
console.log(num)

var num = 1;
var newNum = --num;
console.log(newNum)
console.log(num)

// ---------chap 7--------
// ---------Math expressions---------
// ---------Eliminating ambiguity--------

var totalCost = 1 + 3 * 4;
console.log(totalCost)

var totalCost = 1 + (3 * 4);
console.log(totalCost)

var totalCost = (1 + 3) * 4;
console.log(totalCost)

var resultOfComputation = (2 * 4) * 4 + 2;
console.log(resultOfComputation)

var resultOfComputation = ((2 * 4) * 4) + 2;
console.log(resultOfComputation)

var resultOfComputation = (2 * 4) * (4 + 2);
console.log(resultOfComputation)

// -------chap 8--------
// -------Concatenating text strings--------

var userName = "laiba"
var message = "Thanks, ";
var banger = "!";
alert(message + userName + banger);

var message = "Thanks, ";
var userName = "Ilma";
var banger = "!";
var customMess = message + userName + banger;
alert(customMess);

alert("2" + "2");

alert("2 plus 2 equals " + 2 + 2);

// -------chap 9--------
// -------Prompts--------

var question = "Your species?";
var defaultAnswer = "human";
var spec = prompt(question, defaultAnswer);

var question = "Your Friend?";
var defaultAnswer = "Ilma";
var spec = prompt(question, defaultAnswer);

var numberOfCats = prompt("How many cats?");
var tooManyCats = numberOfCats + 1;

// -------chap 10--------
// -------if statements--------

var x = prompt("Where does the Pope live?");
 if (x === "Vatican") {
 alert("Correct!");
 }

 var x = prompt("Where is the big tree house?");
 if (x === "at the backside of the farmhouse") {
 alert("Correct!");
 }

 var x = prompt("What is your favourite color?");
if (x === correctAnswer) {
alert("Correct!");
}

var correctAnswer = "Vatican";
if (x === correctAnswer) {
alert("Correct!");
}

var correctAnswer = "Vatican";
if (x === correctAnswer) {
score++;
userIQ = "genius";
alert("Correct!");
}

// -------chap 11--------
// -------Comparison operators--------

 yourTicketNumber = 4621
if (yourTicketNumber !== 487208) 
{
    alert("Better luck next time.");
    }
    yourTicketNumber = 4621
    if (yourTicketNumber == 487208) 
    {
        alert("Better luck next time.");
        }

// -------chap 12--------
// -------if else and else if statements--------

var ThereIsABirthdayParty = true;
if(ThereIsABirthdayParty == false)
{
    console.log("we should go")
}
else{
    console.log("than stay at home")
}

var ThereIsABirthdayParty = true;
if(ThereIsABirthdayParty == true)
{
    console.log("we should go")
}
else{
    console.log("than stay at home")
}

var letsTwin  = true
if(letsTwin == true)
{
    console.log("Than Wear Black Color")
}
else{
    console.log("If Not Black Than Wear Any Solid Color")
}

var letsTwin  = true
if(letsTwin == false)
{
    console.log("Than Wear Black Color")
}
else{
    console.log("If Not Black Than Wear Any Solid Color")
}

var x = prompt("Where does the Baneen live?");
if (x === "Vatican") {
alert("Correct!");
}

var x = prompt("Where does the Dua live?");
if (x === "Vatican") {
alert("Correct!");
}

if (x !== "Vatican") {
alert("Wrong answer");
}

if (x === "Vatican") {
alert("Correct!");
}
else {
alert("not too good");
}

var correctAnswer = "Vatican";
 if (x === correctAnswer) {
 alert("Correct!");
 }
 else {
 score = "--";
 userIQ = "problematic";
 alert("Incorrect");
}

var correctAnswer = "Vatican";
if (x === correctAnswer) {
 alert("not too good");
 }
 else if (x === "Rome") {
 alert("Incorrect but close");
 }
 else {
 alert("incredibly beautiful");
}

 






































































