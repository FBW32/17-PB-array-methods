// These exercises are designed for practicing arrays and array methods. You may need to look up some methods to complete these tasks. Print each result to the console.



// QUESTION 1
// Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let cityLondon = euroCities[1];
console.log(cityLondon);
// London


// Change the first item in the array to "Berlin".
euroCities[0] = "Berlin";
console.log(euroCities[0]);
// Berlin


// Print the length of the array "euroCities".
console.log(euroCities.length);
// 5


// Remove the last item of the array "euroCities".
euroCities.shift();
console.log(euroCities);
// [ 'London', 'Valletta', 'Prague', 'Rome' ]


// Use an array method to add "Budapest" to the euroCities array.
let appendCity = "Budapest";
euroCities.push(appendCity);
console.log(euroCities);
// [ 'London', 'Valletta', 'Prague', 'Rome', 'Budapest' ]


// Bonus: Remove the second and third items from the euroCities array. --> Valletta and Prague
euroCities.splice(1, 2);
console.log(euroCities);
// [ 'London', 'Rome', 'Budapest' ]




// QUESTION 2
// Create another variable named asianCities and assign an array of at least 5 cities to the variable.

let asianCities = ["Japan", "Hong Kong", "Bangkok", "Singapore", "Manila"]


// Bonus: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
let selectedAsianCities = asianCities.slice(1, 4);
console.log(selectedAsianCities);
// [ 'Hong Kong', 'Bangkok', 'Singapore' ]


// Bonus: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).
let worldCities = asianCities.concat(euroCities);
console.log(worldCities);
// ['Japan',   'Hong Kong', 'Bangkok', 'Singapore', 'Manila',  'London', 'Rome',    'Budapest']


// Reverse the order of worldCities.
worldCities.reverse();
console.log(worldCities);
// [  'Budapest', 'Rome', 'London', 'Manila',  'Singapore', 'Bangkok', 'Hong Kong', 'Japan']




// QUESTION 3
// Bonus: Replace the 3rd item in the array of worldCities with "Toronto".
worldCities.splice(2, 3, "Toronto")
console.log(worldCities);
// [ 'Budapest', 'Rome', 'Toronto', 'Bangkok', 'Hong Kong', 'Japan' ]


// Bonus: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1, 0, "Washington")
console.log(worldCities);
// ['Budapest', 'Washington','Rome', 'Toronto', 'Bangkok', 'Hong Kong', 'Japan']


// Bonus Write a program to join all elements of the result (worldCities) into a string. Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"
let worldCitiesString = worldCities.toString();
console.log(worldCitiesString);
// Budapest,Washington,Rome,Toronto,Bangkok,Hong Kong,Japan




// QUESTION 5: Bonus
// Write a program to reverse the string: "Hello World".
let string1 = "Hello World";
console.log(string1);
// Hello World

let string1Split = string1.split(" ");
console.log(string1Split);
// [ 'Hello', 'World' ]

string1Split.reverse();
console.log(string1Split);
// [ 'World', 'Hello' ]

let string1Reversed = string1Split.join(" ");
console.log(string1Reversed);
// [ 'World', 'Hello' ]




// QUESTION 6: Extra Practice
// Print the results to the console.

// Make an array of your siblings' names or your favorite movie characters' names.

let siblingsArr = ["Maynard", "Joseph"];
console.log(siblingsArr);
// [ 'Maynard', 'Joseph' ]


// Make an array of your parents' names.
let parentsArr = ["Liesabeth", "Timothy"];
console.log(parentsArr);
// [ 'Liesabeth', 'Timothy' ]


// Combine these two arrays.
familyArr = parentsArr.concat(siblingsArr);
console.log(familyArr);
// [ 'Liesabeth', 'Timothy', 'Maynard', 'Joseph' ]


// Add your pets' names.
let petNames = ["Sam", "Toby", "Skye", "Gemima"]
console.log(petNames);
// [ 'Sam', 'Toby', 'Skye', 'Gemima' ]


// Reverse the order of the array.
petNames.reverse();
console.log(petNames);
// [ 'Gemima', 'Skye', 'Toby', 'Sam' ]


// Access one of your parents' names.
let parentsName = parentsArr[Math.floor(Math.random() * parentsArr.length)];
console.log(parentsName);
// Randomly selects a parent name


// Update the name of one of your parents.
parentsArr[0] = "Daphne";
console.log(parentsArr);
// [ 'Daphne', 'Timothy' ]
