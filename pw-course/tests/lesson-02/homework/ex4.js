const myHeight = 152; // in centimeters
let myIdealWeight; // in kilograms
let myMaxweight; // in kilograms
let myMinweight; // in kilograms

myIdealWeight = (myHeight - 100) * 0.9;
myMaxweight = myHeight - 100;
myMinweight = (myHeight - 100) * 0.8;
console.log("My ideal weight is: " + myIdealWeight + " kg and my max weight is: " + myMaxweight + " kg" + " and my min weight is: " + myMinweight + " kg");
