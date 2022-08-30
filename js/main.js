function updateUIPokedex(poke) {
    document.querySelector("#pokemon").textContent = poke.name
    document.querySelector("#imagen").setAttribute("src", poke.sprites.front_default)
}

// Ponemos la funcion async para que no pase a la siguiente linea 
async function getPokemon(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()
    // con return va para la fun getPokemon
    return data
}

async function init() {
    const firtPokemon = await getPokemon(4)
    updateUIPokedex(firtPokemon)
}

let search = document.querySelector("#search")
search.addEventListener("change", async() =>{
    // Busca con id o name .value
    const pokemon = await getPokemon(search.value)
    updateUIPokedex(pokemon)

})


init()