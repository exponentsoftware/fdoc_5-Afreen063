## DAY 5
1. Use the countries API to fetch data about countries. (5 pt)

      ```js
      const API_URL = 'https://restcountries.com/v3/all'
      ```

    - How many languages are there in the countries API
    - Find the 15 most spoken languages

    ```sh
    [
    {language: "English", countries: 91}
    {language: "French", countries: 45}
    {language: "Arabic", countries: 25}
    {language: "Spanish", countries: 24}
    {language: "Portuguese", countries: 9}
    {language: "Russian", countries: 9}
    {language: "Dutch", countries: 8}
    {language: "German", countries: 7}
    {language: "Chinese", countries: 5}
    {language: "Serbian", countries: 4}
    {language: "Swahili", countries: 4}
    {language: "Italian", countries: 4}
    {language: "Swedish", countries: 3}
    {language: "Albanian", countries: 3}
    {language: "Croatian", countries: 3}
    ]
    ```

    - Find the 10 most largest countries

    ```sh
    [
    {country: "Russian Federation", area: 17124442}
    {country: "Antarctica", area: 14000000}
    {country: "Canada", area: 9984670}
    {country: "China", area: 9640011}
    {country: "United States of America", area: 9629091}
    {country: "Brazil", area: 8515767}
    {country: "Australia", area: 7692024}
    {country: "India", area: 3287590}
    {country: "Argentina", area: 2780400}
    {country: "Kazakhstan", area: 2724900}
    ]
    ```

2. Explain the following questions in your own words

What is the difference between forEach, map, filter and reduce ? Explain these using your own words
      forEach()           vs                 map()
1) dont create new array                      create new array
2) forEach() return undefined                 return new array according to the callback function
3)not executed on empty array                  does not change original array
4)cannot apply chain technique                 as it return new array we can apply chain technique

     map()                     vs                                     filter()
1)the lwngth of new array is always equal to the original array       the length of new array can be less or equal 
                                                                       than the original array
2)arr.map((e)=>{ if(e==8) return}                                        arr.filter((e)=>{return e==8} 
  output [undefined undefined 8 8 8]                                              output [8 8 8]

      filter()                                        vs                               reduce()
1)  The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.
2) syntax => var new_array = arr.filter(function callback(element, index, array) {
    // Return true or false
}[, thisArg])
3)const numbers = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]

reduce()
1)The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.
2)const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); // 10

sum can also be array  object 
var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

var petCounts = pets.reduce(function(obj, pet){
    if (!obj[pet]) {
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj;
}, {});

console.log(petCounts); 

/*
Output:
 { 
    dog: 2, 
    chicken: 3, 
    cat: 1, 
    rabbit: 1 
 }
 */



Explain the difference between function declaration and arrow function ?


Explain the difference between find and findIndex ?
If you like to filter out one object element in an array which method do you like to use: filter or find ? Explain
Explain the difference of var, let and const when we declare a variable ?
