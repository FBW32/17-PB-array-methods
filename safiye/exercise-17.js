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
euroCities.splice(1, 2);
console.log(euroCities);
//7
let asianCities = ["Istanbul", "Antalya", "Peking", "Moscow", "Damascus"];
console.log(asianCities);
//8
let selectedCities = asianCities.slice(1, 4);
console.log(selectedCities);
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
worldCities.splice(1, 0, "Washington");
console.log(worldCities);
//13
let stringCities = worldCities.join(" $ ");
console.log(stringCities);

//**Bonus**
//1
let hello = ["Hello", "World"];
hello.reverse();
let stringHello = hello.join(" ");
console.log(stringHello);
//**Extra Practice**
//1
let mySiblings = ["Selma", "Sümeyye"];
console.log(mySiblings);
//2
let myParents = ["Sulyman", "Sidika"];
console.log(myParents);
//3
let myFamily = mySiblings.concat(myParents);
console.log(myFamily);
//4
let myPets = ["noCat", "noDog", "onlyBirds"];
//5
myPets.reverse();
console.log(myPets);
//6
console.log(myParents[Math.floor(Math.random() * 2)]);
//7
myParents.splice(0, 1, "Suleyman");
console.log(myParents);
