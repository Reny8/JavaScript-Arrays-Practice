
//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },

    
]

//Example function
function findMexicanFood(){
    let results = dishes.filter(function(el){
        if(el.cuisine === "Mexican") return true })
    return results }

let mexicanFood = findMexicanFood();
console.log('Mexican Foods: ', mexicanFood)



//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

function problemOne(){
    let results = dishes.filter(function(element) {
        if (element.cuisine === "Vegetarian") return true })
    return results }

let vegetarianFood = problemOne();
console.log('Vegetarian: ', vegetarianFood)

//2. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter
function problemTwo() {
    let results = dishes.filter(function(element) {
        if (element.cuisine === "Italian" && element.servings > 5) return true })
    return results }

let italianFood = problemTwo();
console.log("Italian Food with a serving size greater than 5: ", italianFood)
//3. Create a function that will return only dishes whose serving id number matches their serving count.
//Filter
function problemThree() {
    let results = dishes.filter(function(element) {
        if (element.id === element.servings) return true })
    return results }

let servingsMatchId = problemThree();
console.log("Dishes that servings match the dish id: ", servingsMatchId)

//4. Create a function that will return only dishes whose serving count is even.
//Filter
function problemFour() {
    let results = dishes.filter(function(element) {
        if (element.servings % 2 == 0) return true })
    return results }

let evenServings = problemFour();
console.log("Even Servings: ", evenServings)

//5. Create a function that will return dishes whose ingredients array is "tomato" and "cheese".
//Filter
function problemFive() {
    let results = dishes.filter(function(item){
        if (item.ingredients.includes("cheese") && item.ingredients.includes("tomato")) return true })
    return results }

let tomatoCheeseIngredients = problemFive()
console.log("Dishes with the ingredients of tomato and cheese: ", tomatoCheeseIngredients)
//6a. Create a function that will return an array of only the names of the cuisine types. Ie ['Italian', 'Mexican', ...]
//Map
function cuisineNames() {
    let result = dishes.map(function(element) {return element.cuisine })
    return result }

let cuisines = cuisineNames(); 
console.log("Types of cuisines: ", cuisines)
// BONUS: (come back to this after finishing all)
//6b. Use the filter method to eliminate duplicates, leaving only distinct values in the array
function removeDuplicates(array) {
    let result = array.filter(function(value,index) { 
        if (array.indexOf(value) === index ) return true })
    return result }

let cuisineTypes = removeDuplicates(cuisines);
console.log("Types of cuisines: ", cuisineTypes)
//7. Create a function that will append the cuisine type to the start of the dish's name. Ie, "Italian Pizza"
//Map 
function problemSeven() {
    let result = dishes.map(function(item) {return `${item.cuisine} ${item.name}`})
    return result }

let foodNames = problemSeven();
console.log("Cuisine Types and names: ", foodNames)

//8. Create a function that will append the cuisine type to the start of the dish's name. Then, return only the Vegetarian dish objects. 
// So this function should return objects 11-13 with their names changed to "Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"
//Map, Filter
function problemEight(arrayNames) {
    let result = arrayNames.filter(function(item) {
        if (item.includes("Vegetarian")) return true  })
    return result }

vegetarianNames = problemEight(foodNames)
console.log("Vegetarian Cuisines: ", vegetarianNames)
//BONUS
//9. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter
function problemNine() {
    let results = dishes.filter(function(item){
        if (item.ingredients.includes("chickpea")) return true })
    return results }

let foodsWithChickpeas = problemNine();
console.log("Dishes with chickpeas: ", foodsWithChickpeas)
//10. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.
function servingsArray(){
    let result = dishes.map(function(element) {return element.servings})
return result }

function problemTen(location) {
    let results = location.reduce(function(total,element) { return total + element })
return results }
let servings = servingsArray()
let totalServings = problemTen(servings);
console.log("Total Servings Count: ", totalServings)

//11. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.


// function cuisineByType(types) {
//     let newArray = [];
//     for (let index = 0; index <types.length; index ++) {
//         if ( newArray.indexOf(types[index] === -1))
//             newArray.push(types[index]) 
//         }
//     return newArray
// }

// let filtedByCuisines = cuisineByType(cuisines)
// console.log(filtedByCuisines)