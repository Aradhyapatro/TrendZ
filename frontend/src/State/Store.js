import { applyMiddleware, combineReducers, createStore, } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { CartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import adminOrderReducer from "./Admin/Order/reducer";

const rootReducers = combineReducers({
    auth: authReducer,
    product: customerProductReducer,
    cart: CartReducer,
    Order: orderReducer,
    AdminOrder: adminOrderReducer
})

export const store = createStore(rootReducers, applyMiddleware(thunk));
