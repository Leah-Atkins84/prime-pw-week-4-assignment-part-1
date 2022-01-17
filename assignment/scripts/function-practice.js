console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName() {
  return 'Hello Leah!';
}
// Remember to call the function to test
console.log(helloName());


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  console.log( 'in addNumbers', firstNumber, secondNumber);
  let result = firstNumber + secondNumber;
  return result;
  // return firstNumber + secondNumber;
}
console.log( 'running addNumbers with 5 & 6:', addNumbers( 5, 6));


// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  console.log( ' in multiplyThree ', num1, num2, num3 );
  let result = num1 * num2 * num3;
  return result;
}
console.log( 'running multiplyThree with 3 & 3 & 3:', multiplyThree( 3, 3, 3));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else{
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( '3 isPositive - should say true', isPositive(3) );
console.log( '0 isPositive - should say false', isPositive(0) );
console.log( '-3 isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
let numberArray = [ 1, 2, 3, 4]
function getLastNumber(){
  let getLastNumber = numberArray[numberArray.length -1];
  return getLastNumber;
}

console.log('Testing get last function- last item should say 4:', getLastNumber(numberArray))

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
let labTestAccronyms = [ 'hgb', 'a1c', 'cbc', 'hft', 'bmp']
let labNumbers = [12, 5.6, 9, 20, 143]

function find( value, array ){
  for (let i = 0; i <array.length; i++){
    if (array [i] === value){
      return true;
    }
  }
    return false;
}
console.log('is hgb a lab test?:', find('hgb', labTestAccronyms));
console.log('is cbc a lab test?:', find('cbc', labTestAccronyms));
console.log('is 5.6 a lab number?:', find(5.6, labNumbers) );
console.log('is 47 a lab number?:', find(47, labNumbers));//should say false
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
