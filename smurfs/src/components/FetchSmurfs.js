import axios from 'axios';
import {fetchSmurfsStart,fetchSmurfsSucceess,fetchSmurfsFailure} from './actions/index'

export const FetchSmurf = () => dispatch => {

    dispatch({type: FETCH_SMURFS_START});
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data.results })
        return res
        })
        .catch(err => {
            console.log(err.response)
            dispatch({ type: FETCH_SMURFS_FAILURE, payload: '${err.response.status} ${err.response.data}' })
        });
    
}