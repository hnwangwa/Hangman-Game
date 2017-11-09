var dogs = {

	raining: true,
	noise: "Woof!",
	makeNoise: function(noise){
		if (this.raining === true) {
			console.log(this.noise);
		}
		
	}
};


var cats = {

	raining: false,
	noise: "Meow!",
	makeNoise: function(noise){
		if (this.raining === false) {
			console.log(this.noise);
		}

	}
}
console.log("I'm working!");

cats.makeNoise();
cats.raining = true;
dogs.makeNoise();

var massHysteria = function(dogs,cats) {
	if (dogs.raining === true && cats.raining === true) {
		console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
	}
}
massHysteria(dogs, cats);