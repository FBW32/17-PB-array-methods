// # Programming Basics: Arrays and Array Methods

// These exercises are designed for practicing arrays and array methods. **You may need to look up some methods to complete these tasks.** Print each result to the console.

// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

let euroCities = ["Lisbon", "Sheffield", "Brighton", 8, 2];
console.log(euroCities); // [ 'Lisbon', 'Sheffield', 'Brighton', 8, 2 ]

let varQ1 = euroCities.slice(1, 2);
console.log(varQ1); // [ 'Sheffield' ]

// 2. Change the first item in the array to "Berlin".

euroCities.splice(0, 1, "Berlin");
console.log(euroCities); // [ 'Berlin', 'Sheffield', 'Brighton', 8, 2 ]

// 3. Print the length of the array "euroCities".

console.log(euroCities.length); // 5

// 4. Remove the last item of the array "euroCities".

euroCities.pop();
console.log(euroCities); // [ 'Berlin', 'Sheffield', 'Brighton', 8 ]

// 5. Use an array method to add "Budapest" to the euroCities array.

euroCities.push("Budapest");
console.log(euroCities); // [ 'Berlin', 'Sheffield', 'Brighton', 8, 'Budapest' ]

// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.

let asianCities = [
  "Hanoi",
  "Chiang Mai",
  "Naypyitaw",
  "Istanbul",
  "Hong Kong",
  "Beijing",
];

// 8. **Bonus**: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.

let varQ8 = asianCities.slice(1, 4);
console.log(varQ8); // [ 'Chiang Mai', 'Naypyitaw', 'Istanbul' ]

// 9. **Bonus**: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).

let worldCities = euroCities.concat(asianCities);
console.log(worldCities);
// [
//     'Berlin',     'Sheffield',
//     'Brighton',   8,
//     'Budapest',   'Hanoi',
//     'Chiang Mai', 'Naypyitaw',
//     'Istanbul',   'Hong Kong',
//     'Beijing'
//   ]

// 10. Reverse the order of worldCities.

worldCities.reverse();
console.log(worldCities);
// [
//     'Beijing',    'Hong Kong',
//     'Istanbul',   'Naypyitaw',
//     'Chiang Mai', 'Hanoi',
//     'Budapest',   8,
//     'Brighton',   'Sheffield',
//     'Berlin'
//   ]

// 11. **Bonus**: Replace the 3rd item in the array of worldCities with "Toronto".

worldCities.splice(2, 1, "Toronto");
console.log(worldCities);
// [
//     'Beijing',    'Hong Kong',
//     'Toronto',    'Naypyitaw',
//     'Chiang Mai', 'Hanoi',
//     'Budapest',   8,
//     'Brighton',   'Sheffield',
//     'Berlin'
//   ]

// 12. **Bonus**: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.

worldCities.splice(2, 0, "Washington");
console.log(worldCities);
// [
//     'Beijing',    'Hong Kong',
//     'Washington', 'Toronto',
//     'Naypyitaw',  'Chiang Mai',
//     'Hanoi',      'Budapest',
//     8,            'Brighton',
//     'Sheffield',  'Berlin'
//   ]

// 6. **Bonus**: Remove the second and third items from the euroCities array.

euroCities.splice(1, 2);
console.log(euroCities); // [ 'Berlin', 8, 'Budapest' ]

// 13. **Bonus** Write a program to join all elements of the result (worldCities) into a string.
// Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
// Expected Outputs:
// "Berlin , London, Bangkok, Phnom Penh"
// "Berlin+London+Bangkok+Phnom Penh"

varQ13 = worldCities.toString();
console.log(varQ13);
// Beijing,Hong Kong,Washington,Toronto,Naypyitaw,Chiang Mai,Hanoi,Budapest,8,Brighton,Sheffield,Berlin

// **Bonus**

// 1. Write a program to reverse the string: "Hello World".

let varQB1 = "Hello World";
let varQB1_2 = varQB1.replace("Hello World", "World Hello");
console.log(varQB1_2); // World Hello

// **Extra Practice**

// Print the results to the console.

// 1. Make an array of your siblings' names or your favorite movie characters' names.

let favCharacts = [
  "Kyle",
  "Stan",
  "Erin",
  "Clare",
  "Orla",
  "Michelle",
  "James",
];
console.log(favCharacts);
// [
//     'Kyle',  'Stan',
//     'Erin',  'Clare',
//     'Orla',  'Michelle',
//     'James'
//   ]

// 2. Make an array of your parents' names.

let secondArray = ["Jane", "Fi"];
console.log(secondArray);
// [ 'Jane', 'Fi' ]

// 3. Combine these two arrays.

let combinedArray = secondArray.concat(favCharacts);
console.log(combinedArray);
// [
//     'Jane',  'Fi',
//     'Kyle',  'Stan',
//     'Erin',  'Clare',
//     'Orla',  'Michelle',
//     'James'
//   ]

// 4. Add your pets' names.

// combinedArray.push("Miezi", "Daffy");
// console.log(combinedArray);
// [
//     'Jane',  'Fi',
//     'Kyle',  'Stan',
//     'Erin',  'Clare',
//     'Orla',  'Michelle',
//     'James', 'Miezi',
//     'Daffy'
//   ]

combinedArray.splice(0, 0, "Miezi", "Daffy");
console.log(combinedArray);
// [
//     'Miezi', 'Daffy',
//     'Jane',  'Fi',
//     'Kyle',  'Stan',
//     'Erin',  'Clare',
//     'Orla',  'Michelle',
//     'James'
//   ]

// 5. Reverse the order of the array.

combinedArray.reverse();
console.log(combinedArray);
// [
//     'James', 'Michelle',
//     'Orla',  'Clare',
//     'Erin',  'Stan',
//     'Kyle',  'Fi',
//     'Jane',  'Daffy',
//     'Miezi'
//   ]

// 6. Access one of your parents' names.

console.log(combinedArray.slice(8, 9)); // [ 'Jane' ]

// 7. Update the name of one of your parents.

combinedArray.splice(8, 1, "Sabine");
console.log(combinedArray);
// [
//     'James',  'Michelle',
//     'Orla',   'Clare',
//     'Erin',   'Stan',
//     'Kyle',   'Fi',
//     'Sabine', 'Daffy',
//     'Miezi'
//   ]
