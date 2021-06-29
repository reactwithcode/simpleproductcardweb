
import { combineReducers } from 'redux';
import productsData from './productsData';
import productsDataSearch from './productsDataSearch';
import productsDataDetail from './productsDataDetail';
import productsDataFilter from './productsDataFilter';

const rootReducers = combineReducers({
    productsData,
    productsDataSearch,
    productsDataDetail,
    productsDataFilter,
});

export default rootReducers;