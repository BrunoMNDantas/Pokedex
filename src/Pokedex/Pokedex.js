import React, { Component } from 'react'
import styles from './Pokedex.module.css'
import LeftCover from './Cover/LeftCover/LeftCover'
import RightCover from './Cover/RightCover/RightCover'
import RightPanel from './Panel/RightPanel/RightPanel'
import LeftPanel from './Panel/LeftPanel/LeftPanel'
import fetchJsonp from 'fetch-jsonp'
const Dex = require("pokeapi-js-wrapper")



const MAX_POKEMON_NUMBER = 898
const MIN_POKEMON_NUMBER = 1
const INITIAL_POKEMON_NUMBER = 1



class Pokedex extends Component {

    pokedex = new Dex.Pokedex()

    constructor(props) {
        super(props)
        this.state = {
            pokemonNumber: 0,
            pokemon: null
        };
    }

    componentDidMount() {
        this.loadPokemon(INITIAL_POKEMON_NUMBER)
    }

    loadNextPokemon() {
        this.loadPokemon(this.state.pokemonNumber + 1)
    }

    loadPreviousPokemon() {
        this.loadPokemon(this.state.pokemonNumber - 1)
    }

    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async loadPokemon(number) {
        if (number > MAX_POKEMON_NUMBER || number < MIN_POKEMON_NUMBER) {
            window.alert("#" + number + " doesn't exist")
            return
        }

        this.setState({
            pokemonNumber: number,
            pokemon: null
        })

        //Just to see some animation while loading
        await this.sleep(1000)

        this.getPokemon(number)
            .then(pokemon => {
                if (this.state.pokemonNumber === number)
                    this.setState({
                        pokemonNumber: number,
                        pokemon: pokemon
                    })
            })
            .catch(ex => {
                window.alert("Something wnet wrong!")
                console.error(ex)
            })
    }

    getPokemon(number) {
        return this.pokedex.getPokemonByName(number)
            .then(poke => {
                return {
                    number: number,
                    name: poke.name,
                    image: poke.sprites.front_default,
                    front: poke.sprites.front_default,
                    back: poke.sprites.back_default,
                    types: poke.types.map(t => t.type.name),
                    weight: poke.weight
                }
            })
            .then(pokemon => {
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

    getPokemonImageUrl(number, name) {
        return this.getBulbapediaImage(number, name)
            .then(image => {
                let title = image.title.replace(" ", "_")
                let url = "https://bulbapedia.bulbagarden.net/w/api.php?action=query&prop=imageinfo&iiprop=url&format=json&titles=" + title

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

    getBulbapediaImage(number, name, imcontinue = null) {
        let url = "https://bulbapedia.bulbagarden.net/w/api.php?action=query&prop=images&format=json&titles=" + name + "_(Pokémon)"

        if (imcontinue)
            url = url + "&imcontinue=" + imcontinue

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

    selectBulbapediaImage(number, name, images) {
        name = name.toLowerCase()
        images = images.filter(image => {
            let title = image.title.toLowerCase()
            return title.includes(number) && title.includes(name + ".png")
        })

        return images[0]
    }


    render() {
        return (
            <div id={styles.pokedex}>
                <div id={styles.left}>
                    <div id={styles.leftCover}>
                        <LeftCover />
                    </div>
                    <div id={styles.leftPanel}>
                        <LeftPanel pokemon={this.state.pokemon}
                            loadPokemon={number => this.loadPokemon(number)}
                            onTopClick={() => this.loadNextPokemon()}
                            onBottomClick={() => this.loadPreviousPokemon()}
                            onLeftClick={() => this.loadPreviousPokemon()}
                            onRightClick={() => this.loadNextPokemon()} />
                    </div>
                </div>
                <div id={styles.right}>
                    <div id={styles.rightCover}>
                        <RightCover />
                    </div>
                    <div id={styles.rightPanel}>
                        <RightPanel pokemon={this.state.pokemon} />
                    </div>
                </div>
            </div>
        )
    }

}

export default Pokedex