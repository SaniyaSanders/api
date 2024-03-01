let buttonTV = document.querySelector(".buttonTV");
let inputTV = document.querySelector(".inputTV");
let resultsTV = document.querySelector(".resultsTV");

let detailPoke;
let effect;

buttonTV.onclick = function(){
let result = inputTV.value;
  console.log(result);
    // Use str;ing concatenation to include the search term
let apiURL =`https://api.tvmaze.com/search/shows?q=${result}`;
console.log(apiURL);



    fetch(apiURL)

        .then(function(response) {
            return response.json();

        })

        .then(function(tvData) {
            var picURL = tvData[0].show.image.medium;
            var tvInfo = tvData[0].show.summary;
            resultsTV.insertAdjacentHTML("afterbegin", 
              
            `<img src= ${picURL} />
              <h1>${tvInfo}</h1>
              
              
              
              `);
        });

};


