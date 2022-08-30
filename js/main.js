function updateUIPokedex(poke) {
    document.querySelector("#pokemon").textContent = poke.name
    document.querySelector("#imagen").setAttribute("src", poke.sprites.front_default)
}

// Ponemos la funcion async para que no pase a la siguiente linea 
async function getPokemon(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()
    // console.log(data)
    // con este return va para la fun getPokemon
    return data
}

async function init() {
    let fecha = new Date()
    let dia = fecha.getDay()
    let mes = fecha.getMonth()
    let dia_mes = dia + "-" + mes 

    let num = localStorage.setItem("numero") || 0

    if(num == 0 ) {

        num = Math.ceil(Math.random() * 100)
        localStorage.setItem("numero", num)
    }
    console.log(num)
    const firtPokemon = await getPokemon(num)
    updateUIPokedex(firtPokemon)

}

let search = document.querySelector("#search")
search.addEventListener("change", async() =>{
    // Con esto lo busca con id o name .value
    const pokemon = await getPokemon(search.value)
    updateUIPokedex(pokemon)

})


init()