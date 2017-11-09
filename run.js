var mycoolbands = require('./bands.js')

//console.log('mycoolbands', mycoolbands['punk']);

for (var i in mycoolbands) {
	// console.log('THIS IS I', i)
	//console.log('THIS IS mycoolbands[i]', mycoolbands[i])

	// console.log('my ' + i + ' band is ' +  mycoolbands[i])

	console.log('A ' + i + ' band is ' + mycoolbands[i]); 
}
 