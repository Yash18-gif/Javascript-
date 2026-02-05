// const profile = {
//     fullName:"Sharadha Khapra",
//     followers: 480000,
//     posts: 125,
//     description: "Apna College | Ex- Microsoft"
// };

// console.log (profile);

//Practice question
// Get user to input a number using prompt(“Enter a number:”). Check if the number is a multiple of 5 or not.

// let guess = prompt("Enter a number ?");

// if(guess%5===0){
//     console.log("Number is multiple of 5");
// } else{
//     console.log("Number is not a multiple of 5");
// }

// Practice question
// Write a code which can give grades to students according to their scores:
// 90-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// let grade = prompt("Enter your grade?");
// if(grade>=90 && grade<=100){
//     console.log("A");
// }else if (grade>=70 && grade<=89){
//     console.log("B");
// }else if (grade>=60 && grade<=69){
//     console.log("C");
// }else if (grade>=50 && grade<=59){
//     console.log("D");
// }else{
//     console.log("F");
// }

// Qs1. Print all even numbers from 0 to 100.

// for(let i=0;i<=100;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

// Create a game where you start with any random game number. Ask the user to keep
// guessing the game number until the user enters correct value.

// let guess = prompt("Enter a number");
// let number = 30

// if(guess==number){
//     console.log("You WON!!!!");
// }else{
//     console.log("You lost");
// }

// Another way to do this:

// let guess = prompt("Enter a number");
// let number = 30

// while(guess!=number){
//     guess=prompt("You Enter wrong number");
// }

// console.log("Congratulations You WON!!!");

// Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending with the fullname length.

// let fullName = prompt("Enter your fullname?");

// let length = fullName.length;

// let username = "@"+fullName+length;
// console.log(username);

// let str = "hello";
// for(i=0;i<str.length;i++){
//     console.log(str[i]);
// }

// Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// Find the average marks of the entire class.

marks = [85,97,44,37,76,60];
let avg = 0
for(let idx = 0; idx<marks.length;idx++){
    avg += marks[idx]/6
}
console.log(avg);
