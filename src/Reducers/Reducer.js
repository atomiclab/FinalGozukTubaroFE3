export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_RECIPES":
      return { ...state, recipes: action.payload };
    // case "ADD_CART":
    //   return { ...state, cart: [...state.cart, action.payload] };
    // case "DELETE_CART":
    //   const filteredCart = state.cart.filter(
    //     (item) => item.id !== action.payload.id
    //   );
    // return { ...state, cart: filteredCart };

    case "ADD_FAVORITE":
      console.log(action.payload);
      const newFavoritesLocalStorage = [...state.favorites, action.payload];
      localStorage.setItem(
        "favorites",
        JSON.stringify(newFavoritesLocalStorage)
      );
      return { ...state, favorites: [...state.favorites, action.payload] };
    //return { ...state, favorites: action.payload };
    case "REMOVE_FAVORITE":
      const newFavoritesRemove = state.favorites.filter(
        (doc) => doc.id !== action.payload.id
      );
      localStorage.setItem("favorites", JSON.stringify(newFavoritesRemove));

      return {
        ...state,
        favorites: state.favorites.filter(
          (doc) => doc.id !== action.payload.id
        ),
      };
    case "INIT_FAVORITES":
      const storedFavorites = localStorage.getItem("favorites");
      return {
        ...state,
        favorites: storedFavorites ? JSON.parse(storedFavorites) : [],
      };
    default:
      throw new Error();
  }
};
