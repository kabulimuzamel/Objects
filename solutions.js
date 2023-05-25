//
//1





//2





//3

let myArray = {
    name: 'Alex',
    lastName: 'Zain',
    Age: 78
};

//Object.keys
let keys = Object.keys(myArray);
console.log(keys);




//Object.values

let values = Object.values(myArray);
console.log(values);


//Object.entries
let entries = Object.entries(myArray);

for (let i = 0; i < entries.length; i++) {
    let key = entries[i][0];
    let value = entries[i][1];

    console.log(`${key}: ${value}`);
}