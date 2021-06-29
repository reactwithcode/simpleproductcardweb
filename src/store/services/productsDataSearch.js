import axios from 'axios';
import {
    GET_DATA_PRODUCTS_BEGIN,
    GET_DATA_PRODUCTS_SUCCESS,
    GET_DATA_PRODUCTS_FAIL
} from '../helpers/actionTypes';

export const getDataProductsSearch  = (search) => dispatch => {

    const token = 'QXNwZW5rdTpBc3Blbmt1';
    dispatch({
        type: GET_DATA_PRODUCTS_BEGIN,
        loading: true,
        error: null
    })
    axios
    .get(`https://apis-dev.aspenku.com/api/v1/product?query=${search}&limit=12`, {
        headers: {
            'Authorization': 'Basic ' + token,
            'language': 'en'
        }
    })
    .then((res) =>
        dispatch({
            type: GET_DATA_PRODUCTS_SUCCESS,
            loading: false,
            payload: res.data,
            error: null
        })
    )
    .catch((err) =>
        dispatch({
            type: GET_DATA_PRODUCTS_FAIL,
            loading: false,
            error: err
        })
    )
}