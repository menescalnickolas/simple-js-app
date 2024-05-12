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
        types: ["Bug", "Flying"]
        types: ["Bug", " Flying"]
    }
];

for (let i = 0; i < pokemonList.length; i++) {
    document.write("<br> Name: " + pokemonList[i].name + "<br> Height: " + pokemonList[i].height + "<br> Type: " + pokemonList[i].types + "<br>");

    if (pokemonList.height > 1.5) {
        document.write(pokemonList[i].height + "- Wow! That's big.")
    }
];