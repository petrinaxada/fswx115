//Pokemon Control
if(document.body.id == "pokePage"){
    document.querySelector("#submit").addEventListener("click", () => {
        if(document.querySelector("#pokeMain").childElementCount == 0){
            let loading = true;
            if(loading == true){
                document.querySelector("#submit").innerHTML = "Initiating Pokedex...";
            }
            axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then(results => {
                results.data.data.forEach(function(element, index){
                    
                    var entryDiv = document.createElement("div")
                    var pokeName = document.createElement("h2")
                    var pokeImg = document.createElement("pokeimg")
                    
                    pokeName.textContent = results.data.data[index].name
                    pokeImg.setAttribute("src", results.data.data[index].images.small)
                    document.querySelector("#pokeMain").appendChild(entryDiv)
                    entryDiv.appendChild(pokeName)
                    entryDiv.appendChild(pokeImg)
                    
                })
                loading = false;
                if(loading == false){
                    document.querySelector("#submit").innerHTML = "Get it...";
                }
            })
            .catch(err => console.log(err))
        }
    })
}

 // Digimon Control
if (document.body.id == "aniPage"){
    document.querySelector("#aniSubmit").addEventListener("click", () => {
        if (document.querySelector("#aniMain").childElementCount == 0){
            axios.get("https://anime-facts-rest-api.herokuapp.com/api/v1")
                .then(result =>{
                    result.data.forEach(function(element, index){

                        var entryDiv = document.createElement("div")
                        var digiName = document.createElement("h2")
                        var aniImg = document.createElement("img")

                        aniName.textContent = result.data[index].name
                        digiImg.setAttribute("src", result.data[index].image_url)
                        document.querySelector("#aniMain").appendChild(entryDiv)
                        entryDiv.appendChild(aniName)
                        entryDiv.appendChild(digiImg)   
                    })
                })
                .catch(err => console.log(err))
        }
    })
}
