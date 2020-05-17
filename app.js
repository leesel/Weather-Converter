//today's forecast in kelvin
const kelvin = 0;
//celsius is 273 degrees less than kelvin
var celsius = kelvin - 273;
//converting to fahrenheit
var fahrenheit = celsius * (9/5) + 32;
//When you convert from Celsius to Fahrenheit, you often get a decimal number. we will use math.floor method to round down
fahrenheit = Math.floor(celsius * (9/5) + 32);

//converting celsius to newton scale and rounding down
var newton = Math.floor(celsius * (33/100));


//logs weather in fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//logs weather in celsius
console.log(`The temperature is ${celsius} degrees Celsius.`);
//logs weather in kelvin
console.log(`The temperature is ${kelvin} degrees Kelvin.`);
//logs weather in newton
console.log(`The temperature is ${newton} degrees Newton.`);
