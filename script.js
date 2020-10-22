const fs = require("fs")


console.log(process.argv[2])
const content = fs.readFileSync(process.argv[2], "utf-8")
// console.log(content)
const data = content.split("\n")
// console.log(data)

function Animal(name, birthdate, species){
    this.name = name;
    this.birthdate = birthdate;
    this.species = species;
}
let animalList = []
for (let i = 1; i < data.length-1; i++) {
    const animal = data[i].split(",")
    const newAnimal = []
    // console.log(animal)
    for (let j = 0; j < animal.length; j++) {
        
        const animalFiltered = animal[j].slice(1,-1)
        newAnimal.push(animalFiltered)
        // console.log(animalFiltered)
        
        
        
        
    }
    // console.log(newAnimal)
    animalList.push(new Animal(newAnimal[0], newAnimal[1], newAnimal[2]))
}
// console.log(animalList)



let count = {
    bird: 0,
    dog: 0,
    cat: 0,
}

for (let i = 0; i < animalList.length; i++) {
    if(animalList[i].species === "bird"){
        count.bird ++
    }else if(animalList[i].species === "dog"){
        count.dog ++
    }else if(animalList[i].species === "cat"){
        count.cat ++
    }
    
}
console.log(count)

let arr = Object.values(count)
let max = Math.max(...arr);

let mostFrequentList = []
for (key in count) {
    const value = count[key];
    if(max === value){
        console.log(key)
        
        for (let i = 0; i < animalList.length; i++) {
            const animal = animalList[i]
            if(animal.species=== key){
                mostFrequentList.push(animal)
                
    }
    
}
    }
    
}
console.log(mostFrequentList)



Animal.prototype.greet = function(){
    if(this.species === "dog"){
        return "Woof"
    }else if(this.species === "cat"){
        return "Meaw"
    }else if(this.species === "bird"){
        return "Tweet"
    }
}

const oldestA = {}

function findOldest(){
    
}