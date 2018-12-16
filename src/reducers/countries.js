import { FETCH_ITEMS_BEGIN, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE } from '../actions';

import formatNumber from '../utils/formatNumber';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function countries(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_ITEMS_SUCCESS:
      const filteredItems = action.payload.items.map(item => ({
        name: item.countryName,
        bigmac_index: item.bigmac_index,
        happiness_index: item.happiness_index,
        median_age: item.median_age,
        life_expectancy: item.life_expectancy,
        population: formatNumber(item.population),
      }));
      return {
        ...state,
        loading: false,
        items: filteredItems,
      };

    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };

    default:
      return state;
  }
}
