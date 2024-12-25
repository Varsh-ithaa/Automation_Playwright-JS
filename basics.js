// important:
/*Build
unit testing coverage
deploy into Dev
smoke testing
Integration testing
unit testing
deploy into QA
end to end testing
API testing
Quality check
release into prod
*/






// 1. Write a JavaScript function to calculate the sum of two numbers.  
function add(a, b) {
    sum = a + b;
    console.log("sum of 2 numbers is", sum);
}
add(4, 5)
console.log('**************************************');

//subtraction
function subtraction(a, b) {
    reminder = a - b;
    console.log("reminder of 2 numbers is", reminder);
}
subtraction(6, 4)
console.log('**************************************');

// 2. Write a JavaScript program to find the maximum number in an array. 
function findMaxNumber(array) {
    return Math.max(...array);
}
const array = [5, 2, 7, 9, 11, 0];
const max = findMaxNumber(array);
console.log(max)
console.log('**************************************');


//  3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 
function isPlaindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, ' ').toLowerCase();
    const reverseStr = cleanedStr.split('').reverse().join('')
    console.log("Reversed string is", reverseStr);
    return cleanedStr === reverseStr;
}
const string = "Level";
const result = isPlaindrome(string);
console.log(`${string} is plaindrome:`, result);
console.log('**************************************');

// 4. Write a JavaScript program to reverse a given string.
// Method 1 
function stringReverse(str) {
    const string = str.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
    const stringReverse = string.split('').reverse().join('');
    console.log("Reversed string is", stringReverse);
    return stringReverse
}

const string1 = "VARSHA";
const revStr = stringReverse(string1);
console.log(`${revStr} is the reversed string of ${string1}`);
console.log('**************************************');


//or
// Method 2:
function reverseStr(str) {
    let reverseString = ' ';
    for (let j = str.length - 1; j >= 0; j--) {
        reverseString += str[j];
    }
    return reverseString

}
const string2 = "Javascript";
const revString2 = reverseStr(string2);
console.log(`${revString2} is the reversed string of ${string2}`);
console.log('**************************************');

// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
function EvenNumbers(arr) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            console.log(arr[i]);
            evenNumbers.push(arr[i])
        }
    }
    return evenNumbers
}

const array1 = [2, 5, 6, 9, 11, 8]
console.log(array1)
const numbers = EvenNumbers(array1);
console.log(numbers)
console.log('**************************************');

// 6. Write a JavaScript program to calculate the factorial of a given number. 
function factorial(num) {
    if (num < 0)
        return "Factorial is not defined for negative numbers";
    let number = 1;
    for (let i = 1; i <= num; i++) {
        number *= i;
    }
    return number
}

console.log(factorial(5));
console.log('**************************************');


//recursive method:
function isFactorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
console.log('**************************************');

//program to find duplicates and accuracy:
function duplicate(str) {
    let charCount = {};
    let duplicates = [];
    //to find occurance:
    for (let i = 0; i <= str.length; i++) {
        char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        }
        else {
            charCount[char] = 1;
        }
    }


    //to find duplicates:
    for (let char in charCount) {
        if (charCount[char] > 1) {
            duplicates.push(char);
        }
    }
    return duplicates
}

const orgString = "varshitha";
const duplicates = duplicate(orgString);
console.log(duplicates);









