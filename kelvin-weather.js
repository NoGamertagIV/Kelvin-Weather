const kelvin = 250
// the forecast today is 293 kelvin //
const Celsius = kelvin - 273;
// celsius is 20 degrees //
let fahrenheit = Celsius * (9/5) + 32;
// comment //
fahrenheit = Math.floor(fahrenheit);
// Round down the decimal //
console.log(`The tempature is ${fahrenheit} degrees Fahrenheit`)
// newton scale
let newton = Celsius * (33 / 100);
// Round down
newton = Math.floor(newton);
//Round down
console.log(`The tempature is ${newton} degrees Newton`)