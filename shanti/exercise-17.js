// Programming Basics: Arrays and Array Methods

/* 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value. */
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let newCities = euroCities[1];
console.log(newCities); // London

/* 2. Change the first item in the array to "Berlin". */
euroCities[0] = "Berlin";
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague', 'Rome' ]

/* 3. Print the length of the array "euroCities". */
console.log(euroCities.length); // 5

/* 4. Remove the last item of the array "euroCities". */
delete euroCities [euroCities.length-1];
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague', <1 empty item> ]

/* 5. Use an array method to add "Budapest" to the euroCities array. */
euroCities.push("Budapest");
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague', <1 empty item>, 'Budapest' ]
  
/* 6. Bonus: Remove the second and third items from the euroCities array. */
euroCities.splice(1, 2);
console.log(euroCities); // [ 'Berlin', 'Prague', <1 empty item>, 'Budapest' ]

/* 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable. */
let asianCities = ['Hyderabad', 'Singapore', 'Hong Kong', 'Bangkok', `Delhi`];

/* 8. Bonus: Use an array method to select items 2-4 from the array of asianCities and store this in another variable. */
let newAsianCities = asianCities.slice(1, 4);
console.log(newAsianCities); // [ 'Singapore', 'Hong Kong', 'Bangkok' ]

/* 9. Bonus: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities). */
let worldCities = euroCities.concat(asianCities);
console.log(worldCities); // [ 'Berlin', 'Prague', <1 empty item>, 'Budapest', 'Hyderabad', 'Singapore', 'Hong Kong', 'Bangkok', 'Delhi' ]

/* 10. Reverse the order of worldCities. */
let reversedOrder = worldCities.reverse();
console.log(reversedOrder); // [ 'Delhi', 'Bangkok', 'Hong Kong', 'Singapore', 'Hyderabad', 'Budapest', <1 empty item>, 'Prague', 'Berlin' ]
  
/* 11. Bonus: Replace the 3rd item in the array of worldCities with "Toronto". */
worldCities.splice(2, 1, "Toronto");
console.log(worldCities); // [ 'Delhi', 'Bangkok', 'Toronto', 'Singapore', 'Hyderabad', 'Budapest', <1 empty item>, 'Prague', 'Berlin' ]
  

/* 12. Bonus: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position. */
worldCities.splice(1, 0, "Washington");
console.log(worldCities); /* [
    'Delhi',     'Washington',
    'Bangkok',   'Toronto',
    'Singapore', 'Hyderabad',
    'Budapest',  <1 empty item>,
    'Prague',    'Berlin'
  ] */

/* 13. Bonus Write a program to join all elements of the result (worldCities) into a string. Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh" */
let joinedStringCities = worldCities.join(",");
console.log(joinedStringCities); // Delhi,Washington,Bangkok,Toronto,Singapore,Hyderabad,Budapest,,Prague,Berlin

let joinedStringCities1 = worldCities.join("+");
console.log(joinedStringCities1); // Delhi+Washington+Bangkok+Toronto+Singapore+Hyderabad+Budapest++Prague+Berlin

/* Bonus : Write a program to reverse the string: "Hello World". */
const ReverseString = str => [...str].reverse().join(''); 
console.log(ReverseString("Hello World")); // dlroW olleH

// Extra Practice
/* 1. Make an array of your siblings' names or your favorite movie characters' names. */
let mySiblings = ["Tanuja", "Kiran"];
console.log(mySiblings); // [ 'Tanuja', 'Kiran' ]

/* 2. Make an array of your parents' names. */
let myParents = [ "VenkataRatnam", "satyavathi"];
console.log(myParents); // [ 'VenkataRatnam', 'satyavathi' ]

/* 3. Combine these two arrays. */
let combinedArray = mySiblings.concat(myParents);
console.log(combinedArray); // [ 'Tanuja', 'Kiran', 'VenkataRatnam', 'satyavathi' ]

/* 4. Add your pets' names. */
let myPets = ["Oscar", "Jack"];
console.log(myPets); // [ 'Oscar', 'Jack' ]
combinedArray.splice(4, 0, "Oscar", "Jack");
console.log(combinedArray); // [ 'Tanuja', 'Kiran', 'VenkataRatnam', 'satyavathi', 'Oscar', 'Jack' ]

/* 5. Reverse the order of the array. */
console.log(combinedArray.reverse()); // [ 'Jack', 'Oscar', 'satyavathi', 'VenkataRatnam', 'Kiran', 'Tanuja' ]

/* 6. Access one of your parents' names. */
let parent1 = combinedArray.slice(3, 4);
console.log(parent1); // [ 'VenkataRatnam' ]

/* 7. Update the name of one of your parents. */
let updatedName = combinedArray.splice(3, 1, "Ratnam");
console.log(combinedArray); // [ 'Jack', 'Oscar', 'satyavathi', 'Ratnam', 'Kiran', 'Tanuja' ]
