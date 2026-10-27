const array = [1,2,3,4,5,6,7,8,9,10];

let str1 = "Array = |";


for (let pos1 = 0; pos1 < array.length; pos1++) {
    str1 += array[pos1] + "|"
    
}
console.log(str1)

let str2 = "Array 2= |"
let pos2 = 0;

while (pos2 < array.length) {
    str2 += array[pos2] + "|";
    pos2++
}

console.log(str2)

let str3 = "Array 3 =|"
let pos3 = 0
do {
    str3 += array[pos3] + "|"
    pos3++
} while (pos3 < array.length);

console.log(str3)

let str4= "Array 4 =|"

for (const elemento of array) {
    str4 += elemento + "|"
}
console.log(str4)