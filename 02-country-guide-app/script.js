let searchBtn = document.getElementById("search-btn");
let countryInput = document.getElementById("country-input");
let result = document.getElementById("result");

searchBtn.addEventListener("click", () => {
  let countryName = countryInput.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName.toLowerCase()}?fullText=true`;
  // console.log(finalURL);
  fetch(finalURL)
    .then((response) => {
      // console.log(response.json());
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .then((data) => {
      result.innerHTML = `
      <img src="${data[0].flags.svg}" class="flag-img" alt="Country flag" />
      <h2>${data[0].name.common}</h2>
      <div class="wrapper">
        <div class="data-wrapper">
          <h4>Capital:</h4>
          <span>${data[0].capital[0]}</span>
        </div>
      </div>
      <div class="data-wrapper">
      <div class="wrapper">
          <h4>Continent:</h4>
          <span>${data[0].continents[0]}</span>
        </div>
      </div>
      <div class="wrapper">
        <div class="data-wrapper">
          <h4>Population:</h4>
          <span>${data[0].population}</span>
        </div>
      </div>
      <div class="wrapper">
        <div class="data-wrapper">
          <h4>Currency:</h4>
          <span>${
            data[0].currencies[Object.keys(data[0].currencies)].name
          } - ${Object.keys(data[0].currencies)}(${
        data[0].currencies[Object.keys(data[0].currencies)].symbol
      })</span>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
          <h4>Common Languages:</h4>
          <span>${Object.values(data[0].languages)
            .toString()
            .split(",")
            .join(", ")}</span>
        </div>
      </div>
      </div>
      `;
    })
    .catch(() => {
      if (countryName.length === 0) {
        result.innerHTML = `<h3>The input field cannot be empty.</h3>`;
      } else {
        result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
      }
    });
});
