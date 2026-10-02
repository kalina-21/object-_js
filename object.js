// ========================================
// 1. OBJECT
// ========================================

const person = {
    name: "Kalkidan",
    age: 21,
    city: "Addis Ababa"
};


// ========================================
// 2. ADD NEW DATA TO AN OBJECT
// ========================================

person.country = "Ethiopia";


// ========================================
// 3. UPDATE DATA IN AN OBJECT
// ========================================

person.age = 22;


// ========================================
// 4. DELETE DATA FROM AN OBJECT
// ========================================

delete person.city;


// Display the whole object
console.log(person);


// ========================================
// 5. ACCESS A SPECIFIC VALUE
// ========================================

console.log(person.name);


// ========================================
// 6. LOOP THROUGH AN OBJECT
// ========================================

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}


// ========================================
// 7. ARRAY
// ========================================

const fruits = ["tomato", "banana", "apple"];


// ========================================
// 8. ADD ELEMENT TO THE END
// ========================================

fruits.push("papaya");


// ========================================
// 9. ADD ELEMENT TO THE BEGINNING
// ========================================

fruits.unshift("orange");


// ========================================
// 10. REMOVE ELEMENT FROM THE END
// ========================================

fruits.pop();


// ========================================
// 11. REMOVE ELEMENT FROM THE BEGINNING
// ========================================

fruits.shift();


// ========================================
// 12. FIND ARRAY LENGTH
// ========================================

console.log(fruits.length);


// ========================================
// 13. ACCESS A SPECIFIC ARRAY ELEMENT
// ========================================

console.log(fruits[2]);


// ========================================
// 14. LOOP THROUGH AN ARRAY
// ========================================

for (let fruit of fruits) {
    console.log(fruit);
}
