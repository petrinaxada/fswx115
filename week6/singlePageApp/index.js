// "https://pokeapi.co/api/v2/pokemon"
 function pokeStuff() {
    try{
        const newConst = [] 
        const nameUrl = await axios.get("https://pokeapi.co/api/v2/pokemon/") 
        const results = await nameUrl
        for (i = 0; i < 3; i++) {
            newConst.push(axios.get(result.data.results[i].url))
        }
        Promise.all(newConst)
            .then(res => {
                    for (i = 0; i < res.length; i++) {
                        var pokeMain = document.querySelector("#pokeStats")
                        var pokeName = document.createElement("h2")
                        var pokeMon = document.createElement("img")
                        
                        pokeName.textContent = res[i].data.name
                        pokeMon.src = res[i].data.sprites.front_default
                        
                        pokeMain.appendChild(pokeName)
                        
                    
                        for (index = 0; index < res[i].data.abilities.length; index++){
                            var pokeAbilities = document.createElement("h3")
                            
                            pokeAbilities.textContent = res[i].data.abilities[index].ability.name
                            
                            pokeMain.appendChild(pokeAbilities)
                        }
                        
                        pokeMain.appendChild(pokeMon)
                    }      
                
            })
            .catch(err => console.log(err))
    }    
    catch(err){
        console.log(err)
    }
        
}
pokeStuff()

///ref:e.yarborough&d.caviness