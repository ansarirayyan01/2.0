interface User{
    firstName: string,
    lastName: string,
    age: number,
    email?: string
}

// function isLegal(user: User) {
//     if (user.age > 18) {
//         console.log("U r legal");
//     }else{
//         console.log("U r not legal");
//     }
// }

function hello(user: User) {
    console.log(`Hello ${user.firstName} ${user.lastName} Hi there!! `);
}

hello({
    firstName: "Rayyan",
    lastName: "Ansari",
    age: 19,
})


// isLegal({
//     firstName: "Rayyan",
//     lastName: "Ansari",
//     age: 19,
// })