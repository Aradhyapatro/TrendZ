import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_Id_SUCCESS } from "./ActionType"

const initialState = {
    isLoading: false,
    error: null,
    Orders: [],
    Order: null,
    success: false
}
export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER_BY_ID_REQUEST:
        case CREATE_ORDER_REQUEST:
            return { ...state, isLoading: true, error: null };

        case GET_ORDER_BY_ID_FAILURE:
        case CREATE_ORDER_FAILURE:
            return { ...state, isLoading: false, error: action.payload, success: false };

        case CREATE_ORDER_SUCCESS:
            return { ...state, isLoading: false, Order: action.payload, success: true };

        case GET_ORDER_BY_Id_SUCCESS:
            console.log(action.payload);
            state.Order = action.payload
            return { ...state, isLoading: false, Order: action.payload, success: true };

        default:
            return initialState;
    }
}