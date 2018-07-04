function colorchange () {
	//gets the number value of the day of the week; 0 through 6
	let currentDay: number = new Date().getDay();
	//find all elements with header 1 tag
	let elements: NodeListOf<HTMLHeadingElement> = document.querySelectorAll('h1');
	let dayColors: string[] = [
		'#cc334d',  //sunday
		'#ad33cc',  //monday
		'#337fcc',  //tuesday
		'#33ccc3',  //wednesday
		'#33cc57',  //thursday
		'#c7cc33',  //friday
		'#cc5733'   //saturday
	];

	//changes color for each h1 tag on the page
	[0].slice.call(elements).forEach(function (element) {
		element.style.color = dayColors[currentDay];
	})

};

//module.exports = colorchange