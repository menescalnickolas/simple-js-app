
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

    return {
        add: function add(pokemon) {
            pokemonList.push(pokemon);
        },
        getAll: function getAll() {
            return pokemonList;
        },
    };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
    document.write("<div class='pokemonList'>" + "<h2 class='pokemonName'>" + pokemon.name + "</h2>" + "<br> <h3 class='pokemonHeight'> Height: " + pokemon.height + "</h3><br> Type: " + pokemon.types + "<br></div>");
});
