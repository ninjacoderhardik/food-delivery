const INIT_STATE = {
  carts:[],
};
export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const ItemIndex = state.carts.findIndex(
        (iteam) => iteam.id === action.payload.id,
      );
      console.log(JSON.parse(localStorage.getItem("items")))
      if (ItemIndex >= 0) {
        state.carts[ItemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        console.log(temp)
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }
    case "REMOVE_CART":
      const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data,
      };
    case "REMOVE_ONE":
      const IteamIndex_dec = state.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );
      if (state.carts[IteamIndex_dec].qnty >= 1) {
        const dltitem = (state.carts[IteamIndex_dec].qnty -= 1);
        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[IteamIndex_dec].qnty === 1) {
        const data = state.carts.filter((el) => el.id !== action.payload);
        return {
          ...state,
          carts: data,
        };
      }
    default:
      return state;
  }
};
