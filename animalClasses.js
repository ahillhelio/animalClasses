class Animal {
    constructor(sound, name){
        this.sound = sound;
        this._name = name;

    }

    speak() {
        console.log("The animal makes the following sound: " + this.sound);
    }     

    sayName() {
        console.log("The animal's name is " + this._name);
    }


}

class Dog extends Animal{

    get name() {
        return this._name
    }
    
    set name(value){
        this._name = value
    }
    
}

var dogOne = new Animal ("bark", "Rem");
dogOne.speak();
dogOne.sayName(); // chose to use "Animal" only for this dog

var dogTwo = new Dog ("ruff", "Pasha");
dogTwo.speak();
dogTwo.sayName(); //second dog

console.log(dogTwo.name) // Experiment to call getter only 






