import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_Id_SUCCESS } from "./ActionType"
import { api } from "../../Config/configApi"
import { useNavigate } from "react-router-dom";

export const createOrder = (reqData) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_ORDER_REQUEST })

        const { data } = await api.post("/api/orders/", reqData.address);
        console.log(data, " Create order data");

        // if (data.id) {
        //     console.log({ ...reqData });
        //     const navigate = useNavigate();

        //     navigate({ search: `?step=3&order_id=${data.id}` })
        // }
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data })
        return { type: CREATE_ORDER_SUCCESS, payload: data };
    } catch (error) {
        dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message })
    }
}

export const getOrderById = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_ORDER_BY_ID_REQUEST })

        const { data } = await api.get(`/api/orders/${id}`);
        console.log(data, "action");

        dispatch({ type: GET_ORDER_BY_Id_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_ORDER_BY_ID_FAILURE, payload: error.message })
    }
}