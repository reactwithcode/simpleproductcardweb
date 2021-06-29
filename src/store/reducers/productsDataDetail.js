import { 
    GET_DATA_PRODUCTS_DETAIL_BEGIN,
    GET_DATA_PRODUCTS_DETAIL_SUCCESS,
    GET_DATA_PRODUCTS_DETAIL_FAIL
} from '../helpers/actionTypes'

const initialState = {
    loading: false,
    error: null,
    products: []
}

const productsDataDetail = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch(type) {
        default:
            return {
                ...state
            };

        case GET_DATA_PRODUCTS_DETAIL_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_DATA_PRODUCTS_DETAIL_SUCCESS:
            return {
                ...state,
                error: null,
                products: payload
            };
        case GET_DATA_PRODUCTS_DETAIL_FAIL:
            return {
                ...state,
                loading: false,
                error: error,
                products: []
            }
    }
}

export default productsDataDetail;