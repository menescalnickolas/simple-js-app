
let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    function showModal(pokemon) {
        let modalBody = $('.modal-body');
        let modalTitle = $('.modal-title');

        modalTitle.empty();
        modalBody.empty();

        /* Name Element in Modal */
        let nameElement = $("<h1>" + pokemon.name + "</h1>");

        /* Img Element in Modal */
        let imageElementFront = $('<img class="modal-img" style="width:50%">');
        imageElementFront.attr("src", pokemon.imageUrl);
        
        /* Height Element in Modal */
        let heightElement = $("<p>" + "Height: " + pokemon.height + "</p>");

        /* Weight Element in Modal */
        let weightElement = $("<p>" + "Weight: " + pokemon.weight + "</p>");

        /* Types Element in Modal */
        let types = pokemon.types.map(typeInfo => typeInfo.type.name).join(', ');
        let typesElement = $("<p>" + "Types: " + types + "</p>");

        /* Abilities Element in Modal */
        let abilities = pokemon.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ');
        let abilitiesElement = $("<p>" + "Abilities: " + abilities + "</p>");

        modalTitle.append(nameElement);
        modalBody.append(imageElementFront);
        modalBody.append(heightElement);
        modalBody.append(weightElement);
        modalBody.append(typesElement);
        modalBody.append(abilitiesElement);

        $('#exampleModal').modal('show'); // Ensure modal is shown
    }

    function addListItem(pokemon) {
        let pokemonButtonList = document.querySelector('.pokemonButtonList .row');
        let column = document.createElement('div'); // Use 'div' for the column
        let listItem = document.createElement('div'); // Use 'div' for the list item
        let button = document.createElement('button');
        
        button.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        button.classList.add('btn', 'btn-primary', 'btn-block');
        listItem.classList.add('list-group-item'); // Add Bootstrap column class
        listItem.appendChild(button);

        column.classList.add('col-4'); // Add Bootstrap column class
        column.appendChild(listItem);
    
        pokemonButtonList.appendChild(column);
        
        button.addEventListener('click', function () {
            loadDetails(pokemon).then(function () {
                showModal(pokemon);
            });
        });
        }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        });
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
            item.weight = details.weight;
            item.abilities = details.abilities;
        }).catch(function (e) {
            console.error(e);
        });
    }

    function filterPokemon(query) {
        let filteredList = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(query.toLowerCase()));
        let pokemonButtonList = document.querySelector('.pokemonButtonList ul');
        pokemonButtonList.innerHTML = ''; // Clear the existing list
        filteredList.forEach(function (pokemon) {
            addListItem(pokemon);
        });
    }


    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        filterPokemon: filterPokemon
    };
})();

document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    let query = document.getElementById('search-input').value;
    pokemonRepository.filterPokemon(query);
});

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

