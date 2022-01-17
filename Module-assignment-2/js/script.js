//Question 1
//Loop through the array below and console log each type property if the 
//age is at least 4.

var pets = [
    {
      type: "cat",
      age: 5.5,
    },
    {
      type: "dog",
      age: 3.8,
    },
    {
      type: "parrot",
      age: 4.0,
    },
  ];

  for (i = 0; i < pets.length; i++) {
    if (pets[i].age >= 4) {
      console.log(pets[i].age)
    }
  }

// Question 2
// Create a function with one argument.
// Inside the function check the type of the value being passed in.
// If it is a boolean value, log the value.
// If it is not a boolean value, log the message “Please pass a boolean value in”.
// Call the function and pass a value in.


//Method 1 with else if and check with (typeof) My note

let input = true; 

function myFunction(input) {
   if (typeof(input) === "boolean") {
    console.log("true");
   } else if (typeof(input) !== "boolean") {
     console.log("Please pass a boolean value")
   }
}
myFunction(input);


//Method 2 with return and check with (typeof) My note //Not done
/*
function myFunction(input) {
  if (typeof(input) === "boolean") {
    console.log("Please pass a boolean value");
    return;
  }
}
*/

// Question 3
// Write code that does the following:
// When the button in the HTML is clicked, change the colour of the 
// h2 element to “blue” and change it to read “Updated subheading”.


const textColor = document.querySelector(".color");

function changeColor() {
  document.querySelector(".keib").style.color = "blue";
  document.querySelector(".keib").innerHTML = "Updated heading";
}

textColor.onclick = changeColor;
