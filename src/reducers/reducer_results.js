import { FETCH_RESULTS } from '../actions/index';

export default function(state = [], action) {

    switch(action.type) {
        case FETCH_RESULTS:
            return [ action.payload.results ];
    }
    
    return state;
}