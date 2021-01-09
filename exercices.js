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
            this.size +=1;
        }
        this.mapiObject[key]=value;
    }

    this.delete = function (key) {
        delete this.mapiObject[key];
        this.size -=1;
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

//----------------------------------------------------------------------
//Prop access -- bonus

//----------------------------------------------------------------------
//Type check

const type_check_v1 = (value, type) => {
    if (typeof value === type) {
        return true;
    }else{
        return false;
    }
}

//----------------------------------------------------------------------
//Type check V2

const type_check_v2 = (value, type, array) => {
    if(type_check_v1(value, type) && array.includes(value)) {
        return true;
    }else{
        return false;
    }
}

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
console.log('Test Hashtags : ');
console.log(getHashTags('How the Avocado Became the Fruit of the Global Trade'));
console.log(getHashTags('The Helicopter Is Yellow and Greenish'));

//----------------------------------------------------------------------
//RemoveDuplicates

const array1 = [0, 2, 4, 6, 8, 8];

const removeDuplicates = (array) => { return [...new Set(array)]; }
console.log('Test Remove Duplicates : ')
console.log(removeDuplicates(array1));

//----------------------------------------------------------------------
//Intersection

const array2 = [1, 2, 3, 4, 5, 6];

const intersection = (array1, array2) => {
    return filteredArray = array1.filter(value => array2.includes(value));
}

console.log('Test intersection : ')
console.log(intersection(array1, array2));

//----------------------------------------------------------------------
//Arraydiff

const arrayDiff = (array1, array2) => {
    const firstFiltrationArray = array1.filter(value => !array2.includes(value));
    const secondFiltrationArray = array2.filter(value => !array1.includes(value));
    const filteredArray = [...firstFiltrationArray, ...secondFiltrationArray];
    return removeDuplicates(filteredArray);
}
console.log('Test ArrayDiff : attendu [0, 1, 3, 5, 8]')
console.log(arrayDiff(array1, array2));

//----------------------------------------------------------------------
//Combination

const array = [2, 12, 2];

function multiplicates(array) {
    let multiplicator = 1;
    let result = 1;

    for (let i = 0; i < array.length ; i++) {
        let operande = array[i];
        result = operande * multiplicator;
        multiplicator = result;
    }
    return result;
}

console.log('Test combination : ');
console.log(multiplicates(array));

//----------------------------------------------------------------------
//Fiscal Code



//----------------------------------------------------------------------
//Least Common Multiple

//----------------------------------------------------------------------
//Merge -- bonus

//----------------------------------------------------------------------
//Comments filter -- bonus

