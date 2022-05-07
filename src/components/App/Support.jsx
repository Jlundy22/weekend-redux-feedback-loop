import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Support() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [supportToAdd, setSupportToAdd] = useState('');

    const handleInputChange = (event) => {
        setSupportToAdd(event.target.value);
    }

    const buttonClick = () => {
        dispatch({
            type: 'SUPPORT',
            payload: supportToAdd
        })
        history.push('/Comment')
    }

    return (
        <>
        <p>How well are you being supported?</p>
      <input
        onChange={(event)=>handleInputChange(event)}
        type='number'
        placeholder='Rating'
      />

      <button onClick={buttonClick}type='submit'>Next</button>
        </>
    )
}

export default Support;