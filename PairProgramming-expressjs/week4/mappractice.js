/*

Task 1
Add a property to each friend storing their initials and calculates the sum of all ages
to use in calculation of average age. An average is the total of Ages divide for how many friends 

Task 2
Gets an array of all friends older than the average age

// map all the friends > average

Task 3
Gets an array of strings listing the initials and age
Expected output: [ 'AB: 35', 'SW: 45', 'AE: 38', 'IH: 46' ]

Bonus
How you can work in this programmatically (using a function)

*/

// A list of friends stored as an array of objects
const myFriends = [
    { firstname: 'Isma', lastname: 'Kirby', age: 27 },
    { firstname: 'Aaliya', lastname: 'Becker', age: 35 },
    { firstname: 'Adnaan', lastname: 'Tang', age: 22 },
    { firstname: 'Rafi', lastname: 'Pearson', age: 29 },
    { firstname: 'Eshaal', lastname: 'Gould', age: 29 },
    { firstname: 'Scarlett', lastname: 'Whitehead', age: 45 },
    { firstname: 'Arslan', lastname: 'Esparza', age: 38 },
    { firstname: 'Isla-Mae', lastname: 'Hastings', age: 46 },
    { firstname: 'Eamonn', lastname: 'Vang', age: 21 },
    { firstname: 'Haya', lastname: 'Mcdougall', age: 31 },
];

const friendsNames = myFriends.map((friend) => {
    const initials = `${friend.firstname[0]}${friend.lastname[0]}`
    return initials;
});
console.log(friendsNames)

//average ages

const avgAge = (myFriendsArr) => {
    let sum = 0;
    const ages = myFriendsArr.map((friend) => {
        sum += friend.age;
    }) 
    const avg = sum /myFriendsArr.length;
    return avg
}

console.log(avgAge(myFriends))

// friendsAges = [27, 35, 22...]
