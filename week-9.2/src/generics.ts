function getFirstElement<T>(arr: T[]): T {
	return arr[0]!;
}

const value = getFirstElement<string>(["Vikash", "Singh"]);
console.log(value.toUpperCase());