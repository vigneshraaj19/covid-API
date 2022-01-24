//API TASK-03
//Declaring all the variable 
const head = document.querySelector(".header");
const displayResults = document.querySelector(".displayResults");
const button= document.querySelector("#btn");
button.addEventListener("click",function() {
//Fetching the details from the given API URL
const ApiURL = "https://covid-api.mmediagroup.fr/v1/cases";
    function renderResult(data) {
    const resultDiv = document.createElement("div");
    resultDiv.className = "card";
    resultDiv.innerHTML = `
        <p><b>Country Name:</b>${data.country}</p>
        <p><b>Confirmed:</b>${data.confirmed}</p>
        <p><b>Deaths:</b>${data.deaths}</p>
        <p><b>Continent:</b>${data.continent}</p>
        <p><b>Life Expectance:</b>${data.life_expectancy}</p>
        <p><b>Updated:</b>${data.updated}</p>
        `;
    displayResults.appendChild(resultDiv);
    }
//Providing conditions to display results
function renderAll(results) {
  displayResults.innerHTML = "";
  for(let countries in results){ 
    let data = results[countries];
    console.log(data.All);
    renderResult(data.All);
      }
  }
//Using async/await to get the results
    let func = async function(ApiURL){
        try{
        const response = await fetch(ApiURL);
        let results = await response.json();
        renderAll(results);
        }
        catch(error){
        console.log(error.message);
        alert("sorry try again!!!")
        }
    }  
    func(ApiURL);
    });