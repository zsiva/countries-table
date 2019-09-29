export const FETCH_ITEMS_BEGIN = "FETCH_ITEMS_BEGIN";
export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const FETCH_ITEMS_FAILURE = "FETCH_ITEMS_FAILURE";

export const dataParameters = [
  "bigmac_index",
  "life_expectancy",
  "happiness_index",
  "median_age",
  "population"
];

export function fetchData() {
  return dispatch => {
    dispatch(fetchItemsBegin());

    fetch(
      `http://inqstatsapi.inqubu.com/?api_key=8fe15e4caa7ef85c&data=${dataParameters.join(
        ","
      )}&cmd=getWorldData&addRegion=true`
    )
      .then(response => response.json())
      .then(items => {
        dispatch(fetchItemsSuccess(items));
      })
      .catch(err => dispatch(fetchItemsFailure(err)));
  };
}
export const fetchItemsBegin = () => ({
  type: FETCH_ITEMS_BEGIN
});

export const fetchItemsSuccess = items => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: { items }
});

export const fetchItemsFailure = error => ({
  type: FETCH_ITEMS_FAILURE,
  payload: { error }
});
