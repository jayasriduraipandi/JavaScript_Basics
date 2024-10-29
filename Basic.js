                         /* JAVASCRIPT PROGRAMMMING 
                *js is used to create interactive website
                *invented by Brendan Eich in 1995
                *Able to create animation,games,3d graphics etc..
                *Originally name as "mocha" later called "liveScript" 
                        */

// javascript run in vscode ---> open terminal--->node filename--->eg:node practice.js
//javascript variables--->
            /*3 TYPES-->
                         1]LET(local scope access)
                         2]CONST(const value)
                         3]VAR(access golbal scope)
            */
//javascript keywords-->
              //keywords does not used in varaiable names 

//javascript datatype
        /* 2 TYPES--->
PRIMITIVE DATATYPE-->number,string,boolean,null,undeined ,
NON-PRIMITIVE DATATYPE-->object ,Array */

//javascript commands
       //single line command
       /*..........................
multiline commands*/

//javascript operator
            /* inecrement and decrement operator are most important one that is "a++(post inecrement),++a(pre inecrement)" 
"a--(post decrement),--a(pre decrement)" EXAMPLE:*/
var a=10
a++             //post increment
console.log(a)
var b=10
++b            // pre decrement
console.log(b)

//javascript datatypes
var a="apple"
var b=15
function abc()    //function
{
    console.log(typeof(a)) //find datatype using typeof() method
    console.log(typeof(b))
} 
abc()            //function call

//javascript function
var factor="vijay"
var fplayer="dhoni"
var fmovie="shivan"

function favourite(){
     console.log("Favorite actor:",factor)
     console.log("Favorite player:",fplayer)
     console.log("Favorite movie:",fmovie)
}
favourite()

//javascript  parameter
function add(a,b) // parameter given directly
{
 console.log(a+b)
}
add(10,30)

 function area(l,b)
 {
var a=l*b
console.log("The area is:"+a)
 }
 var length=10
 var breadth=20
 area(10,20)

 //js FUNCTION RETURN TYPE
  function add(a,b)
  { 
    return a+b //return type
  }
  var total=add(20,40)
  console.log(total)

//js IF ELSE statement
if (true)
{
    console.log("ITS ture")   //output-->true
}

//example
if(false)
{  
    console.log("its false")  //output--->no output Because that if statement only in true 
}

//example
var rain= false
if(rain)
{
  console.log("Take an umberalla")
}
else{
  console.log("Enjoy the sunshine ")
}
//example
var finish= true
if(finish)
{
console.log("Great job!")
}
else{
  console.log("Finish you  work before within end of that day")
}

//LOGICAL AND,(&&) -->true && true means "true" true && false -->"false" only all that conditions its true its "True" otherwise its"False".
//logical AND=>1false=>"false" 
console.log(false && true && true) //false
console.log(true && true) //true
//logical OR (||) =>1true=>"true" either this or that
console.log(false|| true || false) //true
//logical NOT(!)
console.log(!true) //false

//example code for season of the year
var season = "spring"     //string declared in "" quotes
if(season == "autumn")     // == means check the conditions are same that means spring == spring condition statisfied so print the statement
  {
console.log("admire the colorful leaves")
  }
if(season == "spring")
  {
  console.log("Enjoy the blooming flowers")
  }
if(season == "summer")
  {
  console.log("Have fun in the sun")
  }
if(season == "winter")
  {
    console.log("bundle up nd stay warm")
  }

//  && example

var score = 80

if(score<50)
  {
    console.log("You need to improve")
  }
if(score>50 && score<70)    //AND Condition
{
  console.log("You are in middle level stay focus")
}
if(score>70 && score<100)   //AND Condition if both are true 
{
  console.log("GOOD job")
}

//For loop -->
for(count=1;count<=5;count++)
{
  console.log("Welcome to javascript basics")
}

//example to forloop to increment the numbers
for(count=1;count<=10;count++)
{
  console.log(count)
}

// Function to find even numbers within a range
function findEvenNumbers(start, end) {
  let evenNumbers = [];
  
  for (let i = start; i <= end; i++) {
      if (i % 2 === 0) {
          evenNumbers.push(i);
      }
  }
  
  return evenNumbers;
}

// Example usage: Find even numbers between 1 and 20
let start = 1;
let end = 20;
let evens = findEvenNumbers(start, end);

console.log("Even numbers between " + start + " and " + end + ": " + evens);


//java basic is Compleleted now move into main conacept of javascript "DOM"
