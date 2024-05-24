
let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            let showModal = document.querySelector('#modalContainer');

            /*Clear All Existing Modal Content*/
            showModal.innerText = '';

            /*Create Modal Div for Content */
            let modalDetails = document.createElement('div');
            modalDetails.classList.add('modal-whitebox');

            /*Create Close Button*/
            let closeButtonElement = document.createElement('button');
            closeButtonElement.innerText = 'X';
            closeButtonElement.classList.add('modal-close');
            closeButtonElement.addEventListener('click', hideModal);

            /*Title Element Inside Modal*/
            let pokemonTitle = document.createElement('h2');
            pokemonTitle.classList.add('pokemonTitle');
            pokemonTitle.innerText = pokemon.name;

            /* Capitalize First Letter of Pokemon Name */
            pokemonTitle.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

            /*Pokemon Information in Modal*/
            let heightElement = document.createElement('p');
            heightElement.innerText = 'Height: ' + pokemon.height;

            let weightElement = document.createElement('p');
            weightElement.innerHTML = 'Weight: ' + pokemon.weight;

    

            /*Insert Image to Modal*/
            let imageElement = document.createElement('img');
            imageElement.classList.add('image');
            imageElement.src = pokemon.imageUrl;

            modalDetails.appendChild(closeButtonElement);
            modalDetails.appendChild(pokemonTitle);
            modalDetails.appendChild(imageElement);
            modalDetails.appendChild(heightElement);
            modalDetails.appendChild(weightElement);

            for (let i = 0; i < pokemon.types.length; i++) {
                let type = document.createElement('p');
                type.classList.add('type');
                type.innerHTML = 'Types: ' + pokemon.types[i].type.name;
                modalDetails.appendChild(type);
            }

            showModal.appendChild(modalDetails);

            showModal.classList.add('is-visible');

            showModal.addEventListener('click', (e) => {
                let target = e.target;
                if (target === showModal) {
                    hideModal();
                }
            });

        });
    }

    /*Hide Modal Function*/
    function hideModal() {
        let showModal = document.querySelector('#modalContainer');
        showModal.classList.remove('is-visible');
    }

    function addListItem(pokemon) {
        let pokemonButtonList = document.querySelector('.pokemonButtonList');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        button.classList.add('buttonStyle');
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



