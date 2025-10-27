/*let firstName = "Vikash";
let age = 25;
let isMarried = false;

console.log("My name is "+firstName+" and age is "+age);*/

//console.log("Hello, How are You!");

/*let gender = 'female';
if(gender == 'male') {
     
    console.log("Hello Uncle!");
}
else{ 
       console.log("Hello Aunty!");
}*/

/*let i = 0;

for (i = 0; i<=1000; i++) {

    console.log(i);
}
*/
 
/*for (let i = 0; i < num.length; i++) {
    if(num[i] % 2 == 0) {
        console.log(num[i]);       
    }
}*/

//Print the biggest number in a array
/*let maxNum = num[0];

for (let i =0; i < num.length; i++) {

    if (num[i] > maxNum) {

        maxNum = num[i];
    }
}
console.log(maxNum);*/

//Print male's firstName in a object
/*const allUsers = [{
    firstName: 'Sushil',
    gender: 'Male',
}, {
    firstName: 'Vikash',
    gender: 'Male',
}, {
    firstName: 'Mamta',
    gender: 'Female'
}]

for (let i = 0; i < allUsers.length; i++) {

    if (allUsers[i]["gender"] == 'Male') {

        console.log(allUsers[i]["firstName"]);
    }
}*/
 //Print reverse array
/*const num = [10, 13, 18, 20, 28, 43, 71, 3, 2, 48, 98, 100];

for (let i = num.length - 1; i >= 0; i--) {

    console.log(num[i]);
}*/
/*
let sum = 0;

for (let i = 0; i < 10000000000000; i++) {
    sum = sum + 1;
}

console.log(sum);*/
let result;
function sum(a, b) {
     result = a + b;

    return result;
}
    sum(2,3);
console.log(result);