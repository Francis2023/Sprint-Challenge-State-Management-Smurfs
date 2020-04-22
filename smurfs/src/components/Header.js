import React,{useState} from 'react';
import {connect} from 'react-redux'
import { addSmurf} from '../actions';


const Header = () => {

    const [newSmurf, setNewSmurf] = useState({
        name:'',
        age:[],
        height: ''
    });

    const handleChange = e => {
        setNewSmurf(e.target.value);
    };

    const postSmurf = e => {
        e.preventDefault();
        addSmurf(newSmurf);
    }


    return (
      
        <form>
            <label>Add New Smurf</label>
            <input
            name="smurfName"
            type="text"
            placeholder="Enter name"
            value={newSmurf.name}
            onChange={handleChange}
            />
            <input
            name="smurfAge"
            type="number"
            placeholder="Enter Age"
            value={newSmurf.age}
            onChange={handleChange}
            />
            <input
            name="smurfHeight"
            type="number"
            placeholder="Enter Height"
            value={newSmurf.height}
            onChange={handleChange}
            />
            <button type="submit" onClick={postSmurf}>Add Smurts</button>
        </form>
    
    
    )
};

const mapStateToProps = state => ({
     smurfOnProps: state.newSmurf
});

export default connect(
    mapStateToProps,
    (addSmurf)
    )(Header);