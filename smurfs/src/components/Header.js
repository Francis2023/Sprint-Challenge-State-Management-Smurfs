import React, {Component} from 'react';
import {Form, Control} from 'react-redux-form'
import {toggleEditting, addSmurfs} from '../actions';


class Header extends React{

    const [newSmurf, setNewSmurf] = useState();

    const handleChange = e => {
        setNewSmurf(e.target.value);
    };

    return (
      <div>
        <form>
            <input
            type="text"
            value={}
            />
        </form>
    
      </div>
    )
}

const mapStateToProps = state => ({
     smurfOnProps: state.reducer.smurfs
});

export default connect(
    mapStateTopProps,
    (toggleEditting,addSmurfs)
    )(Header);