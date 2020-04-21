import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';
export const SMURF_ADDED = 'SMURF_ADDED';

export const getSmurf = () => dispatch => {

    dispatch({type: FETCH_SMURFS_START});
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => 
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data.results })
        )
        .catch(err => {
            console.log(err.response)
            dispatch({ type: FETCH_SMURFS_FAILURE, payload: '${err.response.status} ${err.response.data}' })
        });
}

export  function addSmurf(newSmurf) {
    // this returned function is the thunk, and gets dispatch passed in
    return function(dispatch) {
      return axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
        dispatch({ type: SMURF_ADDED, payload: res.data.user })
        
      });
    };
  }