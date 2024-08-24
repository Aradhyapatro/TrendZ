import {
    CANCEL_ORDER_FAILURE,
    CANCEL_ORDER_REQUEST,
    CANCEL_ORDER_SUCCESS,
    CONFIRM_ORDER_FAILURE,
    CONFIRM_ORDER_REQUEST,
    CONFIRM_ORDER_SUCCESS,
    DELETE_ORDER_SUCCESS,
    DELIVERED_ORDER_FAILURE,
    DELIVERED_ORDER_REQUEST,
    DELIVERED_ORDER_SUCCESS,
    GET_ORDERS_FAILURE,
    GET_ORDERS_REQUEST,
    GET_ORDERS_SUCCESS,
    SHIP_ORDER_FAILURE,
    SHIP_ORDER_REQUEST,
    SHIP_ORDER_SUCCESS
} from "./ActionType";

const initialState = {
    loading: false,
    orders: [],
    error: null,
    delivered: null,
    cancel: null,
    ship: null,
    confirm: null
}

const adminOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS_REQUEST:
        case DELIVERED_ORDER_REQUEST:
        case CONFIRM_ORDER_REQUEST:
        case CANCEL_ORDER_REQUEST:
        case SHIP_ORDER_REQUEST:
            return { ...state, loading: true }

        case GET_ORDERS_SUCCESS:
            return { ...state, loading: false, orders: action.payload, error: null }

        case DELIVERED_ORDER_SUCCESS:
            return { ...state, loading: false, delivered: action.payload, error: null }

        case CONFIRM_ORDER_SUCCESS:
            return { ...state, loading: false, confirm: action.payload, error: null }

        case CANCEL_ORDER_SUCCESS:
            return { ...state, cancel: action.payload, loading: false, error: null }

        case SHIP_ORDER_SUCCESS:
            return { ...state, ship: action.payload, loading: false }

        case DELETE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: state.orders.filter((order) => order.id && order.id !== action.payload)
            }

        case GET_ORDERS_FAILURE:
        case DELIVERED_ORDER_FAILURE:
        case CONFIRM_ORDER_FAILURE:
        case CANCEL_ORDER_FAILURE:
        case SHIP_ORDER_FAILURE:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }
}

export default adminOrderReducer;