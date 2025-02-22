// Sorting an Array of Objects by a Key [Sort]

//sort by age youngest to oldest (sort method)
const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
   ];

const ages = users.map((user) => user.age);
ages.sort((a, b) => a - b);
console.log(ages)

// Checking if Any Element in an Array Meets a Condition [Some]
const numbers = [1, 2, 3, 4, 5];
const positiveNum = numbers.some(number => number > 10)
console.log(positiveNum)
   
// Checking if All Elements in an Array Meet a Condition [Every]
   const evenNumbers = [2, 4, 6, 8, 10];

//    % is for division every element is /2

const isEvenNum = evenNumbers.every(number => number % 2 === 0);
console.log(isEvenNum);