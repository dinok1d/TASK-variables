/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...

const fullName = "Sayed Hasan Alhussaini"
const yearOfBirth = 1993
let hobby = "pc gaming"
let funFact = "i have been to gaming conventions"
const image = "https://lh3.googleusercontent.com/5LIMaa7WTNy34bzdFhBETa2MRj7mFJZWb8gCn_uyxQkUvFx_uOFCeQjcK16c6WpBA3E=w512-h512"
console.log(fullName,yearOfBirth,hobby,fullName)




/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is {fullName}
 * 2. yearOfBirthString   -> assign it to: I am {YOUR_AGE}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {YOUR_HOBBY}
 * 
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */

const fullNameString = `My name is ${fullName}`;
const yearOfBirthString = `I am ${2021-yearOfBirth}`
const hobbyString = `My hobby is ${hobby}`




/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  stars = stars + 1 
}
function decrementBy1() {
  stars = stars - 1 
}

function incrementBy2() {
  stars = stars + 2 
}
function decrementBy2() {
 stars = stars - 2 
}
