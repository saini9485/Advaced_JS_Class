 //query selectors
 var input = document.querySelector('.search');
 var btn1 = document.querySelector('.submitButton');
 let container = document.querySelector(".container")
 btn1.addEventListener('click',function(event){
     // console.log(name.value)
     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)//fetching api data
     .then(response=>response.json())//text --> json
     .then(data=>{
         container.innerHTML = ""
         let food=data['meals']
         //console.log(data);
         food.forEach(ele=>  {

             let {strMeal,strMealThumb,strInstructions}=ele

             let result= `<div>
                 <h1>${strMeal}</h1>
                 <img src="${strMealThumb}" alt="" >
                 <h2>${strInstructions}</h2>
                 </div> `
             container.innerHTML += result
         })
     }).catch(err=>alert("invalid  name"))

 })