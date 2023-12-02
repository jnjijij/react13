// genresSlice.js
import { createSlice } from '@reduxjs/toolkit';

const genresSlice = createSlice({
  name: 'genres',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
    selectedGenre: null, // Add selectedGenre state
  },
  reducers: {
    setGenres: (state, action) => {
      state.list = action.payload;
    },
    setLoading: (state) => {
      state.status = 'loading';
    },
    setSuccess: (state) => {
      state.status = 'succeeded';
    },
    setError: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    // Add setGenre action
    setGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
  },
});

export const { setGenres, setLoading, setSuccess, setError, setGenre } = genresSlice.actions;
export const selectGenres = (state) => state.genres.list;
export const selectGenresStatus = (state) => state.genres.status;
export const selectSelectedGenre = (state) => state.genres.selectedGenre; // Add selector for selectedGenre
export default genresSlice.reducer;
