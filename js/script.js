
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
    document.write("<p class='pokemonList'>" + pokemon.name  + "<br> Height: " + pokemon.height + "<br> Type: " + pokemon.types + "<br></p>");
});
