function square(n) {
	return n * n;
}

function cube(n) {
	return n * n *n;
}
function Sum(a, b, fn) {
	let num1 = fn(a);
	let num2 = fn(b);

	return num1 + num2;
}

console.log(Sum(2, 2, cube));