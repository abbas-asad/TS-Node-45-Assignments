// Task no 1
//  Node.js , TypeScript and VS Code installed in my computer
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Task no 2
var personName = "Abbas";
console.log("Hello ".concat(personName, ", would you like to learn some Python today?"));
// Task no 3
var personName = "Abbas";
// in lowercase
console.log("lowercase:", personName.toLowerCase());
// in uppercase
console.log("uppercase:", personName.toUpperCase());
// in titlecase
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
// Task no 4,5
var quote = "A person who never made a mistake never tried anything new.";
var author = "Albert Einstein";
console.log("".concat(author, " once said, \"").concat(quote, "\""));
var famous_person = "Albert Einstein";
var message = "".concat(famous_person, " once said, \"").concat(quote, "\"");
console.log("".concat(message));
// Task no 6
var personName = "\t\n Abbas \n\t";
console.log("Original:" + personName);
console.log("Stripped:" + personName.trim());
// Task no 7,8
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// Task no 9: printing my favourite number. 
var favoriteNumber = 12;
// revealing my favourite number in a message format.
console.log("My favorite number is ".concat(favoriteNumber, "."));
// Task no 10
// author: [Muhammmad Abbas]
// date: [Friday , February 23 , 2024]
// Task no 11
var names = ["Abbas", "Ali", "Hamza", "Husnain"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
// Task no 12
var names = ["Abbas", "Ali", "Hamza", "Husnain"];
var message = "How are you?";
console.log(names[0] + " " + message);
console.log(names[1] + " " + message);
console.log(names[2] + " " + message);
console.log(names[3] + " " + message);
// Task no 13
var tranportations = ["Honda", "Audi", "Honda city"];
tranportations.map(function (items) { return console.log("I would like to own a ".concat(items)); });
// Task no 14
var guestArr = ["Abbas", "Ali", "Hamza", "Husnain"];
var message = "You are invited to the dinner";
guestArr.map(function (items) { return (console.log("Dear ".concat(items, " , ").concat(message))); });
// Task no 15
// Part 1
var guestArr = ["Abbas", "Ali", "Hamza", "Husnain"];
var canNotAttend = "Abbas";
console.log("".concat(canNotAttend, " can't attend the dinner."));
// Part 2
var newGuest = "Ahsan";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// Part 3
var message = "You are invited to the dinner";
guestArr.map(function (items) { return (console.log("Dear ".concat(items, " , ").concat(message))); });
// Task no 16
// Part 1
var guestArr = ["Abbas", "Ali", "Hamza", "Husnain"];
var canNotAttend = "Abbas";
var newGuest = "Ahsan";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
var message1 = "I found a bigger dinner table so I invite more peoples";
guestArr.map(function (items) { return (console.log("Dear ".concat(items, " , ").concat(message1))); });
// Part 2
var guestBeg = "Salman";
guestArr.unshift(guestBeg);
console.log(guestArr);
// Part 3
var guestMid = "Naveed";
var indexMid = guestArr.length / 2;
guestArr.splice(indexMid, 0, guestMid);
console.log(guestArr);
// Part 4
var guestEnd = "Iqbal";
guestArr.push(guestEnd);
console.log(guestArr);
// Part 5
var message2 = "You are invited to the dinner";
guestArr.map(function (items) { return console.log("Dear ".concat(items, ", ").concat(message2)); });
// Task no 17
var guestArr = ["Abbas", "Ali", "Hamza", "Husnain"];
console.log("Due to limited space, only two people can be invited for dinner.");
// Removing guests until only two names will remain.
while (guestArr.length > 2) {
    var removeGuest = guestArr.pop();
    console.log("Sorry! My dear ".concat(removeGuest, ", You're no longer invited to dinner."));
}
// Printing invitations to the remaining two guests.
guestArr.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You're still invited to dinner."));
});
// Final guest list
console.log("Final guest list : ".concat(guestArr));
// Task no 18
var places = ["MADINA E MUNAWWARAH", "MAKKA E MUKARRAMA", "SHAM", "EGYPT", "AFGHANISTAN"];
console.log("Original order", places);
console.log("Alphabetical order", __spreadArray([], places, true).sort());
console.log("Original order after sorting", places);
console.log("Alphabetical reversed order", __spreadArray([], places, true).sort().reverse());
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
var guestArr = ["Abbas", "Ali"];
var count_guests = guestArr.length;
console.log("".concat(count_guests, " people are coming at dinner."));
// Task no 20
var languages = ["Arabic", "Urdu", "Persian", "Hebrew"];
console.log("List of languages : ");
console.log(languages);
// Task no 21
var person = { name: "M.Abbas", fname: "M.Assad", age: 21 };
console.log(person);
// Task no 22
var items = ["pencil", "watch", "cap"];
// console.log(items[6]); It's an index error
console.log(items[2]);
// Task no 23
var sweet = "bisconni";
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
var person_1 = "abbas";
var person_2 = "abbas bhai";
var person_3 = "Abbas";
var a = 24;
var b = 30;
var c = 18;
var vegetables = ["potato", "onion", "brinjal", "carrot"];
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
var alien_color = "green";
if (alien_color == "green") {
    console.log("player got 5 points");
}
// Fail version of test as requirement
if (alien_color == "red") {
    console.log("no output");
}
// Task no 26
var alien_color = "red";
if (alien_color == "green") {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
// Task no 27
var alien_color = "green";
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
var age = 4;
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
var favourite_fruits = ["Banana", "Apple", "Watermelon"];
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
var username = ["admin", "abbas", "assad", "abdulhaseeb", "jawed"];
for (var _i = 0, username_1 = username; _i < username_1.length; _i++) {
    var user = username_1[_i];
    if (user == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in again."));
    }
}
// Task no 31
// Part 1
var username = ["admin", "abbas", "assad", "abdulhaseeb", "jawed"];
console.log("It is when the users list in not empty");
if (username.length > 0) {
    for (var _a = 0, username_2 = username; _a < username_2.length; _a++) {
        var user = username_2[_a];
        if (user == "admin") {
            console.log("Hello admin, Would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(user, ", thank you for logging in again."));
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
var current_users = ["abbas", "assad", "abdulhaseeb", "jawed", "aslam"];
var new_users = ["asghar", "abdulhaseeb", "waris", "iqbal", "abbas"];
var current_users_lowercase = current_users.map(function (user) { return user.toLowerCase(); });
for (var _b = 0, new_users_1 = new_users; _b < new_users_1.length; _b++) {
    var new_user = new_users_1[_b];
    if (current_users_lowercase.includes(new_user.toLowerCase())) {
        console.log("Sorry ".concat(new_user, ",it's in already use."));
    }
    else {
        console.log("The username is available.");
    }
}
// Task no 33
// Ordinal Numbers
var ord_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _c = 0, ord_num_1 = ord_num; _c < ord_num_1.length; _c++) {
    var position = ord_num_1[_c];
    if (position === 1) {
        console.log("".concat(position, "st"));
    }
    else if (position === 2) {
        console.log("".concat(position, "nd"));
    }
    else if (position === 3) {
        console.log("".concat(position, "rd"));
    }
    else {
        console.log("".concat(position, "th"));
    }
}
// Task no 34
var pizza_flavours = ["Cheese Pizza", "BBQ Chicken Pizza", "Chicken Fajita"];
for (var _d = 0, pizza_flavours_1 = pizza_flavours; _d < pizza_flavours_1.length; _d++) {
    var pizza_names = pizza_flavours_1[_d];
    console.log("I like ".concat(pizza_names, "."));
}
console.log("The pizza itself looks so yummy, crispy and so cheesy. My love for Pizza is very high. I am always hungry for pizza, be it any time of the day. On every occasion, I celebrate it with pizza style.");
// Task no 35
var same_ch_animals = ["Camel", "Cow", "Goat"];
for (var _e = 0, same_ch_animals_1 = same_ch_animals; _e < same_ch_animals_1.length; _e++) {
    var animals = same_ch_animals_1[_e];
    console.log("In animals ,I like ".concat(animals, " very much."));
}
console.log("There are so many animals in this world but my favorite are these three because the thing which makes them special and which is common in all of them is that they all can be sacrificedon the occasion of Eid-ul-Azha with some conditions by the order of ALLAH");
// Task no 36
function make_shirt(size, text) {
    console.log("Make a ".concat(size, " t-shirt for me and there should be a message that ").concat(text, "."));
}
make_shirt("large", "The clothes must be Islamic");
// Task no 37
function make_shirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'I love TypeScript'; }
    console.log("Make a ".concat(size, " t-shirt for me and there should be a message that ").concat(text, "."));
}
make_shirt();
make_shirt('medium');
// different message
make_shirt('extra-large', 'Be happy');
// Task no 38
function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city('Karachi'); //default sentence
describe_city('Tashkent', 'Uzbekistan');
describe_city('Delhi', 'Hind');
// Task no 39
function city_country(city, country) {
    return "".concat(city, ",").concat(country);
}
var cc1 = city_country('Lahore', 'Pakistan');
var cc2 = city_country('Tashkent', 'Uzbekistan');
var cc3 = city_country('Delhi', 'Hind');
console.log(cc1);
console.log(cc2);
console.log(cc3);
// Task no 40
// It's a function which returns the data of album in the form of object . 
function make_album(artist, title, tracks) {
    var dictionary = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    }; // Type assertion
    if (tracks !== undefined) {
        dictionary.tracks = tracks;
    }
    return dictionary;
}
var album1 = make_album('Michael Jackson', 'Thriller');
console.log(album1);
var album2 = make_album('Beatles', 'Abbey Road', 58); // Including number of tracks for this album
console.log(album2);
var album3 = make_album('Pink Floyd', 'Dark Side of the Moon');
console.log(album3);
// Task no 41
var magicians = ['Jessica Williams', 'Christopher Brown', 'Ashley Martinez', 'Joshua Lee', 'Matthew Nguye'];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0) + magician.slice(1));
    }
}
show_magicians(magicians);
// Task no 42
var magicians = ['Jessica Williams', 'Christopher Brown', 'Ashley Martinez', 'Joshua Lee', 'Matthew Nguye'];
// this is the function which will modify the original array
function make_great(arr, prefix) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + prefix;
    }
}
make_great(magicians, " the great");
show_magicians(magicians);
// 43
var magicians = [
    "Jessica Williams",
    "Christopher Brown",
    "Ashley Martinez",
    "Joshua Lee",
    "Matthew Nguye",
];
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
function make_great(arr, prefix) {
    var new_arr = []; // Create a new array to store modified names
    for (var i = 0; i < arr.length; i++) {
        new_arr.push(arr[i] + prefix); // Add "the great" to each magician's name and push it to new_arr
    }
    return new_arr; // Return the new array
}
// Make a copy of the magicians array
var magicians_copy = __spreadArray([], magicians, true);
// Call make_great with a copy of the magicians array
var great_magicians = make_great(magicians_copy, " the Great");
// Display both arrays
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
// Task no 44
function sandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("\nSandwich order:-");
    for (var i = 0; i < ingredients.length; i++) {
        console.log("".concat(ingredients[i]));
    }
}
console.log("Here the tasty sandwich is.");
sandwich("beef", "cheese", "soya sauce");
sandwich("garlic ketchup", "mayonnise");
sandwich("tomato", "egg", "cucumber");
// Task no 45
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var _b = options_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
var myCar = createCar('Toyota', 'Camry', ['color', 'blue'], ['year', 2024]);
console.log(myCar);
