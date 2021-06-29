import axios from 'axios';
import {
    GET_DATA_PRODUCTS_DETAIL_BEGIN,
    GET_DATA_PRODUCTS_DETAIL_SUCCESS,
    GET_DATA_PRODUCTS_DETAIL_FAIL
} from '../helpers/actionTypes';

export const getDataProductsDetail = (permalink) => dispatch => {

    const token = 'QXNwZW5rdTpBc3Blbmt1';
    dispatch({
        type: GET_DATA_PRODUCTS_DETAIL_BEGIN,
        loading: true,
        error: null
    })
    axios
    .get(`https://apis-dev.aspenku.com/api/v3/product/${permalink}`, {
        headers: {
            'Authorization': 'Basic ' + token,
            'language': 'en'
        }
    })
    .then((res) =>
        dispatch({
            type: GET_DATA_PRODUCTS_DETAIL_SUCCESS,
            loading: false,
            payload: res.data.data,
            error: null
        })
    )
    .catch((err) =>
        dispatch({
            type: GET_DATA_PRODUCTS_DETAIL_FAIL,
            loading: false,
            error: err
        })
    )
}