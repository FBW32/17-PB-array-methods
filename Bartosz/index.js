// Programming Basics: Arrays and Array Methods

// These exercises are designed for practicing arrays and array methods. You may need to look up some methods to complete these tasks. Print each result to the console.

// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let secondItem = euroCities[1];
console.log(secondItem); // London

//2. Change the first item in the array to "Berlin".
euroCities[0] = "Berlin";
console.log(euroCities);  // [ 'Berlin', 'London', 'Valletta', 'Prague', 'Rome' ]

// 3. Print the length of the array "euroCities".
console.log(euroCities.length); // 5

// 4. Remove the last item of the array "euroCities". 
euroCities.pop();
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague' ]
console.log(euroCities.length); // 4

// 5. Use an array method to add "Budapest" to the euroCities array. 
euroCities[4] = "Budapest";
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague', 'Budapest' ]

// 6. **Bonus**: Remove the second and third items from the euroCities array. 
euroCities.splice(1,2);
console.log(euroCities); // [ 'Berlin', 'Prague', 'Budapest' ]

// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
let asianCities = ["Tokyo", "Hongkong", "Bangkok", "Manila", "Seoul"];
console.log(asianCities); // [ 'Tokyo', 'Hongkong', 'Bangkok', 'Manila', 'Seoul' ]

// 8. **Bonus**: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.  
let another = asianCities.slice(1, 5);
console.log(another); // [ 'Hongkong', 'Bangkok', 'Manila', 'Seoul' ]

// 9. **Bonus**: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).  
let worldCities = euroCities.concat(asianCities);
console.log(worldCities); // [ 'Berlin', 'Prague', 'Budapest', 'Tokyo','Hongkong', 'Bangkok', 'Manila', 'Seoul' ]

// 10. Reverse the order of worldCities.
worldCities.reverse();
console.log(worldCities); // [ 'Seoul', 'Manila', 'Bangkok', 'Hongkong', 'Tokyo', 'Budapest',  'Prague', 'Berlin' ]

// 11. **Bonus**: Replace the 3rd item in the array of worldCities with "Toronto". 
worldCities[2] = "Toronto";
console.log(worldCities); // [ 'Seoul', 'Manila', 'Toronto', 'Hongkong', 'Tokyo', 'Budapest', 'Prague', 'Berlin' ]

// 12. **Bonus**: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1, 0, "Washington");
console.log(worldCities); // [ 'Seoul', 'Washington', 'Manila', 'Toronto', 'Hongkong', 'Tokyo', 'Budapest', 'Prague', 'Berlin' ]

// 13. **Bonus** Write a program to join all elements of the result (worldCities) into a string. 
/* Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
Expected Outputs: 
"Berlin , London, Bangkok, Phnom Penh"
"Berlin+London+Bangkok+Phnom Penh" */

let joinedWolrdCities = worldCities.join("+");
console.log(joinedWolrdCities); // Seoul+Washington+Manila+Toronto+Hongkong+Tokyo+Budapest+Prague+Berlin

// Bonus
// 1. Write a program to reverse the string: "Hello World". 
let myString = "Hello World";
let program = myString.split(" ");
program.reverse();
console.log(program); // [ 'World', 'Hello' ]

// Extra Practice
// Print the results to the console.
// 1. Make an array of your siblings' names or your favorite movie characters' names.
let sibNames = ["Tom", "John"];

// 2. Make an array of your parents' names.
let parentNames = ["Anna", "Grzegorz"];

// 3. Combine these two arrays.
let names = sibNames.concat(parentNames);
console.log(names); // [ 'Tom', 'John', 'Anna', 'Grzegorz' ]

// 4. Add your pets' names.
let petNames = ["Junior", "Toster"];

// 5. Reverse the order of the array.
petNames.reverse();
console.log(petNames); // [ 'Toster', 'Junior' ]

// 6. Access one of your parents' names.
// 7. Update the name of one of your parents. 
parentNames[1] = "GRZEGORZ";
console.log(parentNames); // [ 'Anna', 'GRZEGORZ' ]