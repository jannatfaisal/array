// alert("jannatfaisal")

// automatically declared
//    x=30;
//    y=20;
//   u = x - y;
// document.getElementById("demo").innerHTML =
// "The Value of Z is:   "+ u;

// using var

// var a=30;
// var b=40;
// var c=30;
// var d=10
// var f=a-b+c+d;

// document.getElementById("head").innerHTML =
// "The answer is: " +f;

// using const

// const e=110;
// const f=20;
// const d=e-f;

// document.getElementById("hh").innerHTML =
// "The  is: " -d; 


// document.getElementByconsole("h").innerHTML= "hello jannat"
// console.log="hellojannat"


// Arithmetic Operators Example

// let a = 3; // a ko 3 ke barabar set karte hain.
// let x = (100 + 50) * a; // Yahan, 100 aur 50 ko add kar ke phir a ke saath multiply kiya jata hai.
// console.log(x)

// Assignment

// let x = 10;
// x += 5;
// console.log(x)


// comparison

// let text1="a"
// let text2="b"
// let result =text1 <  text2;
// console.log(result)

////"<" ek comparison operator hai jo do values ko compare karta hai aur batata hai ke left side wali value right side wali value se choti hai ya nahi.

// Detail:

// Isko "Less Than" ya "Chhota Hai" kehte hain.
// Agar left side wali value right side wali value se choti hai, toh "<" true (ya 1) ko represent karega.
// Agar left side wali value right side wali value se badi ya equal hai, toh "<" false (ya 0) ko represent karega.
// Iska istemal conditional statements mein, jaise "if" aur "while" mein hota hai, jahan humein kisi condition ko check karna hota hai.



// let text1 = "20";
// let text2 = "5";
// let result = text1 > text2;
// console.log(result)

// ">" ek comparison operator hai jo do values ko compare karta hai aur batata hai ke left side wali value right side wali value se badi hai ya nahi.

// Detail:
// - Isko "Greater Than" ya "Bada Hai" kehte hain.
// - Agar left side wali value right side wali value se badi hai, toh ">" true (ya 1) ko represent karega.
// - Agar left side wali value right side wali value se choti ya equal hai, toh ">" false (ya 0) ko represent karega.
// - Iska istemal conditional statements mein, jaise "if" aur "while" mein hota hai, jahan humein kisi condition ko check karna hota hai.


// concatenate

// let text1="jannat";
// let text2="faisal";
// let text3 ="is";
// let text4 ="a";
// let text5 ="Web";
// let text6="developer"
// let result =   text1 +  "  " +text2+ " " +text3 +"   " +  text4+   "  " +text5+"   "+text6+" "

// console.log(result);

/* <p>The assignment operator += can concatenate strings.</p> */

// let text1="what a very";
// text1+="nice day";
// console.log(text1)


//  text1="Web";
//  text1+="developer";
// console.log(text1);


// Adding Strings and Numbers
// Adding two numbers, will return the sum, but adding a number and a string will return a string:


// let x=10+10;
// let y ="5"+5;
// let z= "hello" +5;
// console.log(x+y+z);


// let d =(5*2)+(10-3);
// console.log(d); //17

// let c = 6+(4 * 3) - 5;
// console.log(c); //13

// let y= (9-2) * 3+8 ;
// console.log(y); //29

// let a= 7+ (6/2)- (4*2);
// console.log(a); //2

// let b= (10 - 2) * (5 - 1) / 2;
// console.log(b); //16

// let e =4 * (8 - 3) + 2;
// console.log(e); //22

// let f= (12 / 4) * (6 - 2) + 5;
// console.log(f); //17

// let g = 3 * (7 - 4) + (6 / 2);
// console.log(g); //12

// let h=(9 + 3) - (5 * 2) + 4;
// console.log(h); //6

// let i=(20 / 4) * (2 + 3);
// console.log(i); //25


//javascript chp 1,2,3

// alert("hello jannat faisal, you are 20 years old");


// var firstName="Ameen";
// var LastName="Ameen";
// var age=20;

// alert("hello" + firstName+" " + lastName + ", You are " + age+ "Years old");


// chp1 Q=1

// var firstName="jannat";

// // Q=2

// var lastName="faisal";

// // Q=3

// var age=20;

// Q=4 print message

// alert("Hello" + firstName +" " +lastName+", You are "+age+" years old");

// console.log('
//     var firstName ="jannat";
//     var lastName ="faisal";
//     var age=20;

//     alert("Hello" + firstName +" " +lastName+", You are "+age+" years old");

// ');


// chp 4 5 6

// alert("variable b:6");



// var a = 2;
// var b = a++ + ++8 - --8+8--;
// alert("variable a: " + a);
// alert("variable b: " + b);

// prompt chp9

// var spec = prompt("Your species?", "human");


// prompt("what is your name?", "jannat");

//  var question = "Your species?";
// var defaultAnswer = "human";
//  var spec = prompt(question, defaultAnswer);

//  var q="what's your age";
//  var a="";
//  var print=prompt(q,a);


// if statement 

// var x = prompt("Where does the Pope live?");
//  if (x === "Vatican") {
//  alert("Correct!");
//  }

// var age = 18;

// if (age >= 18) {
//     console.log(17); // Agar age 18 ya usse zyada hai, ye print hoga.
// }






// Umar ka input lein
// var umar = prompt("Aapki umar kya hai?");

// // Umar ko integer mein convert karein
// umar = parseInt(umar);

// // Agar umar 18 ya usse zyada hai
// if (umar >= 18) {
//     alert("true."); // Agar umar 18 ya usse zyada hai, ye print hoga.
// } else {
//     alert("false."); // Agar umar 18 se kam hai, ye print hoga.
// }



// var jannat =prompt("what's your age");
//  jannat =parseInt(jannat);
//   if(jannat >= 18){

//   alert("true."); 
// }else{
//     alert("false.");
//   }


// var dream=prompt("what is your dream");
//  dream= dream

// if  ("web development") {
//   alert("wow");

// }
// else{
//   alert("awww");
// }




// Prompt the user to enter their dream
// var dream = prompt("What is your dream?");

// // Convert the input to lowercase for case-insensitive comparison
// dream = dream.toLowerCase();

// // Check if the dream is "web development"
// if (dream === 'web development') {
//     // If the dream is "web development"
//     console.log('Great choice! Web development is amazing!');
// } else {
//     // If the dream is not "web development"
//     alert('aww');
// }


// var dream = prompt ("what is your dream?");
//  dream=dream

//  if (dream== "web development") {

//   alert("Great choice! Web development is amazing");

//  }
//  else{
//   alert("awww");
//  }



// IF ELSE STATEMENT 


// var a=prompt("what is your name");

// if (a== "jannat") {
// alert("nice name");
// }
// else{
//   alert("awww")
// }

// var dream=prompt("what is your dream");

// if (dream== "web development") {

//   alert("wow nice choice");

// }else{


//   alert("no scope");}



// ELSE IF MULTIPLE CONDITIONS KE LIYE USE HOTA HE 


// var condition= prompt("Agar mujy kamyabi chaiye tou me kiya karongi?");

// if (condition=== "parhongi acha sa") {
//   console.log("tou kamyab ho jao gi.");

// } 

// else if
//   (condition=== "roz parhongi"){
// console.log("tou roz kamyab ho gi insha allah"); 
// }

// else if
// (condition=== "practise achi karongi"){
// console.log("tou aur kamyab ho gi");
// }

// else {
//   console.log("tou kuch na ho paye ga tumse");
// }


// var conditions=("Agar mujy kamyabi chaiye tou me kiya karongi?");

// if (conditions=>("parhongi acha sa")) {

//   alert(" tou kamyab ho jao gi.");

// }else if(conditions=>("practise achi karongi."));

// {

// alert("tou aur kamyab ho gi");
// }



// && end operator 

// var a= 14;
// var b= 20

// if (a>=14 && b>=24) {
//   document.write(false);
// }
// else{
//   document.write(true)
// }





// var religion= prompt("what is your religion?");

// var age= prompt("what is your age?");

// if (religion=="muslim") {
//   alert("ok ap admition le sakte");
// }else if(age>=19 )
// alert("le skate hein");

// else{
//   alert("no sorry");
// }

// nested if 

// var age= prompt("apki age  kiya he?");
// var hasvotercard=prompt("kiya apke pass voter card he?");

// if (age>=15) {


//   if (hasvotercard=="yes") {
//     document.write("ok")

//   }
//   else{
//     document.write("no")
//   }

// }
// else{
//   document.write("nh de skate");
// }


// logical oprators


// if ((age >64 || age> 30 && age>17) || resident"u.s") {

// }


// arrays

// empty declare
let myArray = [];

console.log(myArray);

// Initial values ke sath array declare karna:

let fruits = ["apple", "banana", "mango"];
console.log(fruits);

// Array ke elements ko access karna:
// Array ke elements ko access karne ke liye index ka use hota hai. Index zero se start hota hai.

let firstFruit = fruits[0];  // "apple"
let secondFruit = fruits[1]; // "banana"
let thirdfruit = fruits[2];  //mango


console.log(firstFruit, secondFruit, thirdfruit);

// Array mein naya element add karna:

// Array mein naya element push method se add kiya ja sakta hai.

fruits.push("orange");

console.log(fruits);


// Array ke elements ko modify karna:
// Aap array ke kisi bhi element ko uske index ke zariye modify kar sakte hain.

fruits[1] = "kiwi";  // "banana" ki jagah "kiwi" ho jayega

console.log(fruits);

// Summary:
// JavaScript mein array ek useful tool hai jo humein ordered collection of items ko store karne
//  aur manage karne mein madad karta hai.Iska basic syntax asaan aur simple hai, 
//  aur array ke methods aur properties isko powerful aur flexible banate hain.


















