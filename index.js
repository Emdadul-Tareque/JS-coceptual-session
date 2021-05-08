
const person = ["programming", 20];

const [name, age] = person;
console.log(name);
console.log(age);

const person = {name: "Programming", age:20, id: "xda2113"};
const {name, id} = person;
console.log(name);
console.log(id);

const persons = [{
    name:"Programming",
    age: "20"
},
{
    name:"Programming hero",
    age: "3"
},
];

// persons.map(person => console.log(person.name));

function Map(arr) {
    for(let i = 0; i < arr.length; i++) {
        const person = arr[i];
        console.log(person.name, person.age);
    }
}

Map(persons);


// const product = products.map(pd => console.log(pd + 1)) ;

// for(let i = 0; i < products.length; i++){
//     const product = products[i] + 1;
//     console.log(product);

// }

const arr = [12, 14, 15, 17];

// const found = arr.find(num => num > 14);
// console.log(found);

function Find(arr) {
    for(let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if(arr[i] > 14) {
            const found = arr[i];
            console.log(found)
            break;
        }
    }
}

Find(arr);


const arr = [12, 14, 15, 17];

function Filter(arr) {
    const found = []
    for(let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if(arr[i] > 14) {
            
            found.push(arr[i]);
            
           
        } 
    }
    return found;
}

const found = Filter(arr);
console.log(found)



const person = {
     1:[
       {
    name:"Programming",
    age: "20",
    id: "sdawss",
    height: "6 feet",
    weight: "75 kg",
    car: "yes"}
]
}

for(let i in person){
    const singlePerson = person[i][0]
    for(let j in singlePerson){
        console.log(singlePerson[j])
    }
 
    // console.log(i, ":", person[i])
}

// console.log((Object.values(person)))

normal();

function normal() {
    console.log("HI i am normal function")
}


console.log(arrow())
var arrow = () => {
    return "Hi i am  arrow function"
}
console.log(arrow())

console.log(a)
var a = 10;
console.log(a)



