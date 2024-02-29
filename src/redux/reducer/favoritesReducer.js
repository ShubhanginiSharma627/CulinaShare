// favoritesReducer.js

const initialState = [];

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.payload];
    case 'REMOVE_FAVORITE':
       console.log("state",action.payload)
      return state.filter((recipe) => recipe.id !== action.payload);
    default:
      return state;
  }
};

export default favoritesReducer;
