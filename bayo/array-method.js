// 23.08.2020
// EXERCISE 1
// Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

euroCities = [
    "Paris", 
    "London", 
    "Valletta", 
    "Prague", 
    "Rome"
];
console.log(euroCities);
let euroCities2 = euroCities.splice(2,2);
console.log(euroCities);


// EXERCISE 2
// Change the first item in the array to "Berlin".
euroCities[0] = "Berlin";
console.log(euroCities);  // [ 'Berlin', 'London', 'Valletta', 'Prague' ]


// EXERCISE 3
// Print the length of the array "euroCities".
console.log(euroCities.length); // 4


// EXERCISE 4
// Remove the last item of the array "euroCities".
euroCities.pop();
console.log(euroCities);

// EXERCISE 5
// Use an array method to add "Budapest" to the euroCities array.
let newCity = "Budapest";
euroCities.push(newCity);
console.log(euroCities);

// EXERCISE 6
// Bonus: Remove the second and third items from the euroCities array.

euroCities.splice(2,2);
console.log(euroCities);

// EXERCISE 7
// Create another variable named asianCities and assign an array of at least 5 cities to the variable.


let asianCities = [
    'Tokyo',
    'Beijing',
    'Seoul',
    'Delhi',
    'Bangkok'
];

// EXERCISE 8
// Use an array method to select items 2-4 from the array of asianCities and store this in another variable.


let selectedCities = asianCities.splice(2,4);
console.log(asianCities);

// EXERCISE 9
// Bonus: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).


let worldCities = euroCities.concat(asianCities);
console.log(worldCities);

// EXERCISE 10
// Reverse the order of worldCities.

worldCities.reverse()
console.log(worldCities);

// EXERCISE 11
// Bonus: Replace the 3rd item in the array of worldCities with "Toronto".

worldCities[3] = "Toronto";
console.log(worldCities);

// EXERCISE 12
// Bonus: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.

worldCities.splice(2,0, "Washington");
console.log(worldCities);


//  EXERCISE 13
// Bonus Write a program to join all elements of the result (worldCities) into a string. Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"

let joinCities = worldCities.join("+");
console.log(joinCities);


// SECTION 2
// EXERCISE 1
// Write a program to reverse the string: "Hello World".

let reverseString = "Hello World";
let toReverse = reverseString.split("").reverse().join("");
console.log(toReverse);
 

// EXTRA BONUS 

// exercise 1
// // Make an array of your siblings' names or your favorite movie characters' names.

let names = [
    'Jack Bauer',
    'Michael Scoffield',
    'Angelina Joile',
    'Viola Davis',
    'Basketmouth',
    'Bovi'
];

// exercise 2
// Make an array of your parents' names.

let parentName  = [
    'Mr Muritala',
    'Mrs Muritala'
];

// exercise 3
// Combine these two arrays.

let combineName = names.concat(parentName);
console.log(combineName);


// exercise 4
// Add your pets' names.

combineName.unshift("Kingkong");
console.log(combineName);

// exercise 5
// Reverse the order of the array.


combineName.reverse()
console.log(combineName);

// exercise 6
// Access one of your parents' names.
console.log(combineName[0]);




// exercise 7
// Update the name of one of your parents.
combineName.splice(0, 1, 'Mrs Muritala Alabi') 
console.log(combineName);





// COMPLETED..























