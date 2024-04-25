
//d)print the total population of country using reduce function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function() {
    var result = JSON.parse(request.response);
    
    // Use reduce to calculate the total population
    var totalPopulation = result.reduce((accumulator, country) => {
        // Add the population of the current country to the accumulator
        return accumulator + country.population;
    }, 0); // Start the accumulator with initial value 0
    
    console.log("Total population of all countries:", totalPopulation);
}