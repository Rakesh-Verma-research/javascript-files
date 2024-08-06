
// console.log(firstName);
// console.log(firstName.length);
// console.log(firstName.charAt(17));
// console.log(firstName[0],firstName[1],firstName[2],firstName[3],firstName[4],firstName[5]);
// console.log(firstName.charCodeAt(6));

// // "i" is present in string or not
// console.log(firstName.includes("R"));
// console.log(firstName.indexOf("m"));
// console.log(firstName.lastIndexOf('e'))
// let anName = "Rakesh Kumar Verma";
// console.log(firstName.localeCompare(anName))
// const str = 'Manisha is my sister.';
// newstr = str.replace("Manisha","Ankit");
// console.log(newstr.replace("sister","brother"))
let firstName = "Rakesh Kumar Verma"
console.log(firstName.substring(0,6));
console.log(firstName.slice(6,12));
console.log(firstName.toUpperCase());
console.log(firstName.toLocaleLowerCase());
console.log(firstName.toLowerCase());
console.log(firstName.search('Verma'))
splitName =  firstName.split(" ");
console.log(splitName[2])
number = "1234567890";
digits = number.split('')
console.log(typeof(number));
console.log(digits);
console.log(digits.join("'"))
