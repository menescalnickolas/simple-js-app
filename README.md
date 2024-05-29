Pokédex App
A simple Pokédex application built using HTML, CSS, JavaScript, and Bootstrap. The app fetches data from the PokéAPI to display a list of Pokémon, allows users to search for specific Pokémon, and view detailed information in a modal.

    Table of Contents
Features
Installation
Usage
Code Overview
HTML Structure
JavaScript Functionality
License

    Features
Displays a list of Pokémon with their names.
Allows searching for Pokémon by name.
Shows detailed information about a selected Pokémon in a modal, including its image, height, weight, types, and abilities.
Responsive layout using Bootstrap grid system.
Installation
Clone the repository:


    Usage
The homepage displays a list of Pokémon fetched from the PokéAPI.
Use the search bar in the navigation to filter Pokémon by name.
Click on a Pokémon name to view detailed information in a modal.

    Code Overview
        HTML Structure
The HTML structure includes a navigation bar with a search form, a container for the Pokémon list, and a modal for displaying detailed information.


        JavaScript Functionality
The JavaScript code handles fetching data from the PokéAPI, managing the Pokémon list, filtering Pokémon based on the search query, and displaying detailed information in a modal.

    Main Functions:
add(pokemon): Adds a Pokémon to the list.
getAll(): Returns all Pokémon in the list.
loadList(): Fetches Pokémon data from the API.
loadDetails(pokemon): Fetches detailed information for a Pokémon.
addListItem(pokemon): Creates and adds a list item for a Pokémon.
showModal(pokemon): Displays detailed Pokémon information in a modal.
filterPokemon(query): Filters the Pokémon list based on the search query.
Event Listeners:
An event listener on the search form to filter Pokémon based on user input.