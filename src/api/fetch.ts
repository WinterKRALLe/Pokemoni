export const POKE_URL = 'https://pokeapi.co/api/v2/'



// const fetchPokemonData = async () => {
//     const urls = await fetchPokemons();
//     const promises = urls.map(url => fetch(url).then(response => response.json()));
//     const pokemonData = await Promise.all(promises);

//     return pokemonData.map((pokemon) => ({
//         name: pokemon.name,
//         image: pokemon.sprites.other.dream_world.front_default,
//         type: pokemon.types[0].type.name,
//     }));
// };




export const fetchDataPage = async (pageParam = 21, options = {}) => {
    const urls = Array.from({ length: pageParam }, (_, i) => POKE_URL + `pokemon/${i + 1}`)
    const results = await Promise.all(urls.map(url => fetch(url, options).then(res => res.json())))
    return results
  }
  