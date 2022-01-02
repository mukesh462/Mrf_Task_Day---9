
const getcountries=()=>{
    const xhr= new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType="json"
    xhr.onload=()=>{
        const countries = xhr.response;
// B.Get all the countries with a population of less 
// than 2 lakhs using Filter function
 const PeoplePoplution = countries
 .filter((pop)=>pop.population < 2_00_000)
 .map((contName=>contName.name.common))
        console.log(PeoplePoplution);


// e.  Print the country which uses US Dollars as currency.

const UsdCountries = countries
.filter((money)=> money.currencies && money.currencies.USD)
.map((counrty)=>counrty.name.common)

console.log(UsdCountries);


// c. Print the following details name, capital, flag using forEach function

const CountryDetails= countries.forEach((countries)=>
   console.log("Name:",countries.name.common,   "Capital:",countries.capital,   "Flag:",countries.flag))

// a. Get all the countries from Asia continent /region using Filter function

// Get all Country  population
const CountryRegion= countries

.filter((country)=> console.log("CountryRegion : ",country.region))

const CountryPopulation = countries
.map((pop)=>console.log(pop.population))






    }

}
getcountries()
