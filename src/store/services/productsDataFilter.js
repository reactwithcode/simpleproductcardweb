import axios from 'axios';
import {
    GET_DATA_PRODUCTS_FILTER_BEGIN,
    GET_DATA_PRODUCTS_FILTER_SUCCESS,
    GET_DATA_PRODUCTS_FILTER_FAIL
} from '../helpers/actionTypes';

export const getDataProductsFilter = (minPriceFilter, maxPriceFilter) => dispatch => {

    const token = 'QXNwZW5rdTpBc3Blbmt1';
    dispatch({
        type: GET_DATA_PRODUCTS_FILTER_BEGIN,
        loading: true,
        error: null  
    })
    axios
    .get(`https://apis-dev.aspenku.com/api/v1/product?price={"min":${minPriceFilter},"max":${maxPriceFilter}}`, {
        headers: {
            'Authorization': 'Basic ' + token,
            'language': 'en'
        }
    })
    .then((res) =>
        dispatch({
            type: GET_DATA_PRODUCTS_FILTER_SUCCESS,
            loading: false,
            payload: res.data.data.rows,
            error: null
        })
    )
    .catch((err) =>
        dispatch({
            type: GET_DATA_PRODUCTS_FILTER_FAIL,
            loading: false,
            error: err
        })
    )
}