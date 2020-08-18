let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let secondItem = euroCities[1];
console.log(euroCities);
console.log(secondItem);
euroCities[0] = "Berlin";
console.log(euroCities);
console.log(euroCities.length);
euroCities.pop();
console.log(euroCities);
euroCities.push("Budapest");
console.log(euroCities);
let removeCities = euroCities.splice(1, 2);
console.log(removeCities);
let asianCities = ["Tehran", "Istanbul", "Dubai", "Bangkok", "Tokyo"];
console.log(asianCities);
let citiesSeprated = asianCities.slice(1, 4);
console.log(citiesSeprated);
let worldCities = euroCities.concat(asianCities);
console.log(worldCities);
worldCities.reverse();
console.log(worldCities);
worldCities.splice(2, 1, "Toronto");
console.log(worldCities);
worldCities.splice(1, 0, "Washington");
console.log(worldCities);
let worldCitiesString = worldCities.join(",");
console.log(worldCitiesString);
//-------------------------
//1
let myStr = "Hello World";
let myArr1 = myStr.split(" ");
console.log(myArr1);
myArr1.reverse();
console.log(myArr1);
let newStr = myArr1.toString();
newStr = newStr.replace(",", " ");
console.log(newStr);
//-------------------------------
//OR
myStr2 = "Hello World";
let arr = myStr2.split("");
console.log(arr);
arr.reverse();
console.log(arr);
let newStr2 = arr.toString();
console.log(newStr2);
//-----------------------------------

let mySibling = ["arezoo", "omid"];
let parents = ["parvin", "sam"];
let family = parents.concat(mySibling);
console.log(family);
family.push("dizi");
console.log(family);
family.reverse();
console.log(family);
let updateFam = family.splice(family.length - 2, 1, "mohammad");
console.log(family);
