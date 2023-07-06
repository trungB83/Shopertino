import createContext from "./createContext";

const OrderReducer = (state, action) => {
  switch (action.type) {
    case "Add": {
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          totalPrice: action.payload.totalPrice,
          orders: action.payload.data,
        },
      ]; // make a new array put the all the perviouse objects that we have
      // in our case now it is empty array , then add {Object} that will
      // represent the orders
    }

    default:
      return state;
  }
};
const addOrders = (dispatch) => {
  return (data, totalPrice) => {
    dispatch({ type: "Add", payload: { data, totalPrice } });
  };
};

export const { Context, Provider } = createContext(
  OrderReducer,
  { addOrders },
  []
);
