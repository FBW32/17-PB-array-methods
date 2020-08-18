//1
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let secondCity = euroCities[1];
console.log(secondCity);

//2
euroCities[0] = "Berlin";
console.log(euroCities);
//3
console.log(euroCities.length);
//4
euroCities.pop();
console.log(euroCities);
//5
euroCities.unshift("Budapest");
console.log(euroCities);
//6
euroCities.splice(1, 3);
console.log(euroCities);
//7
let asianCities = ["Damascus", "Tokyo", "Istanbul", "Bangkok", "Beijing"];
console.log(asianCities);
//8
let myCities = asianCities.slice(1, 3);
console.log(myCities);
//9
let worldCities = euroCities.concat(asianCities);
console.log(worldCities);
//10
worldCities.reverse();
console.log(worldCities);
//11
worldCities.splice(2, 1, "Toronto");
console.log(worldCities);
//12


//  Bonus
//1
let program = ["Hello ", "World"];
program.reverse();
console.log(program);


//  Extra Practice

//1
let chName = ["PaulVitti", "V"];
console.log(chName);
//2
let myParents = ["Abd", "Nedal"];
console.log(myParents);
//3
let twoArr = chName.concat(myParents);
console.log(twoArr);
//4
let myPets = ["Gatto", "Gatta"];
//5
myPets.reverse();
console.log(myPets);
//6

//7
