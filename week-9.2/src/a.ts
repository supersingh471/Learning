//const x: number = 1;
//console.log(x);

/*function greet(firstname: string) {
	console.log("Hello "+firstname);
}

greet("Vikash");*/

/*function sum(a: number, b: number) {
	console.log(a+b);
}
sum(2,55644554545);*/

/*function isLegal(age: number) {
	if(age > 18) {
		return true
	} else {
		return false
	}
}

const value = isLegal(0);
console.log(value);*/

/*const greet = (name: string) => `Hello, ${name}!`;
console.log(greet("vikash"));*/

interface User {
	firstName: string,
	lastName: string,
	age: number
}
function isLegal(user: User) {
	if(user.age > 18) {
		return true;
	}
	else {
		return false;
	}
}

isLegal({
	firstName: "Vikash",
	lastName: "Singh",
	age: 24
})