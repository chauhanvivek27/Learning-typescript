let arr: number[] = [1,2,3]

//Introduce in ES6
for(const a of arr){
    a;
}

for(const i in arr){
    i;
}

let p = {
    0: "value1",
    "b": "value2",
    key: "value3"
};

for (var key in Object.keys(p)) {
     console.log(key + " -> " + p[key])
    }
    
for (let [key, value] of Object.entries(p)) {
        console.log(`${key}: ${value}`);
    }

const obj1 = {
    name: 'Vivek',
}

const obj2 = {
    'name': 'Chauhan',
}

console.log(Object.keys(obj1))
console.log(Object.keys(obj2));

console.log(Object.entries(obj1));

let [ k ] = Object.entries(obj1);
k;
console.log(k[1]);

