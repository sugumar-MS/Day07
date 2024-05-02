
//c)print the following details name,capital,flag using for Eachfunction

var requestt = new XMLHttpRequest();
requestt.open("GET","https://restcountries.com/v3.1/all");
requestt.send();
requestt.onload=function(){
    var resultt=JSON.parse(requestt.response);
   resultt.forEach(element => {
    console.log(element.name);
        console.log(element.capital);
        console.log(element.flag); 

   });
}