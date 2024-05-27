"use strict";
// Task no 1
//  Node.js , TypeScript and VS Code installed in my computer
// Task no 2
let personName = "Abbas";
console.log(`Hello ${personName}, would you like to learn some Python today?`);
// Task no 3
let personName = "Abbas";
// in lowercase
console.log("lowercase:", personName.toLowerCase());
// in uppercase
console.log("uppercase:", personName.toUpperCase());
// in titlecase
console.log("titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
// Task no 4,5
let quote = "A person who never made a mistake never tried anything new.";
let author = "Albert Einstein";
console.log(`${author} once said, "${quote}"`);
let famous_person = "Albert Einstein";
let message = `${famous_person} once said, "${quote}"`;
console.log(`${message}`);
// Task no 6
let personName = "\t\n Abbas \n\t";
console.log("Original:" + personName);
console.log("Stripped:" + personName.trim());
// Task no 7,8
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// Task no 9: printing my favourite number. 
let favoriteNumber = 12;
// revealing my favourite number in a message format.
console.log(`My favorite number is ${favoriteNumber}.`);
// Task no 10
// author: [Muhammmad Abbas]
// date: [Friday , February 23 , 2024]
// Task no 11
let names = ["Abbas", "Ali", "Hamza", "Husnain"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
// Task no 12
let names = ["Abbas", "Ali", "Hamza", "Husnain"];
let message = "How are you?";
console.log(names[0] + " " + message);
console.log(names[1] + " " + message);
console.log(names[2] + " " + message);
console.log(names[3] + " " + message);
// Task no 13
let tranportations = ["Honda", "Audi", "Honda city"];
tranportations.map((items) => console.log(`I would like to own a ${items}`));
// Task no 14
let guestArr = ["Abbas", "Ali", "Hamza", "Husnain"];
let message = "You are invited to the dinner";
guestArr.map((items) => (console.log(`Dear ${items} , ${message}`)));
// Task no 15
// Part 1
let guestArr = ["Abbas", "Ali", "Hamza", "Husnain"];
let canNotAttend = "Abbas";
console.log(`${canNotAttend} can't attend the dinner.`);
// Part 2
let newGuest = "Ahsan";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// Part 3
let message = "You are invited to the dinner";
guestArr.map((items) => (console.log(`Dear ${items} , ${message}`)));
// Task no 16
// Part 1
let guestArr = ["Abbas", "Ali", "Hamza", "Husnain"];
let canNotAttend = "Abbas";
let newGuest = "Ahsan";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
let message1 = "I found a bigger dinner table so I invite more peoples";
guestArr.map((items) => (console.log(`Dear ${items} , ${message1}`)));
// Part 2
let guestBeg = "Salman";
guestArr.unshift(guestBeg);
console.log(guestArr);
// Part 3
let guestMid = "Naveed";
let indexMid = guestArr.length / 2;
guestArr.splice(indexMid, 0, guestMid);
console.log(guestArr);
// Part 4
let guestEnd = "Iqbal";
guestArr.push(guestEnd);
console.log(guestArr);
// Part 5
let message2 = "You are invited to the dinner";
guestArr.map((items) => console.log(`Dear ${items}, ${message2}`));
// Task no 17
let guestArr = ["Abbas", "Ali", "Hamza", "Husnain"];
console.log("Due to limited space, only two people can be invited for dinner.");
// Removing guests until only two names will remain.
while (guestArr.length > 2) {
    let removeGuest = guestArr.pop();
    console.log(`Sorry! My dear ${removeGuest}, You're no longer invited to dinner.`);
}
// Printing invitations to the remaining two guests.
guestArr.forEach((guest) => {
    console.log(`Dear ${guest}, You're still invited to dinner.`);
});
// Final guest list
console.log(`Final guest list : ${guestArr}`);
// Task no 18
let places = ["MADINA E MUNAWWARAH", "MAKKA E MUKARRAMA", "SHAM", "EGYPT", "AFGHANISTAN"];
console.log("Original order", places);
console.log("Alphabetical order", [...places].sort());
console.log("Original order after sorting", places);
console.log("Alphabetical reversed order", [...places].sort().reverse());
console.log("Original order after alphabetical reversed sorting", places);
places.reverse();
console.log("Reversed order", places);
places.reverse();
console.log("Back to original order", places);
places.sort();
console.log("Alphabetical order", places);
places.sort().reverse();
console.log("Alphabetical reversed order", places);
// Task no 19
let guestArr = ["Abbas", "Ali"];
let count_guests = guestArr.length;
console.log(`${count_guests} people are coming at dinner.`);
// Task no 20
let languages = ["Arabic", "Urdu", "Persian", "Hebrew"];
console.log("List of languages : ");
console.log(languages);
// Task no 21
let person = { name: "M.Abbas", fname: "M.Assad", age: 21 };
console.log(person);
// Task no 22
let items = ["pencil", "watch", "cap"];
// console.log(items[6]); It's an index error
console.log(items[2]);
// Task no 23
let sweet = "bisconni";
console.log("is sweet=='bisconni' ? print true");
console.log(sweet == "bisconni");
console.log("is sweet=='mayfair' ? print true");
console.log(sweet == "mayfair");
console.log("is sweet=='hilal' ? print true");
console.log(sweet == "hilal");
console.log("is sweet==rite ? print true");
console.log(sweet == "rite");
console.log("is sweet==bravo ? print true");
console.log(sweet == "bravo");
console.log("is sweet=='LU' ? print false");
console.log(sweet == "LU");
console.log("is sweet=='cadbury' ? print false");
console.log(sweet == "cadbury");
console.log("is sweet=='rafhan' ? print false");
console.log(sweet == "rafhan");
console.log("is sweet=='shezan' ? print false");
console.log(sweet == "shezan");
console.log("is sweet=='nestle' ? print false");
console.log(sweet == "nestle");
// Task no 24
let person_1 = "abbas";
let person_2 = "abbas bhai";
let person_3 = "Abbas";
let a = 24;
let b = 30;
let c = 18;
let vegetables = ["potato", "onion", "brinjal", "carrot"];
// equality and inequality
if (person_1 == person_2) {
    console.log("strings are equal");
}
else {
    console.log("strings are not equal");
}
//  lowercase
if (person_1 == person_3) {
    console.log("both are in lowercase");
}
else {
    console.log("both are in not lowercase");
}
// Numerical tests
if (a == b) {
    console.log("a is equal to b");
}
else {
    console.log("a is not equal to b");
}
if (a > b) {
    console.log("a is greater than b");
}
else if (a < b) {
    console.log("a is smaller than b");
}
if (a >= b) {
    console.log("a is greater than or equal to b");
}
else if (a <= b) {
    console.log("a is smaller than or equal to b");
}
if (a > b && a > c) {
    console.log("a is greater than both b and c");
}
else if (a > b || a > c) {
    console.log("a is greater than b or greater than c");
}
// Item is in an array or not
if (vegetables.includes("potato")) {
    console.log("potato is included in vegetables");
}
if (!vegetables.includes("garlic")) {
    console.log("garlic isn't included in vegetables");
}
// Task no 25
let alien_color = "green";
if (alien_color == "green") {
    console.log("player got 5 points");
}
// Fail version of test as requirement
if (alien_color == "red") {
    console.log("no output");
}
// Task no 26
let alien_color = "red";
if (alien_color == "green") {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
// Task no 27
let alien_color = "green";
if (alien_color == "green") {
    console.log("The player earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("The player earned 10 points.");
}
else if (alien_color == "red") {
    console.log("The player earned 15 points.");
}
// Task no 28
// A person’s stage of life
let age = 4;
if (age < 2) {
    console.log("the person is a baby");
}
else if (age < 4) {
    console.log("the person is a toddler");
}
else if (age < 13) {
    console.log("the person is a kid");
}
else if (age < 20) {
    console.log("the person is a teenager");
}
else if (age < 65) {
    console.log("the person is an adult");
}
else {
    console.log("the person is an elder");
}
// Task no 29
let favourite_fruits = ["Banana", "Apple", "Watermelon"];
if (favourite_fruits.includes("Banana")) {
    console.log("You really like Banana");
}
if (favourite_fruits.includes("Apple")) {
    console.log("You really like Apple");
}
if (favourite_fruits.includes("Watermelon")) {
    console.log("You really like Watermelon");
}
if (favourite_fruits.includes("Strawberry")) {
    console.log("You really like Strawberry");
}
if (favourite_fruits.includes("Orange")) {
    console.log("You really like Orange");
}
// Task no 30
let username = ["admin", "abbas", "assad", "abdulhaseeb", "jawed"];
for (const user of username) {
    if (user == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
}
// Task no 31
// Part 1
let username = ["admin", "abbas", "assad", "abdulhaseeb", "jawed"];
console.log("It is when the users list in not empty");
if (username.length > 0) {
    for (const user of username) {
        if (user == "admin") {
            console.log("Hello admin, Would you like to see a status report?");
        }
        else {
            console.log(`Hello ${user}, thank you for logging in again.`);
        }
    }
}
// Part 2
username = [];
console.log("It is when the users list in empty");
if (username.length == 0) {
    console.log("We need to find some users!");
}
// The confusion is that in this code both programs are working whether the user list is empty or not so the answer is that in first part user list is not empty and in second part user list is empty because it is updated.
// Task no 32
let current_users = ["abbas", "assad", "abdulhaseeb", "jawed", "aslam"];
let new_users = ["asghar", "abdulhaseeb", "waris", "iqbal", "abbas"];
let current_users_lowercase = current_users.map(user => user.toLowerCase());
for (const new_user of new_users) {
    if (current_users_lowercase.includes(new_user.toLowerCase())) {
        console.log(`Sorry ${new_user},it's in already use.`);
    }
    else {
        console.log("The username is available.");
    }
}
// Task no 33
// Ordinal Numbers
let ord_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const position of ord_num) {
    if (position === 1) {
        console.log(`${position}st`);
    }
    else if (position === 2) {
        console.log(`${position}nd`);
    }
    else if (position === 3) {
        console.log(`${position}rd`);
    }
    else {
        console.log(`${position}th`);
    }
}
// Task no 34
let pizza_flavours = ["Cheese Pizza", "BBQ Chicken Pizza", "Chicken Fajita"];
for (const pizza_names of pizza_flavours) {
    console.log(`I like ${pizza_names}.`);
}
console.log("The pizza itself looks so yummy, crispy and so cheesy. My love for Pizza is very high. I am always hungry for pizza, be it any time of the day. On every occasion, I celebrate it with pizza style.");
// Task no 35
let same_ch_animals = ["Camel", "Cow", "Goat"];
for (const animals of same_ch_animals) {
    console.log(`In animals ,I like ${animals} very much.`);
}
console.log("There are so many animals in this world but my favorite are these three because the thing which makes them special and which is common in all of them is that they all can be sacrificedon the occasion of Eid-ul-Azha with some conditions by the order of ALLAH");
// Task no 36
function make_shirt(size, text) {
    console.log(`Make a ${size} t-shirt for me and there should be a message that ${text}.`);
}
make_shirt("large", "The clothes must be Islamic");
// Task no 37
function make_shirt(size = 'large', text = 'I love TypeScript') {
    console.log(`Make a ${size} t-shirt for me and there should be a message that ${text}.`);
}
make_shirt();
make_shirt('medium');
// different message
make_shirt('extra-large', 'Be happy');
// Task no 38
function describe_city(city, country = 'Pakistan') {
    console.log(`${city} is in ${country}`);
}
describe_city('Karachi'); //default sentence
describe_city('Tashkent', 'Uzbekistan');
describe_city('Delhi', 'Hind');
// Task no 39
function city_country(city, country) {
    return `${city},${country}`;
}
let cc1 = city_country('Lahore', 'Pakistan');
let cc2 = city_country('Tashkent', 'Uzbekistan');
let cc3 = city_country('Delhi', 'Hind');
console.log(cc1);
console.log(cc2);
console.log(cc3);
// Task no 40
// It's a function which returns the data of album in the form of object . 
function make_album(artist, title, tracks) {
    let dictionary = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    }; // Type assertion
    if (tracks !== undefined) {
        dictionary.tracks = tracks;
    }
    return dictionary;
}
let album1 = make_album('Michael Jackson', 'Thriller');
console.log(album1);
let album2 = make_album('Beatles', 'Abbey Road', 58); // Including number of tracks for this album
console.log(album2);
let album3 = make_album('Pink Floyd', 'Dark Side of the Moon');
console.log(album3);
// Task no 41
let magicians = ['Jessica Williams', 'Christopher Brown', 'Ashley Martinez', 'Joshua Lee', 'Matthew Nguye'];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0) + magician.slice(1));
    }
}
show_magicians(magicians);
// Task no 42
let magicians = ['Jessica Williams', 'Christopher Brown', 'Ashley Martinez', 'Joshua Lee', 'Matthew Nguye'];
// this is the function which will modify the original array
function make_great(arr, prefix) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + prefix;
    }
}
make_great(magicians, " the great");
show_magicians(magicians);
// Task no 43
let magicians = [
    "Jessica Williams",
    "Christopher Brown",
    "Ashley Martinez",
    "Joshua Lee",
    "Matthew Nguye",
];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(arr, prefix) {
    let new_arr = []; // Create a new array to store modified names
    for (let i = 0; i < arr.length; i++) {
        new_arr.push(arr[i] + prefix); // Add "the great" to each magician's name and push it to new_arr
    }
    return new_arr; // Return the new array
}
// Make a copy of the magicians array
let magicians_copy = [...magicians];
// Call make_great with a copy of the magicians array
let great_magicians = make_great(magicians_copy, " the Great");
// Display both arrays
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
// Task no 44
function sandwich(...ingredients) {
    console.log("\nSandwich order:-");
    for (let i = 0; i < ingredients.length; i++) {
        console.log(`${ingredients[i]}`);
    }
}
console.log("Here the tasty sandwich is.");
sandwich("beef", "cheese", "soya sauce");
sandwich("garlic ketchup", "mayonnise");
sandwich("tomato", "egg", "cucumber");
// Task no 45
function createCar(manufacturer, model, ...options) {
    const car = {
        manufacturer,
        model
    };
    for (const [key, value] of options) {
        car[key] = value;
    }
    return car;
}
const myCar = createCar('Toyota', 'Camry', ['color', 'blue'], ['year', 2024]);
console.log(myCar);
