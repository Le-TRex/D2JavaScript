//TODO refacto les "return true" pour mettre des ternaires ou des "return condition(s)"

//PARTIE I
//----------------------------------------------------------------------
//Revert

const reverse = (string) => {
    var splitString = string.split('');
    var reverseArray = splitString.reverse();
    var reversedArray = reverseArray.join('');
    return reversedArray;
}

//----------------------------------------------------------------------
//UcFirst

const ucFirst = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

//----------------------------------------------------------------------
//Capitalize

const capitalize = (sentence) => {
    var splitSentence = sentence.toLowerCase().split(' ');
    for (var i = 0; i < splitSentence.length; i++) {
        splitSentence[i] = ucFirst(splitSentence[i]);
    }
    return splitSentence.join(' ');
}

//----------------------------------------------------------------------
//PascalCase

const pascalCase = (sentence) => {
    var splitSentence = sentence.toLowerCase().split(' ');
    for (var i = 0; i < splitSentence.length; i++) {
        splitSentence[i] = ucFirst(splitSentence[i]);
    }
    return splitSentence.join('');
}

//----------------------------------------------------------------------
//Palindrome

const palindrome = (string) => {
    var stringToCheck = string;
    var reversedString =  reverse(string);
    if (stringToCheck === reversedString) {
        return true;
    }else{
        return false;
    }
}
//----------------------------------------------------------------------
//FindLongestWord

const findLongestWord = (sentence) => {
    var splitSentence = sentence.split(' ');
    var longestWord = splitSentence.sort(function(a,b) {
        return b.length - a.length;
    })
    return longestWord[0];
}

//----------------------------------------------------------------------
//Mapi

const Mapi = function([[key1, value1], [key2, value2]]) {
    this.array = [[key1, value1], [key2, value2]];
    this.mapiObject = Object.fromEntries(this.array);
    this.size = Object.keys(this.mapiObject).length;

    this.set = function (key, value) {
        if (!this.has(key)) {
            this.size ++;
        }
        this.mapiObject[key]=value;
    }

    this.delete = function (key) {
        delete this.mapiObject[key];
        this.size --;
    }

    this.get = function (key) {
        return this.mapiObject[key];
    }

    this.has = function (key) {
        return this.mapiObject.hasOwnProperty(key);
    }

    this.keys = function () {
        return Object.keys(this.mapiObject);
    }

    this.values = function () {
        return Object.values(this.mapiObject);
    }
}

// const myMapi = new Mapi([[1, 'Begonia'], [2, 'Rosier']]);
//  const myOtherMapi = new Mapi([[1, 'chat'], [3, 'tamanoir']]);
// console.log('Test Mapi : ')
// console.log(myMapi);
//  console.log(myOtherMapi);
// myOtherMapi.set(2, 'chien');
// console.log(myOtherMapi);
// myOtherMapi.set(2, 'tamanoir');
// console.log(myOtherMapi);
// myOtherMapi.set(3, 'opossum');
// console.log(myOtherMapi);
// myOtherMapi.delete(2);
// console.log(myOtherMapi);
//
// console.log('[{1: Begonia}, {2: Rosier}]');
//----------------------------------------------------------------------
//Prop access -- bonus

//----------------------------------------------------------------------
//Type check

const type_check_v1 = (value, type) => {
    return (typeof value === type);
}
// console.log('Test type_check_v1 : ');
// console.log(type_check_v1(1, 'number'));
// console.log(type_check_v1('toto', 'number'));

//----------------------------------------------------------------------
//Type check V2

const type_check_v2 = (value, type, array) => {
    return (type_check_v1(value, type) && array.includes(value));
}
// console.log('Test Type_check_v2 : ');
// console.log(type_check_v2(3, 'number', [1, 2, 3]));
// console.log(type_check_v2(3, 'string', [1, 2, 3]));

//----------------------------------------------------------------------
//PARTIE II
//----------------------------------------------------------------------
//Hash tag

const sentence = 'How the Avocado Became the Fruit of the Global Trade';

const getHashTags = (sentence) => {
    var words = sentence.split(' ').sort(function (a, b) {
        return b.length - a.length;
    });

    var threeLongestWords = [words[0], words[1], words[2]];

    return hashtags = threeLongestWords.map(word => `#${word}`);
}
// console.log('Test Hashtags : ');
// console.log(getHashTags('How the Avocado Became the Fruit of the Global Trade'));
// console.log(getHashTags('The Helicopter Is Yellow and Greenish'));

//----------------------------------------------------------------------
//RemoveDuplicates

const array1 = [0, 2, 4, 6, 8, 8];

const removeDuplicates = (array) => { return [...new Set(array)]; }

// console.log('Test Remove Duplicates : ')
// console.log(removeDuplicates(array1));

//----------------------------------------------------------------------
//Intersection

const array2 = [1, 2, 3, 4, 5, 6];

const intersection = (array1, array2) => {
    return filteredArray = array1.filter(value => array2.includes(value));
}

// console.log('Test intersection : ')
// console.log(intersection(array1, array2));

//----------------------------------------------------------------------
//Arraydiff

const arrayDiff = (array1, array2) => {
    const firstFiltrationArray = array1.filter(value => !array2.includes(value));
    const secondFiltrationArray = array2.filter(value => !array1.includes(value));
    const filteredArray = [...firstFiltrationArray, ...secondFiltrationArray];
    return removeDuplicates(filteredArray);
}
// console.log('Test ArrayDiff : attendu [0, 1, 3, 5, 8]')
// console.log(arrayDiff(array1, array2));

//----------------------------------------------------------------------
//Combination

//const array = [2, 12, 2];

// function multiplicates(array) {
//     let multiplicator = 1;
//     let result = 1;
//
//     for (let i = 0; i < array.length ; i++) {
//         let operande = array[i];
//         result = operande * multiplicator;
//         multiplicator = result;
//     }
//     return result;
// }


function combination(...numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
}

//console.log('Test combination : ');
//console.log(multiplicates(array));

// console.log('Test Combination - reducer : ');
// console.log(combination(2, 12, 2, 2));
//----------------------------------------------------------------------
//Fiscal Code

const Person = function(name, surname, gender, dob) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.dob = dob;
}

const matt = new Person("Matt", "Edabit", "M", "1/1/1900");
const helen = new Person("Helen", "Yu", "F", "1/12/1950");
const mickey = new Person("Mickey", "Mouse", "M", "12/1/1928");

const fiscalCode = (person) => {
    //REGEX + CONSTANT VARIABLES-----------------------------------------------
    const regexVowels = /[AEIOU]/g;
    const rexepConsonants = /[BCDFGHJKLMNPQRSTVWXYZ]/g;
    const xLetters=['X','X'];
    const surname = person.surname;
    const name = person.name;

    //FUNCTIONS----------------------------------------------------------------
    const makeAnArrayOfConsonants = (word) => {
        const consonants = word.toUpperCase().match(rexepConsonants);
        return consonants;
    }

    const makeAnArrayOfVowels = (word) => {
        const vowels = word.toUpperCase().match(regexVowels);
        return vowels;
    }

    const createSurnameAndNameCode = (array) => {
        const code = [array[0], array[1], array[2]].join('');
        return code;
    }

    //SURNAME------------------------------------------------------------------
    const processedSurname = makeAnArrayOfConsonants(surname)
        .concat(makeAnArrayOfVowels(surname))
        .concat(xLetters);

    const surnameCode = createSurnameAndNameCode(processedSurname);

    console.log(`code nom de famille : ${surnameCode}`);

    //NAME---------------------------------------------------------------------
    let nameConsonants = makeAnArrayOfConsonants(name);
    if (nameConsonants.length > 3) {
        nameConsonants = [nameConsonants[0], nameConsonants[2], nameConsonants[3]];
    }
    // console.log(`consonnes du prénom 1, 3 et 4 : ${nameConsonants}`);

    const processedName = nameConsonants.concat(makeAnArrayOfVowels(name)).concat(xLetters);
    const nameCode = createSurnameAndNameCode(processedName);
    console.log(`code prenom : ${nameCode}`);

    //FISCAL CODE--------------------------------------------------------------
    const fiscalCode = surnameCode + nameCode;
    console.log(`fiscalCode : ${fiscalCode}`);

}

console.log('test fiscalCode : ');
console.log('Matt : ');
console.log(fiscalCode(matt));
console.log('Helen : ');
console.log(fiscalCode(helen));
console.log('Mickey : ');
console.log(fiscalCode(mickey));


//----------------------------------------------------------------------
//Least Common Multiple

//----------------------------------------------------------------------
//Merge -- bonus

//----------------------------------------------------------------------
//Comments filter -- bonus

