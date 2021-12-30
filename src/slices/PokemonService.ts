const Dex = require("pokeapi-js-wrapper")

const IMAGE_URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/{POKEMON_NUMBER}.png"
const POKEDEX = new Dex.Pokedex()

export const getPokemon = (number : number) : Promise<any> => {
    return POKEDEX.getPokemonByName(number)
        .then((pokemon : any) => {
            return {
                number: number,
                name: pokemon.name,
                types: pokemon.types.map((t : any) => t.type.name),
                weight: pokemon.weight,
                images: {
                    default: IMAGE_URL.replace("{POKEMON_NUMBER}",  ('000' + number).substr(-3)),
                    front: pokemon.sprites.front_default,
                    back: pokemon.sprites.back_default
                }
            }
        })
}
