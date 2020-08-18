// Programming Basics: Arrays and Array Methods


// Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let city1 = euroCities[1];
console.log(city1); //London

// Change the first item in the array to "Berlin".
euroCities[0] = "Berlin";
console.log(euroCities); //[ 'Berlin', 'London', 'Valletta', 'Prague', 'Rome' ]

// Print the length of the array "euroCities".
console.log(euroCities.length); //5

// Remove the last item of the array "euroCities".
delete euroCities [euroCities.length-1];
console.log(euroCities); //[ 'Berlin', 'London', 'Valletta', 'Prague', <1 empty item> ]

// Use an array method to add "Budapest" to the euroCities array.
euroCities[5] = "Budapest";
console.log(euroCities); /*[ 'Berlin',
'London',
'Valletta',
'Prague',
<1 empty item>,
'Budapest' ] */

// Bonus: Remove the second and third items from the euroCities array.
euroCities.splice(1,2);
console.log(euroCities); //[ 'Berlin', 'Prague', <1 empty item>, 'Budapest' ]

// Create another variable named asianCities and assign an array of at least 5 cities to the variable.
let asianCities = [
    'Seoul',
    'Taipei',
    'Hanoi',
    'Manila',
    'Beijing'
];
 

// Bonus: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
asianCities2 = `${asianCities.slice(1,2)}, ${asianCities.slice(3,4)}`;
console.log(asianCities2); //Taipei, Manila

// Bonus: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).
let worldCities = euroCities.concat(asianCities);
console.log(worldCities);
/*[ 'Berlin',
'Prague',
<1 empty item>,
'Budapest',
'Seoul',
'Taipei',
'Hanoi',
'Manila',
'Beijing' ] */

// Reverse the order of worldCities.
worldCities.reverse();
console.log(worldCities);
/*[ 'Beijing',
  'Manila',
  'Hanoi',
  'Taipei',
  'Seoul',
  'Budapest',
  <1 empty item>,
  'Prague',
  'Berlin' ] */

// Bonus: Replace the 3rd item in the array of worldCities with "Toronto".
worldCities[2] = 'Toronto';
console.log(worldCities); 
/*[ 'Beijing',
  'Manila',
  'Toronto',
  'Taipei',
  'Seoul',
  'Budapest',
  <1 empty item>,
  'Prague',
  'Berlin' ] */

// Bonus: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1,0, "Washington");
console.log(worldCities);
/*[ 'Beijing',
  'Washington',
  'Manila',
  'Toronto',
  'Taipei',
  'Seoul',
  'Budapest',
  <1 empty item>,
  'Prague',
  'Berlin' ] */

// Bonus Write a program to join all elements of the result (worldCities) into a string. Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"
worldCitiesString = worldCities.toString();
console.log(worldCitiesString); //Beijing,Washington,Manila,Toronto,Taipei,Seoul,Budapest,,Prague,Berlin
// Bonus

// Write a program to reverse the string: "Hello World".
let revstring = ["Hello"];
revstring.push("World");
revstring.reverse();
console.log(revstring); //[ 'World', 'Hello' ];
let joinedRevString = revstring.join(" ");
console.log(joinedRevString); //World Hello

// Extra Practice

// Print the results to the console.

// Make an array of your siblings' names or your favorite movie characters' names.
let names = ["Anna Carolina", "Jorge André"];
console.log(names);
// Make an array of your parents' names.
let names2 = ["Anna Maria", "Manuel"];
console.log(names2);
// Combine these two arrays.
names3 = names.concat(names2);
console.log(names3);
// Add your pets' names.
names3.push("Laika");
console.log(names3); //[ 'Anna Carolina', 'Jorge André', 'Anna Maria', 'Manuel', 'Laika' ]
// Reverse the order of the array.
names3.reverse();
console.log(names3);//[ 'Laika', 'Manuel', 'Anna Maria', 'Jorge André', 'Anna Carolina' ]
// Access one of your parents' names.
let parentName = names3.slice(1,2);
console.log(parentName); //[ 'Manuel' ]

// Update the name of one of your parents.
names3[1] = "Mané";
console.log(names3);