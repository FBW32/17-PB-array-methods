/*1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value. */

let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let myArr = ["London"];
console.log(euroCities); // [ 'Paris', 'London', 'Valletta', 'Prague', 'Rome' ]

/*2. Change the first item in the array to "Berlin".
 */
euroCities.splice(0, 1, "Berlin");
console.log(euroCities); //[ 'Berlin', 'London', 'Valletta', 'Prague', 'Rome' ]

/*3. Print the length of the array "euroCities".
 */
let euroLenght = euroCities.length;
console.log(euroLenght); // 5

/*4. Remove the last item of the array "euroCities".
 */
euroCities.pop();
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague' ]

/*5. Use an array method to add "Budapest" to the euroCities array.
 */
euroCities.splice(2, 0, `Budapest`);
console.log(euroCities); // [ 'Berlin', 'London', 'Budapest', 'Valletta', 'Prague' ]

/*6. Bonus: Remove the second and third items from the euroCities array.
 */
euroCities.splice(1, 2);
console.log(euroCities); // [ 'Berlin', 'Valletta', 'Prague' ]

/*7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
 */
let asianCities = [
  `India', 'China', 'Siberia', 'Armenia', 'Afghanistan', 'Azerbaijan`,
];
console.log(asianCities); // [`India', 'China', 'Siberia', 'Armenia', 'Afghanistan', 'Azerbaijan`]

/*8.  Bonus: Use an array method to select items 2-4 from the array of asianCities and store this in another variable. */

let asianCities4 = asianCities.slice(1, 4);
console.log(asianCities4); // ??

/*9. Bonus: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities). */

let worldCities = euroCities.concat(asianCities);
console.log(worldCities); // ['Berlin','Valletta','Prague',"India', 'China', 'Siberia', 'Armenia', 'Afghanistan', 'Azerbaijan"]

/* 10. Reverse the order of worldCities. */
let reveseWorldCities = worldCities.reverse();
console.log(reveseWorldCities); // ["India', 'China', 'Siberia', 'Armenia', 'Afghanistan', 'Azerbaijan",'Prague','Valletta','Berlin'

/* 11. Bonus: Replace the 3rd item in the array of worldCities with "Toronto".
 */
worldCities.splice(2, 0, "Toronto");
console.log(worldCities); // ["India', 'China', 'Siberia', 'Armenia', 'Afghanistan', 'Azerbaijan",'Prague','Toronto','Valletta','Berlin']

/* 12. Bonus: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position. */
worldCities.splice(1, 0, "Washington");
console.log(worldCities); // ["India', 'China', 'Siberia', 'Armenia', 'Afghanistan', 'Azerbaijan",'Washington','Prague','Toronto','Valletta','Berlin']

/* 13. Bonus Write a program to join all elements of the result (worldCities) into a string. Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom  Penh" "Berlin+London+Bangkok+Phnom Penh" */

let StringCities = String(worldCities);
console.log(typeof StringCities); // string
