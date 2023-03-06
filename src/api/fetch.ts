export const POKE_URL = 'https://pokeapi.co/api/v2/'

export const fetchDataPage = async (pageParam = 21, options = {}) => {
    const urls = Array.from({ length: pageParam }, (_, i) => POKE_URL + `pokemon/${i + 1}`)
    const results = await Promise.all(urls.map(url => fetch(url, options).then(res => res.json())))
    return results
  }

export const fetchPokemon = async (name: string) => {
  const response = await fetch(POKE_URL + `pokemon/${name}`)
  if (response.status === 404) return response.status
  else {
    const data = await response.json()
    return data
  }  
}

export const fetchSpecies = async (name: string) => {
  const response = await fetch(POKE_URL + `pokemon-species/${name}`)
  if (response.status === 404) return response.status
  else {
    const data = await response.json()
    return data
  }  
}


  