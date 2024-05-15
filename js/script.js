
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
];

function myLoopFunction(pokemonList) {
document.write(`<p class="pokemonList"> Name: ${pokemonList.name} (Height: ${pokemonList.height}) (Type: ${pokemonList.types})</p><br>`);
}

pokemonList.forEach(myLoopFunction);










/*
pokemonList.forEach(function (pokemon) {
    return pokemonList.name + pokemonList.height + pokemonList.types;
});

document.write(pokemonList.forEach());

 for (let i = 0; i < pokemonList.length; i++) {

    if (pokemonList[i].height > 1.5) {
        document.write(`<p class="pokemonList"> Name: ${pokemonList[i].name} (Height: ${pokemonList[i].height}m) - Wow! That's big.</p><br>`);
    } else {
        document.write(`<p class="pokemonList">Name: ${pokemonList[i].name} (Height: ${pokemonList[i].height}m)</p><br>`);
    }
} */