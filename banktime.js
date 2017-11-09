var fs = require("fs");
var command = parseFloat(process.argv[2]);
var total = 0;
console.log(command);

if (command === "total") {
	fs.readFile("bank.txt", "utf8", function(error, data) {
		if (error) {
			return console.log(error);
		}

		var dataArr = data.split(", ");
		for (var i = 0; i < dataArr.length; i++) {
			total += parseFloat(dataArr[i]);
			
		}
		console.log("You have" + total);
	});
}