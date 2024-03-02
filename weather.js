// <!-- * @name: Assignement1
// * @Course Code: SODV1201
// * @class: Software Development Diploma program.
// * @author: ARYAN KUMAR. 
// & @studentid: 449776-->


// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (parseFloat(fahrenheit) - 32) * (5/9);
}

// Function to convert Celsius to Kelvin
function celsiusToKelvin(celsius) {
    return parseFloat(celsius) + 273.15;
}

// Function to display the results
function displayResults(celsius, kelvin) {
    document.getElementById("celsiusOutput").textContent = celsius.toFixed(2) + " °C";
    document.getElementById("kelvinOutput").textContent = kelvin.toFixed(2) + " K";
}

// Function for the conversion
function convert() {
    var fahrenheitInput = document.getElementById('fahrenheitInput').value;
    if (!isNaN(fahrenheitInput)) {
        var celsius = fahrenheitToCelsius(fahrenheitInput);
        var kelvin = celsiusToKelvin(celsius);
        displayResults(celsius, kelvin);
    } else {
        alert("Please enter a valid temperature in Fahrenheit.");
    }
}


//to display current date
const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('currentDate').textContent = currentDate.toLocaleDateString('en-US', options);