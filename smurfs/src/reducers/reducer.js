import {FETCH_SMURFS_START,
        FETCH_SMURFS_FAILURE,
        FETCH_SMURFS_SUCCESS, 
        SMURF_ADDED
    } from '../actions'

const initialState = {
    smurfs: [],
    error: null,
    isfetching: false,
    editting: false
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SMURFS_START:
        return {
            ...state,
            isfetching: true
        }
        case FETCH_SMURFS_SUCCESS:
        return {
            ...state,
            isfetching: false,
            smurfs: action.payload
        }
        case FETCH_SMURFS_FAILURE:
        return {
            ...state,
            error: action.error,
            isfetching: false
        }
        case SMURF_ADDED:
        return {
           ...state,
           adding: true
        }
        default:
            return state;
    }

}

export default reducer;

export const getSmurfs = state => state.products;
export const getSmurfsSuccess = state => state.isfetching;
export const getSmurfsFailure = state => state.error;