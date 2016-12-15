import jsonpP from 'jsonp-p';

export const FETCH_RESULTS = 'FETCH_RESULTS';

export function fetchResults() {

    const url = '<where_django_code_is_hosted>/api/gigs/?format=jsonp'; 

    return (dispatch) => {
      jsonpP(url, null).promise.then((response) => {
        dispatch({ type: FETCH_RESULTS, payload: response });
      });
    };     
}