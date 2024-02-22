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
            resultsTV.insertAdjacentHTML("afterbegin", `<img src= ${picURL} />`);
        });

};


// POKE

let buttonPoke = document.querySelector(".buttonPoke");
let inputPoke = document.querySelector(".inputPoke");
let resultsPoke = document.querySelector(".resultsPoke");



buttonPoke.onclick = function(){
let result = inputPoke.value;
   result = result.toLowerCase();
  console.log(result);
  
let apiURL =`https://pokeapi.co/api/v2/pokemon/${result}`;
  
console.log(apiURL);
    fetch(apiURL)

        .then(function(response) {
            return response.json();
        })

        .then(function(pokeData) {
            let picURL = pokeData.sprites.other.dream_world.front_default;
            let name = pokeData.name
            let weight = pokeData.weight
          detailPoke = pokeData.abilities[0].ability.url
           console.log(detailPoke); 
          console.log(picURL);
          
            resultsPoke.insertAdjacentHTML("afterbegin",                                  
                        
          `
          <div class="card">
            <div class="top">
              <p class="name">${name}</p>
              <p class="hp">110 HP</p>
            </div>
          <img class="cardImg" src= ${picURL} >
          
          <div class="scrollbar" id="scrollbar-custom">
	       <div class="detail"></div>
          </div>
          </div>
          `
  );
dog();
         
        });


};


function dog() {

  let detail = document.querySelector(".detail");
  
fetch(detailPoke)

        .then(function(response) {
            return response.json();
        })

        .then(function(pokeDataa) {
           x = pokeDataa.effect_entries[1].effect;
            console.log("hi" + x);
          detail.insertAdjacentHTML("afterbegin", `${x}` ); 
        });
}




