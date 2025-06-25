//!-------JavaScript Function-------//


//Function Call Korta Hoba (Code Driven Invocation) //------
function myWork(fullName, age, dathOfBirth = 2000 ) {       //(fullName, age, dathOfBirth = 2000 )=Parameter // 

    console.log("Hello " + fullName + ' year ' + age + ' Dath Of Birth '+ dathOfBirth );
};
myWork('Alok', 21, 2003);       // ('Alok', 21, 2003)=Argument //
myWork('Tomal', 23, 2001);


// Usear call (Event Driven Invocation) //-----
function subscribeNow() {
    console.log('Subscribe');
};
document.getElementById('but').addEventListener('click', subscribeNow);


// Self Invokeing Function //----
(function(){    //এটা যেহেতু নিজে থেকেই রান করবে, তাই এর Funcation Name দেয়ার দরকার নাই|//
    console.log('Hello World');
})();
//Or//
(function( country){
    console.log('Hello World', country);
})('Bangladesh');


let calculation = function(x,y){
    return x * y;  //return এর পরে আর কোন কোড কাজ করে না //
};
console.log(calculation(4, 5));
console.log(calculation(5, 5));

// Example:--------
let calculations = function(x,y){
    console.log('I Love Bangladesh');  // Working //
    return x * y;
     console.log('I Love Rajshahi');   // Not Working //
};
console.log(calculations(6, 6));
console.log(calculations(5, 8));


function newFunt() {
    let firstName = 'Alok';
    console.log(firstName); 
};
//console.log(firstName);     // Function var, let, const  not Recommend //
newFunt();

// Or//
function newFunts() {
    let firstName = 'Alok'; // But(let firstName) recommend // 
    console.log(firstName); 
};
newFunts();

let numbers = [4, 5, 6, 7];
let fullNumber = numbers.map(function (number){
    return number * number;
});
console.log(fullNumber);


// ? Arrow Function create // 
/*
let added = function( x, y) {  
    return x + y; 
};
console.log(added( 6, 7));  // ? sort form arrow Function Create //
*/
let added = (x, y) => x + y
console.log(added( 6, 7));

//Nested function//
function great(firstName){
   function onlyHello() {
    alert('Hello ' + firstName);
  };
  return onlyHello();
};
great('Alok');
