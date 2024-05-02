
//e)print the country which uses US dollar as currency

var req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v2/all");
req.send();
req.onload = function() {
    var res = JSON.parse(req.response);
    var currency = res.filter(country => {
        // Iterate through currencies of the country
        for (let i = 0; i < country.currencies.length; i++) {
            if (country.currencies[i].code === "USD") {
                return true; // Return true if US dollar is found
            }
        }
        return false; // Return false if US dollar is not found
    });
    console.log("Countries that use US dollar as currency:", currency);
}