// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

let euroCities = [
    "Paris",
    "London",
    "Valletta",
    "Prague",
    "Rome"
];

let singleCity = euroCities.slice(1, 2);
console.log(singleCity);  // [ 'London' ]


// 2. Change the first item in the array to "Berlin".


euroCities.splice(0, 1, "Berlin");
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague', 'Rome' ]


// 3. Print the length of the array "euroCities".

console.log(euroCities.length); // 5

// 4. Remove the last item of the array "euroCities".

euroCities.splice(4, 5);
console.log(euroCities);  // [ 'Berlin', 'London', 'Valletta', 'Prague' ]

// 5. Use an array method to add "Budapest" to the euroCities array.

euroCities.push("Budapest");
console.log(euroCities);  // [ 'Berlin', 'London', 'Valletta', 'Prague', 'Budapest' ]

// 6. Bonus: Remove the second and third items from the euroCities array.

console.log(euroCities.splice(1, 2)); // [ 'London', 'Valletta' ]
console.log(euroCities); // [ 'Berlin', 'Prague', 'Budapest' ]

// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.

let asianCities = [
    "Hanoi",
    "Jakarta",
    "Tokyo",
    "Beijing",
    "Manila"
];

// 8. Bonus: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.

let asianCities2 = asianCities.slice(1, 4);
console.log(asianCities2); // [ 'Jakarta', 'Tokyo', 'Beijing' ]

// 9. Bonus: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).

worldCities = euroCities.concat(asianCities);
console.log(worldCities); // [ 'Berlin',   'Prague', 'Budapest', 'Hanoi', 'Jakarta',  'Tokyo',  'Beijing',  'Manila'  ]
 
// 10. Reverse the order of worldCities.

console.log(worldCities.reverse()); // [ 'Manila', 'Beijing',  'Tokyo',  'Jakarta',  'Hanoi',  'Budapest', 'Prague', 'Berlin'  ]


// 11. Bonus: Replace the 3rd item in the array of worldCities with "Toronto".

worldCities.splice(2, 1, "Toronto");
console.log(worldCities); // [ 'Manila',  'Beijing','Toronto', 'Jakarta', 'Hanoi',   'Budapest', 'Prague',  'Berlin' ]

// 12. Bonus: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.

worldCities.splice(1, 0, "Washington");
console.log(worldCities); // [ 'Manila',   'Washington', 'Beijing',  'Toronto','Jakarta',  'Hanoi',  'Budapest', 'Prague', 'Berlin' ]

// 13. Bonus Write a program to join all elements of the result (worldCities) into a string.
/*  Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
Expected Outputs:
"Berlin , London, Bangkok, Phnom Penh"
"Berlin+London+Bangkok+Phnom Penh" */ 


// using toString

console.log(worldCities.toString());

// or

let worldCitiesStr = worldCities.toString();
console.log(worldCitiesStr);

//output:  Manila,Washington,Beijing,Toronto,Jakarta,Hanoi,Budapest,Prague,Berlin
 


//// or using join() methods



console.log(worldCities.join("+"));

// or 

 let worldCitiesStr2 = worldCities.join("+");
 console.log(worldCitiesStr2);

 // output: Manila+Washington+Beijing+Toronto+Jakarta+Hanoi+Budapest+Prague+Berlin



// Bonus
// Write a program to reverse the string: "Hello World".

let myStr = ["Hello",
             "World"
];

[myStr.reverse()].toString();
console.log(myStr);  // [ 'World', 'Hello' ]

// or 

 [myStr.reverse()].join(" ");
 console.log(myStr);  // [ 'Hello', 'World' ]


 // Extra Practice

// 1. Make an array of your siblings' names or your favorite movie characters' names.

let myFam = ["ezio", 
"diego",
"secchetta",
"carmelo"];


// Make an array of your parents' names.

let myPar = ["luciana", "alessandro"];

// Combine these two arrays.

let combArr = myFam.concat(myPar);
console.log(combArr); // [ 'ezio', 'diego', 'secchetta', 'carmelo', 'luciana', 'alessandro' ]

// Add your pets' names.

combArr.splice(6, 0, "titti", "billy");
console.log(combArr); // [ 'ezio', 'diego', 'secchetta', 'carmelo',  'luciana', 'alessandro',  'titti', 'billy' ]

// Reverse the order of the array.

console.log(combArr.reverse()); // ['billy', 'titti', 'alessandro', 'luciana',  'carmelo', 'secchetta',  'diego',  'ezio' ]

// Access one of your parents' names.

let onePar = combArr.slice(2, 3);
console.log(onePar); //  [ 'alessandro' ]


// Update the name of one of your parents. 

let upNam = combArr.splice(2, 1, "sandro");
console.log(combArr);  // [ 'billy',   'titti',  'sandro',  'luciana', 'carmelo', 'secchetta', 'diego',   'ezio' ]