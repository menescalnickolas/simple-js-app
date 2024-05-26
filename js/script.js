
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
        let modalHeader = $('.modal-header');

        modalTitle.empty();
        modalBody.empty();

        /*Name Element in Modal*/ 
        let nameElement = $("<h1>" + pokemon.name + "</h1>")

        /*Img Element in Modal*/
        let imageElementFront = $('<img class="modal-img" style="width:50%">');
        imageElementFront.attr("src", pokemon.imageUrlFront);
        let imageElementBack = $('<img class="modal-img" style="width:50%">');
        imageElementBack.attr("src", pokemon.imageUrlBack);

        /*Height Element in Modal*/
        let heightElement = $("<p>" + "Height: " + pokemon.height + "</p>");

        /*Weight Element in Modal*/
        let weightElement = $("<p>" + "Weight: " + pokemon.weight + "</p>");

        /*Types Element in Modal*/
        let typesElement = $("<p>" + "Types: " + pokemon.types + "</p>");

        /*Abilities Element in Modal*/
        let abilitiesElement = $("<p>" + "Abilities: " + pokemon.abilities + "</p>");

        modalTitle.append(nameElement);
        modalBody.append(imageElementFront);
        modalBody.append(imageElementBack);
        modalBody.append(heightElement);
        modalBody.append(weightElement);
        modalBody.append(typesElement);
        modalBody.append(abilitiesElement);
        
    }

    /*
    function showDetails(pokemon) {
        loadDetails(pokemon).then(

    

            showModal.appendChild(modalDetails);

            showModal.classList.add('is-visible');

            showModal.addEventListener('click', (e) => {
                let target = e.target;
                if (target === showModal) {
                    hideModal();
                }
            });

        });
    } */

    function addListItem(pokemon) {
        let pokemonButtonList = document.querySelector('.pokemonButtonList');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        button.classList.add('btn');
        button.classList.add('btn-primary');
        listItem.classList.add('list-group-item');
        listItem.appendChild(button);
        pokemonButtonList.appendChild(listItem);
        button.addEventListener('click', function () {
            showDetails(pokemon);
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
        })
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
        }).catch(function (e) {
            console.error(e);
        });
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails
    };
})();

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});



