import axios from "axios";
import { CREATE_PRODUCTS_FAILURE, CREATE_PRODUCTS_REQUEST, CREATE_PRODUCTS_SUCCESS, DELETE_PRODUCTS_FAILURE, DELETE_PRODUCTS_REQUEST, DELETE_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";
import { api } from "../../Config/configApi";

export const findAllProducts = () => async (dispatch) => {
    try {
        const { data } = await api.get(`/api/products/all`);
        dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {

    }
}

export const findProducts = (reqData) => async (dispatch) => {
    try {
        dispatch({ type: FIND_PRODUCTS_REQUEST });
        const {
            colors,
            sizes,
            minPrice,
            maxPrice,
            minDiscount,
            category,
            stock,
            sort,
            pageNumber,
            pageSize,
        } = reqData;

        console.log(reqData);

        const { data } = await api.get(`/api/products/?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`);

        dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message })
        console.log(error);
    }
};


export const findProductById = (id) => async (dispatch) => {
    try {
        dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });

        const { data } = await api.get(`/api/products/id/${id}`);

        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message })
        console.log(error);
    }
};

export const createProduct = (product) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_PRODUCTS_REQUEST })

        const { data } = await api.post(`/api/admin/product/`, product.data);

        dispatch({ type: CREATE_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CREATE_PRODUCTS_FAILURE, payload: error.message })
    }
}

export const deleteProduct = (productId) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_PRODUCTS_REQUEST })

        const { data } = await api.delete(`/api/admin/product/${productId}`);

        dispatch({ type: DELETE_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: DELETE_PRODUCTS_FAILURE, payload: error.message })
    }
}
