import createContext from "./createContext";

const WishReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      if (state.find((item) => item.id === action.payload.id)) {
        return state.filter((item) => item.id !== action.payload.id);
      } else {
        return [
          ...state,
          {
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
            img: action.payload.img,
          },
        ];
      }
  }
};
const addWish = (dispatch) => {
  return (id, name, price, img) => {
    dispatch({ type: "Add", payload: { id, name, price, img } });
  };
};

export const { Context, Provider } = createContext(
  WishReducer,
  { addWish },
  []
);
