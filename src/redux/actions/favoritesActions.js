// favoritesActions.js
export const addToFavorites = (recipe) => ({
    type: 'ADD_FAVORITE',
    payload: recipe,
  });
  
  export const removeFromFavorites = (recipeId) => ({
    type: 'REMOVE_FAVORITE',
    payload: recipeId,
  });
  