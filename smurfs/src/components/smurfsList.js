import React from 'react';
import {connect} from 'react-redux';

import {getSmurf} from '../actions'

const smurfsList = props => {
    const fetchSmurf = e => {
        e.preventDefault();
        props.getSmurf();
    }

    return(
       <>
         {props.error && <p className="error">{props.error}</p>}
         <button onClick={fetchSmurf}>Smurts</button>
         <div>
             {props.smurfs.map(smurfs => {
                 <h4 key={smurfs.url}>{smurfs.name}</h4>
             })}
         </div>
       </>
    )
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    error: state.error
});

export default connect(
mapStateToProps,
(getSmurf)
)(smurfsList);