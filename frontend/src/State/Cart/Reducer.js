import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_FAILURE, UPDATE_CART_REQUEST, UPDATE_CART_SUCCESS } from "./ActionType";

const initialState = {
    cart: null,
    isLoading: false,
    error: null,
    cartItems: [],
    deleteCartItem: null,
    updateCartItem: null
}

export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CART_REQUEST:
        case ADD_ITEM_TO_CART_REQUEST:
        case UPDATE_CART_REQUEST:
        case REMOVE_CART_ITEM_REQUEST:
            return { ...state, isLoading: true, error: null };

        case GET_CART_FAILURE:
        case ADD_ITEM_TO_CART_FAILURE:
        case UPDATE_CART_FAILURE:
        case REMOVE_CART_ITEM_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        case GET_CART_SUCCESS:
            return { ...state, isLoading: false, cart: action.payload, cartItems: action.payload.cartItems };
        case ADD_ITEM_TO_CART_SUCCESS:
            return { ...state, isLoading: true, cartItems: [...state.cartItems, action.payload.cartItems] };
        case REMOVE_CART_ITEM_SUCCESS:
            console.log("reducer for remove");
            // state.deleteCartItem = { id: action.payload }

            return { ...state, deleteCartItem: action.payload, isLoading: false }
        case UPDATE_CART_SUCCESS:
            // state.updateCartItem = { id: action.payload.id }
            console.log(state);

            return {
                ...state,
                updateCartItem: { id: action.payload.id },
                isLoading: false
            }

        default:
            return initialState;
    }
}