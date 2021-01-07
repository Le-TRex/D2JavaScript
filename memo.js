console.log("tut tut");

//-------------------------------------------------------------------

var name = 'Dj Khaled';
const SayMyName = () => {
    var name = 'Julien Beats';
    console.log(name);
}
SayMyName(); // julien Beats
console.log(name); //Dj Khaled

//-------------------------------------------------------------------

function portee(){
    let x = 1; //let=block
    var y = 2; //var=locale
    console.log(x,y); //1 2

    if(true){
        let x = 5;
        var y = 10;
        console.log(x,y); //5 10
    }
    console.log(x,y); //1 10
}

portee();

//----------------------------------------------------------------------

//Comparaisons valeurs VS valeurs ET type
console.log(1 == '1'); //true
console.log(1 === '1'); //false
console.log(1 != '1'); //false
console.log(1 !== '1'); //true

//----------------------------------------------------------------------

//const mineur = age < 18 ? true : false;
// Si age<18 alors mineur prend la valeur true
// Si age>18 alors mineur prend la valeur false

//----------------------------------------------------------------------

const Person = function(name) {
    this.name = name;
    this.canTalk = true;
    this.eyeColor = 'green';

    this.greeting = function() {
        if (this.canTalk) {
            console.log('Hello, I\'m ' + this.name + '. My eyes are ' + this.eyeColor);
        }
    }
};

const person1 = new Person('Jean');
person1.greeting(); //Hello I'm Jean
Person.prototype.cantTalk = function(){
    this.canTalk = false;
};
person1.cantTalk();
console.log(person1.canTalk); //false

Person.prototype.eyeColor = 'brown';

const person2 = new Person('Martine');
person2.greeting();

//----------------------------------------------------------------------

//NomDeLaClasse.call <=> NomDeLaClasse.extends

//----------------------------------------------------------------------