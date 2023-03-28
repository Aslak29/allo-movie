import { configureStore, createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "fav",
  initialState: [],
  reducers: {
    addFav: (state, action) => {
      const newFav = {
        movie: action.payload,
        isFav: false,
      };
      state.push(newFav);
    },
    toggleFav: (state, action) => {
      const fav = state.find((f) => f.id === action.payload);
      fav.isfav = !fav.isFav;
    },
    removeFav: (state, action) => {
      // Tu prends l'état et tu le filtres: tu chopes l'id sélectionné et tu le supprimes
      state = state.filter((f) => f.id !== action.payload);
    },
  },
});

export const store = configureStore({
  reducer: {
    fav: favSlice.reducer,
  },
});
