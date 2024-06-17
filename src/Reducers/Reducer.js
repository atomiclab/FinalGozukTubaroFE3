export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_RECIPES":
      return { ...state, recipes: action.payload }; // Asegúrate de que payload tenga el formato correcto
    // case "ADD_CART":
    //   return { ...state, cart: [...state.cart, action.payload] };
    // case "DELETE_CART":
    //   const filteredCart = state.cart.filter(
    //     (item) => item.id !== action.payload.id
    //   );
    // return { ...state, cart: filteredCart };

    case "ADD_FAVORITE":
      console.log(action.payload);
       return { ...state, favorites: [...state.favorites, action.payload] };
      //return { ...state, favorites: action.payload };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (doc) => doc.id !== action.payload.id
        ),
      };

    default:
      throw new Error();
  }
};
