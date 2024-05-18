
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

    function showDetails(pokemon) {
        console.log(pokemon.name);
    }

    return {
        add: function add(pokemon) {
            pokemonList.push(pokemon);
        },
        getAll: function getAll() {
            return pokemonList;
        },

        addListItem: function addListItem(pokemon) {
            let pokemonButtonList = document.querySelector('.pokemonButtonList');
            let listItem = document.createElement('li');
            let button = document.createElement('button');
            button.innerText = pokemon.name;
            button.classList.add('buttonStyle');
            listItem.appendChild(button);
            pokemonButtonList.appendChild(listItem);
            button.addEventListener('click', function () {
                showDetails(pokemon);
            });
        }
    };

})();

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});

