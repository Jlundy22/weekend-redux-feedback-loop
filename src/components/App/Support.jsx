import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Support() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [supportToAdd, setsupportToAdd] = useState('');

    const handleInputChange = (event) => {
        setsupportToAdd(event.target.value);
    }

    const buttonClick = () => {
        dispatch({
            type: 'FEELING',
            payload: supportToAdd
        })
        history.push('/Understanding')
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