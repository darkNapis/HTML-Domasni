// let selectFirstDiv = document.getElementById(`first`);
// console.log(selectFirstDiv);

// let selectAllParagraph = document.getElementsByClassName(`paragraph`);
// console.log(selectAllParagraph);

// let selectLastDiv = document.querySelectorAll(`div`)[2]; 
// console.log(selectLastDiv);

// let headerInLastDiv = selectLastDiv.lastElementChild;
// console.log(headerInLastDiv);



// Event with anonymus func

// let button = document.getElementById(`button`);

// button.addEventListener(`click`, function() {
//     console.log(`Our first event trigered!`)
// });

// Event with function reference

// Wrong way
// button.addEventListener(`click`, alertSomething())

// //  Right way
// button.addEventListener(`click`, alertSomething)

// function alertSomething() {
//     alert(`Something`);
// }

// let title = document.getElementById(`title`);

// button.addEventListener(`click`, function() {
//     title.innerText += ` !New text! `
// })

// let title = document.getElementById(`title`);

// let orderedList = document.getElementById(`list-of-animals`);

// let btnListAnimals = document.getElementById(`list-animals`);

// let btnAddAnimal = document.getElementById(`add-animal`);

// let listOfAnimals = [`Dog`, `Cat`, `Wolf`];

// function listAnimalsInTheJungle(htmlElement, arr) {
//     for(let item of arr) {
//         htmlElement.innerHTML += `<li>${item}</li>`;
//     }
// }

// function addAnimal() {
//     let input = prompt(`Please enter a new animal`);
//     for(let animal of listOfAnimals) {
//         if (animal === input) {
//             input = prompt(`Please enter a new animal`);
//         }
//     }
//     listOfAnimals.push(input);
//     listOfAnimalsInTheJungle(orderedList, newArr);
// }
    
// // Events

// btnListAnimals.addEventListener(`click`, function() {
//     listAnimalsInTheJungle(orderedList, listOfAnimals);
// })

// btnAddAnimal.addEventListener(`click`, addAnimal);

// Task 0 / class 7

function charCount(char,sentence) {
    let sentenceArray = sentence.split(``);
    let counter = 0;        
    for(let element of sentenceArray) {
        if(element === char) {
            counter++;
        }
    }
    return counter;
}

console.log(charCount("a", "Code academy"));
console.log(charCount("c", "Chamber of secrets"));
console.log(charCount("b", "big fat bubble"));

// Task 1


function filterArray(arr){
    let newArr = [];
    for(let item of arr) {
        if(typeof item === `number` && item >= 0){
            newArr.push(item);
        }
    }
    return newArr;
}

console.log(filterArray([1, 2, "a", "b"]));
console.log(filterArray([1, "a", "b", 0, 15]));
console.log(filterArray([1, 2, "aasf", "1", "123", 123]));

// Task 2

function getAbsSum(array) {
    let sum = 0;
    for( let item of array){
        sum += Math.abs(item);
    }
    return sum;
}

console.log(getAbsSum([2, -1, 4, 8, 10]));
console.log(getAbsSum([-3, -4, -10, -2, -3]));
console.log(getAbsSum([2, 4, 6, 8, 10]));
console.log(getAbsSum([-1]));

// Task 3

function societyName(array) {
    let secretSociety = ``;
    for ( let i = 0; i < array.length; i++) {
        // let firstLetter = array[i][0];
        let firstLetter = array[i].charAt(0);
        secretSociety += firstLetter;
    }
    return secretSociety;
}

console.log(societyName(["Adam", "Sarah", "Malcolm"]));
console.log(societyName(["Harry", "Newt", "Luna", "Cho"]));
console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]));

// Task 4

function amplify(a) {
    let array = [];
    for (let i = 1; i <= a; i++) {
        if (i % 4 === 0) {
            array.push(i * 10)
            continue;
        }
        array.push(i);
    }
    return array;
}

console.log(amplify(4));
console.log(amplify(3));
console.log(amplify(25));

// Task 5
// Vowels a,e,i,o,u

function countVowels(mystring) {
    let arr = mystring.split(``);
    let counter = 0;
    for (let item of arr) {
        switch (item.toLowerCase()) {
            case `a`:
            case `e`:
            case `i`:
            case `o`:
            case `u`:
                counter++;
                break;
            default:
                break;                    
        }
    }
    return counter;
}

console.log(countVowels(`Celebration`));
console.log(countVowels(`Palm`));
console.log(countVowels(`Prediction`));

// Task 6

function addEnding(array,str) {
    let arr = [];
    for (let element of array) {
        // let newStr = element + str;
        let newStr = element.concat(str);
        arr.push(newStr);
    }
    return arr;
}

console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));
console.log(addEnding(["new", "pander", "scoop"], "er"));
console.log(addEnding(["bend", "sharpen", "mean"], "ing"));

// Task 7

function checkPalindrome(str) {
    let arr = str.split(``);
    let newStr = ``;
    for (let i = arr.length -1; i >= 0; i--) {
        newStr += arr[i];
    }
    return str === newStr;
}

console.log(checkPalindrome("mom"));
console.log(checkPalindrome("scary"));
console.log(checkPalindrome("reviver"));
console.log(checkPalindrome("stressed"));

// Task 8

function isLeap(year) {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
    return false;
}

console.log(isLeap(2020));
// Exactly divided by 4 and not by 100.
console.log(isLeap(1800));
// Exactly divided by 4, but is also exactly divided by 100.
console.log(isLeap(2000));
// Exactly divided by 400.
console.log(isLeap(2019));
// It can't be exactly divided by 400 or by 4

// Task 9

function oddProduct(array) {
    let product = 1;
    for (let element of array) {
        if(element % 2 !== 0) {
            product *= element;
        }
    }
    return product;
}

console.log(oddProduct([3, 4, 1, 1, 5]));
console.log(oddProduct([5, 5, 8, 2, 4, 32]));
console.log(oddProduct([1, 2, 1, 2, 1, 2, 1, 2]));

// Task 10

// function filterDigitLength(array,number) {
//     let newArr = [];
//     for( let element of array) {
//         let lengthOfNumber = element.toString().length;
//         if(lengthOfNumber = number) {
//             newArr.push(element);
//         }
//     }
//     return newArr;
// }

let filterDigitLength = (array,number) => array.filter(element => element.ToString().length === number);

console.log(filterDigitLength([88, 232, 4, 9721, 555], 3)); 
console.log(filterDigitLength([2, 7, 8, 9, 1012], 1));
console.log(filterDigitLength([32, 88, 74, 91, 300, 4050], 1)); 
console.log(filterDigitLength([5, 6, 8, 9], 1));

// Task 11

function last(array,number) {
    if(array.length < number) {
        return `invalid`;
    }
    let newArr = [];
    let startIndex = array.length - number;

    while (startIndex < array.length) {
        newArr.push(array[startIndex]);
        startIndex++;
    }
    return newArr;
}

console.log(last([1, 2, 3, 4, 5], 1)); 
console.log(last([4, 3, 9, 9, 7, 6], 3)); 
console.log(last([1, 2, 3, 4, 5], 7)); 
console.log(last([1, 2, 3, 4, 5], 0));

// Task 11 part 2

function mirror(array) {
    for (let i = array.length -1; i >= 0; i--){
        if(array.length - 1 === i) {
            continue;
        }
        array.push(array[i]);
    }
    return array;
}

console.log(mirror([0, 2, 4, 6]));
console.log(mirror([1, 2, 3, 4, 5])); 
console.log(mirror([3, 5, 6, 7, 8])); 