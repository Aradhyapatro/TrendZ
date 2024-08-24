import { api } from "../../Config/configApi"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_FAILURE, UPDATE_CART_REQUEST, UPDATE_CART_SUCCESS } from "./ActionType"

export const addCartItem = (reqData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_ITEM_TO_CART_REQUEST })

        const { data } = await api.put("/api/cart/add", reqData);
        console.log("item added");


        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message })
    }
}

export const removeCartItem = (id) => async (dispatch) => {
    try {
        dispatch({ type: REMOVE_CART_ITEM_REQUEST })

        const { data } = await api.delete(`/api/cartitem/${id}`);
        console.log(data, " data of remove");

        dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: id })
    } catch (error) {
        dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message })
    }
}

export const updateCartItem = (reqData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_CART_REQUEST })

        const { data } = await api.put(`/api/cartitem/${reqData.id}`, reqData.data);

        dispatch({ type: UPDATE_CART_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: UPDATE_CART_FAILURE, payload: error.message })
    }
}

export const GetCart = () => async (dispatch) => {
    try {
        dispatch({ type: GET_CART_REQUEST })

        const { data } = await api.get(`/api/cart/`);
        dispatch({ type: GET_CART_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_CART_FAILURE, payload: error.message })
    }
}