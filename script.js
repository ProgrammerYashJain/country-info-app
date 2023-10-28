const input = document.querySelector(".country-name");
const button = document.querySelector(".search-btn");
const show_img = document.querySelector("#show-img");
const d_country = document.querySelectorAll(".d-country");
const error = document.querySelector(".error");

// adding async function with AddEventListner on button

button.addEventListener('click',async(er)=>{
    try {
    er.preventDefault();
    let country_name = input.value;
    let get_url = await fetch(`https://restcountries.com/v3.1/name/${country_name}?fullText=true`);
    data = await get_url.json();
    if(input.value === ""){
        error.innerHTML =  `<h3 class="h3-error">Enter a country name..</h3>`;
        setTimeout(()=>{
            error.innerHTML = "";
        },2000)
    }else{
        show_img.src = data[0].flags.png;
        d_country[0].innerHTML = `<h3 id="d-text">Country is : </h3>${data[0].name.common}`
        d_country[1].innerHTML = `<h3 id="d-text">Population is : </h3>${data[0].population}`;
        d_country[2].innerHTML = `<h3 id="d-text">Capital is : </h3>${data[0].capital}`;
        d_country[3].innerHTML = `<h3 id="d-text">Currency is : </h3>${Object.keys(data[0].currencies)[0]}`;
        d_country[4].innerHTML = `<h3 id="d-text">Continent is : </h3>${data[0].continents}`;
        setTimeout(()=>{
            input.value = "";
        },2000)
    }
} catch (e) {
    error.innerHTML =  `<h3 class="h3-error">${new Error("Country name is invaild / You have entered numbers...")}</h3>`;
    setTimeout(()=>{
        error.innerHTML = "";
        input.value = "";
        show_img.src = "";
        d_country[0].innerHTML = "";
        d_country[1].innerHTML = "";
        d_country[2].innerHTML = "";
        d_country[3].innerHTML = "";
        d_country[4].innerHTML = "";
    },4500)
}

})