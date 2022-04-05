//1: Given two strings, return true if they are anagrams of one another

function anagram() {
    let str1 = 'Earth',
        str2 = 'Heart',
        p = 0;
    if (str1.length != str2.length) {
        console.log('Not Anagram');
    } else {
        let a = str1.toLowerCase().split('').sort()
        let b = str2.toLowerCase().split('').sort()
        for (i = 0; i < a.length; i++) {
            if (a[i] == b[i])
                continue
            else {
                p = 1;
                break;
            }
        }
        if (p == 0) {
            console.log("String 1 is Anagram of String 2")
        } else if (p == 1) {
            console.log('Not Anagram');
        }
    }
}
anagram();

//Output
// String 1 is Anagram of String 2

//2: Write a JavaScript program to calculate the factorial of a number

function factorial(num) {
    if (num < 2) {
        console.log("1")
    } else {
        let fact = 1
        for (let i = 2; i <= num; i++) {
            fact *= i
        }
        console.log('Factorial:', fact)
    }
}
factorial(5)

//Output
// Factorial: 120

//3. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers

function GCD(num1, num2) {
    if (num1 == num2) {
        console.log(num1)
    } else {
        let gcd
        for (let i = 1; i < num1 && i < num2; i++) {
            if (num1 % i == 0 && num2 % i == 0)
                gcd = i
        }
        console.log('GCD of ' + num1 + ' and ' + num2 + ' is : ' + gcd)
    }
}
GCD(18, 27)

//Output
// GCD of 18 and 27 is : 9

// 4. Write a JavaScript program to convert an asynchronous function to return a promise.

async function main() {
    let num = 6
    console.log('Before Await')
    try {
        let res = await checkSuccess(num)
        console.log('Success:', res.success)
    }
    catch (err) {
        console.log('Success: ', err.success)
    }
    console.log('After Await')
}
function checkSuccess(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 == 0)
            resolve({ success: 'Even' })
        else
            reject({ success: 'Odd' })
    })
}
main()

//Output
// Before Await
// Success: Even
// After Await

// 5. Write a JavaScript program which returns a subset of a string. 
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

const subsetString = (str) => {
    let i, j = 0,
        subStringArr = []
    for (i = 0; j < str.length; i++) {
        if (j < str.length - 1 && j <= i) {
            temp = str.slice(j, i + 1)
            subStringArr.push(temp)
        }
        if (i == str.length - 1 && j != str.length) {
            i = 0
            j++
        }
    }
    subStringArr.push(str[str.length - 1])
    console.log(subStringArr)

}
subsetString('dog')

//Output
// [ 'd', 'do', 'dog', 'o', 'og', 'g' ]

// 6. Write a JavaScript function to check whether a string is blank or not

function blankString() {
    let str = ''
    if (str.length <= 0)
        console.log("String is blank")
    else {
        console.log('String is not blank')
    }
}
blankString()

//Output
// String is blank

// 7. Write a JavaScript function to capitalize the first letter of a string.

function first(str) {
    let temp = str.split('')
    temp[0] = temp[0].toUpperCase()
    str = temp.join('')
    console.log(str)
}
first('hello')

//Output
// Hello

// 8. Write a JavaScript function to capitalize the first letter of each word in a string.

function firstLetter() {
    str = 'this is a string'
    tempArr = str.split(' ')
    for (let i = 0; i < tempArr.length; i++) {
        let temp = tempArr[i].split('')
        temp[0] = temp[0].toUpperCase()
        tempArr[i] = temp.join('')
    }
    str = tempArr.join(' ')
    console.log(str)
}
firstLetter()

//Output


// 9. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.

function caseChange() {
    str = 'tHis iS a StRiNg'
    tempArr = str.split(' ')
    for (let i = 0; i < tempArr.length; i++) {
        let temp = tempArr[i].split('')
        for (let j = 0; j < temp.length; j++) {
            if (temp[j] == temp[j].toLowerCase()) {
                temp[j] = temp[j].toUpperCase()
            }
            else if (temp[j] == temp[j].toUpperCase()) {
                temp[j] = temp[j].toLowerCase()
            }
        }
        tempArr[i] = temp.join('')
    }
    str = tempArr.join(' ')
    console.log(str)
}
caseChange()

//Output
// ThIS Is A sTrInG

// 10. Write a JavaScript function to convert a string into camel case.

function camelCase() {
    str = 'this is a string'
    tempArr = str.split(' ')
    for (let i = 1; i < tempArr.length; i++) {
        let temp = tempArr[i].split('')
        temp[0] = temp[0].toUpperCase()
        tempArr[i] = temp.join('')
    }
    str = tempArr.join(' ')
    console.log(str)
}
camelCase()

//Output
// this Is A String