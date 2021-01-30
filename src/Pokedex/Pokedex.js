import React, { Component, useState } from 'react'
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
        if (this.state.pokemonNumber < MAX_POKEMON_NUMBER)
            this.loadPokemon(this.state.pokemonNumber + 1)
    }

    loadPreviousPokemon() {
        if (this.state.pokemonNumber > MIN_POKEMON_NUMBER)
            this.loadPokemon(this.state.pokemonNumber - 1)
    }

    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async loadPokemon(number) {
        this.setState({
            pokemonNumber: number,
            pokemon: null
        })

        //Just to see some animation while loading
        await this.sleep(2000)

        this.pokedex.getPokemonByName(number)
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
                this.getPokemonImageUrl(pokemon.number, pokemon.name)
                    .then(imageUrl => {
                        pokemon.image = imageUrl

                        this.setState({
                            pokemonNumber: number,
                            pokemon: pokemon
                        })
                    })
                    .catch(ex => {
                        console.error(ex)

                        this.setState({
                            pokemonNumber: number,
                            pokemon: pokemon
                        })
                    })
            })
    }

    getPokemonImageUrl(number, name) {

        let url = "https://bulbapedia.bulbagarden.net/w/api.php?action=query&prop=images&format=json&titles=" + name + "_(Pokémon)"
        return fetchJsonp(url)
            .then(response => response.json())
            .then(result => {
                let images = []

                let pages = result.query.pages
                let pagesIds = Object.keys(pages)

                pagesIds.forEach(id => pages[id].images.forEach(i => images.push(i)))

                let image = images.filter(image => {
                    let title = image.title.toLowerCase()
                    return title.includes(number) && title.includes(name.toLowerCase()+".png")
                })[0]

                return image.title
            })
            .then(title => {
                title = title.replace(" ", "_")
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

    render() {
        return (
            <div id={styles.pokedex}>
                <div id={styles.left}>
                    <div id={styles.leftCover}>
                        <LeftCover />
                    </div>
                    <div id={styles.leftPanel}>
                        <LeftPanel pokemon={this.state.pokemon}
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