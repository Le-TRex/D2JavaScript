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
    if (stringToCheck == reversedString) {
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
    //this.size = Object.keys(this.mapiObject).length;
    this.size=2;

    this.set = function (key, value) {

        if (this.has(key)) {
            this.mapiObject[key]=value;

        }else{
            this.mapiObject[key]=value;
            this.size +=1;
        }
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
//Prop access

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

