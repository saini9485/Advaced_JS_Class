 //query selectors
 var search = document.querySelector('.search');
 var btn1 = document.querySelector('.submitButton');
 let container = document.querySelector(".container")
 //event Listeners
 //event Listeners
 btn1.addEventListener('click',function(name){

     // console.log(name.value)

     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`)//fetching api data
     .then(response=>response.json())//text --> json
     .then(data=>{
         container.innerHTML = ""
         let food=data['meals']
         console.log(data);
         food.forEach(ele=>  {

             let {strMeal,strMealThumb,strInstructions}=ele

             let result= `<div>
                 <h1>${strMeal}</h1>
                 <img src="${strMealThumb}" alt="" >
                 <h2>${strInstructions}</h2>
                 </div> `
             container.innerHTML += result
         })
     }).catch(err=>alert("invalid city name"))

 })