var num1 = parseFloat(process.argv[2]);
var num2 = parseFloat(process.argv[3]);

if (num1 === num2) {
	console.log(true);
}
else {
	console.log(false);
}

if (num1 %7 === 0 && num2 %7 === 0) {
	console.log("Both Divisible by 7!")
}
else {
	console.log("None divisible by 7!")
}

