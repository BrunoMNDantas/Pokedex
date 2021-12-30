import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPokemon } from './PokemonService'

export const loadPokemon = createAsyncThunk('pokemon/loadPokemon', async number => {
  const pokemon = await getPokemon(number)
  return pokemon
})

export const pokemonSlice = createSlice({
  name: 'pokemon',

  initialState: {
    loading: false, 
    currentPokemon: null
  },

  reducers: {},
  
  extraReducers(builder) {
    builder
      .addCase(loadPokemon.pending, (state) => {
        state.loading = true
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