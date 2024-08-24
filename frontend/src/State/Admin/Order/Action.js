import { api } from "../../../Config/configApi";
import { CANCEL_ORDER_FAILURE, CANCEL_ORDER_REQUEST, CANCEL_ORDER_SUCCESS, CONFIRM_ORDER_FAILURE, CONFIRM_ORDER_REQUEST, CONFIRM_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./ActionType"

export const getOrders = () => async (dispatch) => {
    dispatch({ type: GET_ORDERS_REQUEST });
    try {
        const { data } = await api.get(`/api/admin/orders/`)

        dispatch({ type: GET_ORDERS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_ORDERS_FAILURE, payload: error.message })
    }
}

export const confirmOrder = (id) => async (dispatch) => {
    dispatch({ type: CONFIRM_ORDER_REQUEST })
    try {
        const { data } = await api.put(`/api/admin/orders/${id}/confirm`)
        dispatch({ type: CONFIRM_ORDER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CONFIRM_ORDER_FAILURE, payload: error.message })
    }
}

export const shipOrder = (id) => async (dispatch) => {
    dispatch({ type: SHIP_ORDER_REQUEST })
    try {
        const { data } = await api.put(`/api/admin/orders/${id}/ship`)
        dispatch({ type: SHIP_ORDER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: SHIP_ORDER_FAILURE, payload: error.message })
    }
}

export const deliveredOrder = (id) => async (dispatch) => {
    dispatch({ type: DELIVERED_ORDER_REQUEST })
    try {
        const { data } = await api.put(`/api/admin/orders/${id}/deliver`)
        dispatch({ type: DELIVERED_ORDER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: DELIVERED_ORDER_FAILURE, payload: error.message })
    }
}

export const cancelOrder = (id) => async (dispatch) => {
    dispatch({ type: CANCEL_ORDER_REQUEST })
    try {
        const { data } = await api.put(`/api/admin/orders/${id}/cancel`)
        dispatch({ type: CANCEL_ORDER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CANCEL_ORDER_FAILURE, payload: error.message })
    }
}

export const deleteOrder = (id) => async (dispatch) => {
    dispatch({ type: DELETE_ORDER_REQUEST })
    try {
        const { data } = await api.put(`/api/admin/orders/${id}/delete`)
        dispatch({ type: DELETE_ORDER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: DELETE_ORDER_FAILURE, payload: error.message })
    }
}