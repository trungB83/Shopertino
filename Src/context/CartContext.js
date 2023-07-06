import createContext from "./createContext";
const Cartreducer = (state, action) => {
  switch (action.type) {
    case "Add": {
      if (state.find((item) => item.id === action.payload.id)) {
        return state;
      } else {
        return [
          ...state,
          {
            id: action.payload.id,
            name: action.payload.name,
            price: parseFloat(action.payload.price),
            fixedPrice: parseFloat(action.payload.price),
            img: action.payload.img,
            quantaty: 1,
          },
        ];
      }
    }
    case "remove": {
      if (
        state[state.findIndex((item) => item.id === action.payload.id)]
          .quantaty <= 1
      ) {
        return state.filter((item) => item.id !== action.payload.id);
      } else {
        // Decrement the Quantanty
        state[state.findIndex((item) => item.id === action.payload.id)]
          .quantaty--;
        state[state.findIndex((item) => item.id === action.payload.id)].price =
          action.payload.currentPrice -
          state[state.findIndex((item) => item.id === action.payload.id)]
            .fixedPrice;

        return [...state];
      }
    }
    case "Clear": {
      return (state = []);
    }
    case "ReOrder": {
      return (state = action.payload);
    }
    case "Increase": {
      state[state.findIndex((item) => item.id === action.payload.id)]
        .quantaty++;

      state[state.findIndex((item) => item.id === action.payload.id)].price =
        state[state.findIndex((item) => item.id === action.payload.id)]
          .fixedPrice + action.payload.currentPrice;

      return [...state];
    }
    default:
      return state;
  }
};
const clearItems = (dispatch) => {
  return () => {
    dispatch({ type: "Clear" });
  };
};
const addItem = (dispatch) => {
  return (id, name, price, img) => {
    dispatch({ type: "Add", payload: { id, name, price, img } });
  };
};
const removeItem = (dispatch) => {
  return (id, quantaty, currentPrice) => {
    dispatch({ type: "remove", payload: { id, quantaty, currentPrice } });
  };
};
const reOrder = (dispatch) => {
  return (newState) => {
    dispatch({ type: "ReOrder", payload: newState });
  };
};
const increment = (dispatch) => {
  return (id, currentPrice, quantaty) => {
    dispatch({ type: "Increase", payload: { id, currentPrice, quantaty } });
  };
};
export const { Context, Provider } = createContext(
  Cartreducer,
  { addItem, removeItem, clearItems, reOrder, increment },
  []
);
