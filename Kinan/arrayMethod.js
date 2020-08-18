//1
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let euroCities2 = euroCities.slice(1,2);

console.log(euroCities); // [ 'Paris', 'London', 'Valletta', 'Prague', 'Rome' ]
console.log(euroCities2); //  [ 'London' ]
//2
euroCities.splice(0,1,"Berlin");
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague', 'Rome' ]
//3
console.log(euroCities.length); //5
//4
euroCities.pop();
console.log(euroCities); //[ 'Berlin', 'London', 'Valletta', 'Prague' ]
//5
euroCities.push("Budapest");
console.log(euroCities); //[ 'Berlin', 'London', 'Valletta', 'Prague', 'Budapest' ]
//6
euroCities.splice(1,2);
console.log(euroCities); //[ 'Berlin', 'Prague', 'Budapest' ]
//7
let asianCities = [
    'New Delhi',
    'Damascus',
    'Beirut',
    'Cairo',
    'Bangkok',
]
console.log(asianCities); //[ 'New Delhi', 'Damascus', 'Beirut', 'Cairo', 'Bangkok' ]
//8
let asianCities2=asianCities.splice(1,2);
console.log(asianCities2); //[ 'Damascus', 'Beirut' ]
//9
let worldCities;
euroCities=euroCities.concat(euroCities2);
asianCities=asianCities.concat(asianCities2);
worldCities=euroCities.concat(asianCities);
console.log(worldCities); // ['Berlin',    'Prague','Budapest',  'London','New Delhi', 'Cairo','Bangkok',   'Damascus','Beirut']
//10
worldCities=worldCities.reverse();
console.log(worldCities); // ['Beirut',    'Damascus','Bangkok',   'Cairo','New Delhi', 'London','Budapest',  'Prague','Berlin']
//11 
worldCities.splice(2,1,'Toronto');
console.log(worldCities); // ['Beirut',    'Damascus','Toronto',   'Cairo','New Delhi', 'London','Budapest',  'Prague','Berlin']
//12
worldCities.splice(1,0,'Washington');
console.log(worldCities); //['Beirut',   'Washington','Damascus', 'Toronto','Cairo',    'New Delhi','London',   'Budapest','Prague',   'Berlin']
//13 
let worldCities2;
worldCities2=worldCities.toString();
console.log(worldCities2); // Beirut,Washington,Damascus,Toronto,Cairo,New Delhi,London,Budapest,Prague,Berlin
//14
let wordRe = ['Hello' , 'World'];
wordRe=wordRe.reverse();//[ 'World', 'Hello' ]
wordRe = wordRe.toString();
console.log(wordRe); // World,Hello
////////////////////////////////////
