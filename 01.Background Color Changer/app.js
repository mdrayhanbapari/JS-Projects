const button = document.querySelector('button');
const h3 = document.querySelector('h3');
const hexContainer = document.querySelector('.hexContainer');

const changeBackgroundColor = () => {
	// Generate random RGB values between 0 and 255
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	// Set background color of the webpage to the generated color
	document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

	generateHexCode(red, green, blue);
};

// Function to generate the hex code for the RGB color and set it as the text of the h2 element
const generateHexCode = (red, green, blue) => {
	const hexColor =
		'#' +
		componentToHex(red) +
		componentToHex(green) +
		componentToHex(blue);
	h3.innerText = hexColor;

	hexContainer.addEventListener('click', () =>
		copyColor(hexContainer, hexColor)
	);
};

// Function to convert a decimal number to a 2-digit hex string
const componentToHex = (c) => {
	const hex = c.toString(16);
	return hex.length == 1 ? '0' + hex : hex;
};

const copyColor = (elem, value) => {
	colorElement = elem.querySelector('h3');
	navigator.clipboard.writeText(value).then(() => {
		colorElement.innerText = 'Copied!';
		colorElement.style.color =  '#22C55E';
	});
};

button.addEventListener('click', changeBackgroundColor);
