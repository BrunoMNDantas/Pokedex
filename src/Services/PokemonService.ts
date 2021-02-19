import fetchJsonp from 'fetch-jsonp'
const Dex = require("pokeapi-js-wrapper")

let IMAGE_URL = "https://bulbapedia.bulbagarden.net/w/api.php?action=query&prop=imageinfo&iiprop=url&format=json&titles={TITLE}"
let POKEMON_URL = "https://bulbapedia.bulbagarden.net/w/api.php?action=query&prop=images&format=json&titles={POKEMON_NAME}_(Pokémon)"

export default class PokemonService {
    pokedex = new Dex.Pokedex()

    getPokemon(number : number) : Promise<any> {
        return this.pokedex.getPokemonByName(number)
            .then((poke : any) => {
                return {
                    number: number,
                    name: poke.name,
                    image: poke.sprites.front_default,
                    front: poke.sprites.front_default,
                    back: poke.sprites.back_default,
                    types: poke.types.map((t : any) => t.type.name),
                    weight: poke.weight
                }
            })
            .then((pokemon : any) => {
                return this.getPokemonImageUrl(pokemon.number, pokemon.name)
                    .then(imageUrl => {
                        pokemon.image = imageUrl
                        return pokemon
                    })
                    .catch(ex => {
                        console.error(ex)
                        return pokemon
                    })
            })
    }
    
    private getPokemonImageUrl(number : number, name : string) : Promise<any> {
        return this.getBulbapediaImage(number, name)
            .then(image => {
                let title = image.title.replace(" ", "_")
                let url = IMAGE_URL.replace("{TITLE}", title)
    
                return fetchJsonp(url)
                    .then(response => response.json())
                    .then(result => {
                        let pages = result.query.pages
                        let pageId = Object.keys(pages)[0]
                        let info = pages[pageId].imageinfo[0]
                        return info.url
                    })
            })
    }
    
    private getBulbapediaImage(number : number, name : string, imcontinue ?: string) :  Promise<any> {
        let url = POKEMON_URL.replace("{POKEMON_NAME}", name)
    
        if (imcontinue)
            url = url + `&imcontinue=${imcontinue}`
    
        return fetchJsonp(url)
            .then(response => response.json())
            .then(result => {
                let pages = result.query.pages
                let pagesIds = Object.keys(pages)
    
                let images = pagesIds.map(id => pages[id].images).flat()
    
                let image = this.selectBulbapediaImage(number, name, images)
    
                if (!image && result.continue?.imcontinue)
                    return this.getBulbapediaImage(number, name, result.continue.imcontinue)
                else
                    return image
            })
    }
    
    private selectBulbapediaImage(number : number, name : string, images : any[]) : any {
        name = name.toLowerCase()

        images = images.filter(image => {
            let title = image.title.toLowerCase()
            return title.includes(number) && title.includes(name + ".png")
        })
    
        return images[0]
    }
}