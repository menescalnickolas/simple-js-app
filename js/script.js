
let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: "Ponyta",
            height: 1,
            types: ["Fire"]
        },

        {
            name: "Rapidash",
            height: 1.7,
            types: ["Fire"]
        },

        {
            name: "Butterfree",
            height: 1.1,
            types: ["Bug", " Flying"]
        }
    ]

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    return {
        getAll: getAll,
        add: add
    }
})();

function myLoopFunction(pokemonList) {
    document.write(`<p class="pokemonList"> Name: ${pokemonList.name} (Height: ${pokemonList.height}) (Type: ${pokemonList.types})</p><br>`);
}

pokemonRepository.getAll(myLoopFunction);


