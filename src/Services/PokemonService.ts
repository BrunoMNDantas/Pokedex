import fetchJsonp from 'fetch-jsonp'
const Dex = require("pokeapi-js-wrapper")

let IMAGE_URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/{POKEMON_NUMBER}.png"

export default class PokemonService {
    pokedex = new Dex.Pokedex()

    getPokemon(number : number) : Promise<any> {
        return this.pokedex.getPokemonByName(number)
            .then((poke : any) => {
                return {
                    number: number,
                    name: poke.name,
                    image: IMAGE_URL.replace("{POKEMON_NUMBER}",  ('000' + number).substr(-3)),
                    front: poke.sprites.front_default,
                    back: poke.sprites.back_default,
                    types: poke.types.map((t : any) => t.type.name),
                    weight: poke.weight
                }
            })
    }
}