import fetch from "node-fetch";

const API_URL = 'https://restcountries.com/v3/all';
fetch("https://restcountries.com/v3/all")
.then( res=> res.json())
.then( y=> {
  console.log(y[0].languages)
})