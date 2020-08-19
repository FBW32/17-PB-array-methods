// 1. 
let euroCities = ["paris","London","Lisbon","madrid","millan","frankfurt"];
let euroCitiesValue = euroCities.slice(1,2);

console.log(euroCitiesValue); // [ 'London' ]
console.log(euroCities);
//2.

euroCities.unshift("Berlin");
console.log(euroCities); // ['Berlin','paris','London','Lisbon','madrid','millan','frankfurt']

//3. 

console.log(euroCities.length); // 7

//4. 

euroCities.pop();
console.log(euroCities); // [ 'Berlin', 'paris', 'London', 'Lisbon', 'madrid', 'millan' ]

//5.

euroCities.push("Budapest");
console.log(euroCities); // ['Berlin', 'paris', 'London',   'Lisbon', 'madrid',   'millan', 'Budapest']

//6.

euroCities.splice(1,2);
console.log(euroCities);  //[ 'Berlin', 'Lisbon', 'madrid', 'millan', 'Budapest' ]

//7.

let asianCities = ["Bangkok","Tokyo","Shanghai","Delhi","Seoul","Singapore" ];

//8.
let asianCitiesNw = asianCities.slice(1,4);
console.log(asianCitiesNw); //[ 'Tokyo', 'Shanghai', 'Delhi' ]
console.log(asianCities);  // [ 'Bangkok', 'Tokyo', 'Shanghai', 'Delhi', 'Seoul', 'Singapore' ]

//9.
let worldCities = euroCities.concat(asianCities);
console.log(worldCities); // ['Berlin', 'Lisbon','madrid', 'millan','Budapest', 'Bangkok','Tokyo', 'Shanghai', 'Delhi', 'Seoul','Singapore']

//10.
worldCities.reverse();
console.log(worldCities); // ['Singapore', 'Seoul','Delhi',     'Shanghai','Tokyo', 'Bangkok', 'Budapest',  'millan','madrid',    'Lisbon','Berlin']

// 11.
worldCities.splice(2,3, "Toronto");
console.log(worldCities);  // ['Singapore', 'Seoul','Toronto',   'Bangkok','Budapest',  'millan','madrid',    'Lisbon','Berlin']

//12.
worldCities.splice(1,0,"Washington");
console.log(worldCities);  // ['Singapore', 'Washington','Seoul',     'Toronto','Bangkok',   'Budapest','millan',    'madrid','Lisbon',    'Berlin']

let neWorldCities = '"' + worldCities.join(" , ") + '"';
let neWorldCities2 = '"' + worldCities.join(" + ") + '"';
let worldCities2 = (neWorldCities2 + neWorldCities);
console.log(neWorldCities2);  
console.log(neWorldCities);
console.log(worldCities2);  //"Singapore + Washington + Seoul + Toronto + Bangkok + Budapest + millan + madrid + Lisbon + Berlin"  "Singapore , Washington , Seoul , Toronto , Bangkok , Budapest , millan , madrid , Lisbon , Berlin"

let newString = "Hallo World";
let newString2 = newString.split(" ");
//console.log(newString2); // [ 'Hallo', 'World' ]
console.log('"' + newString2.reverse().join(" ") + '"'); // "World Hallo"

let sibNames = ["Patrick","Vicky","Jasmine"];
let PerNames = ["Takor","Lucy"];
let famName =  sibNames.concat(PerNames);
console.log(famName); //  [ 'Patrick', 'Vicky', 'Jasmine', 'Takor', 'Lucy' ]

famName.push("snoopy","sherry");
console.log(famName); //['Patrick', 'Vicky','Jasmine', 'Takor''Lucy','snoopy','sherry']

famName.reverse();
console.log(famName);  // ['sherry', 'snoopy','Lucy','Takor','Jasmine', 'Vicky','Patrick']

let famName2 = famName.slice(3, 4);
console.log(famName2); // [ 'Takor' ]
//console.log(famName);  

famName.splice(3,1,"Johnson");

console.log(famName); // ['sherry', 'snoopy','Lucy','Johnson','Jasmine', 'Vicky','Patrick']
