import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPokemon } from './PokemonService'
import { MIN_POKEMON_NUMBER, MAX_POKEMON_NUMBER, REQUEST_SLEEP_TIME } from '../app/configs'

const sleep = async (ms) =>  new Promise(resolve => setTimeout(resolve, ms))
const fetch = async (number) => {
  await sleep(REQUEST_SLEEP_TIME)

  const pokemon = await getPokemon(number)

  return pokemon
}

export const loadPokemon = createAsyncThunk('pokemon/loadPokemon', async number => {
  return fetch(number)
})

export const loadNextPokemon = createAsyncThunk('pokemon/loadPokemon', async (_, thunkAPI) => {
  let number = thunkAPI.getState().pokemon.previousPokemon?.number + 1

  if(number > MAX_POKEMON_NUMBER)
    number = MIN_POKEMON_NUMBER

  return fetch(number)
})

export const loadPreviousPokemon = createAsyncThunk('pokemon/loadPokemon', async (_, thunkAPI) => {
  let number = thunkAPI.getState().pokemon.previousPokemon?.number - 1

  if(number < MIN_POKEMON_NUMBER)
    number = MAX_POKEMON_NUMBER

  return fetch(number)
})

export const pokemonSlice = createSlice({
  name: 'pokemon',

  initialState: {
    loading: false, 
    currentPokemon: null,
    previousPokemon: null
  },

  reducers: {},
  
  extraReducers(builder) {
    builder
      .addCase(loadPokemon.pending, (state) => {
        state.loading = true
        state.previousPokemon = state.currentPokemon
        state.currentPokemon = null
      })
      .addCase(loadPokemon.fulfilled, (state, action) => {
        state.loading = false
        state.currentPokemon = action.payload
      })
      .addCase(loadPokemon.rejected, (state, action) => {
        state.loading = false
        console.error(action.error)
      })
  }
})

export default pokemonSlice.reducer