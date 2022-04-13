import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  getProducts: [],
  addProduct: ["item"],
  updateProduct: ["item"],
  deleteProduct: ["id"],
  deleteProducts: ["ids"],
  loading: [],
});

const initialState = {
  products: [],
  loading: false,
};

const getProducts = (state = initialState, action) => {
  return {
    ...state,
  };
};

const addProduct = (state = initialState, action) => {
  console.log(action);
  return {
    ...state,
    products: state.products.concat(action.item),
  };
};
const deleteProduct = (state = initialState, action) => {
  return {
    ...state,
    products: state.products.filter((a) => a.id !== action.id),
  };
};
const deleteProducts = (state = initialState, action) => {
  console.log(
    state.products.filter((a) => !action.ids.includes(a.id)),
    "asasas"
  );
  return {
    ...state,
    products: state.products.filter((a) => !action.ids.includes(a.id)),
  };
};
const updateProduct = (state = initialState, action) => {
  const index = state.products.findIndex((a) => a.id === action.item.id);
  console.log(index);
  if (index >= 0) {
    return {
      ...state,
      products: Object.assign([...state.products], { [index]: action.item }),
    };
  }
  return {
    ...state,
    products: state.products.concat(action.item),
  };
};

export default createReducer(initialState, {
  [Types.GET_PRODUCTS]: getProducts,
  [Types.ADD_PRODUCT]: addProduct,
  [Types.DELETE_PRODUCT]: deleteProduct,
  [Types.DELETE_PRODUCTS]: deleteProducts,
  [Types.UPDATE_PRODUCT]: updateProduct,
});
