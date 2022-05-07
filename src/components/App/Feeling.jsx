import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Feeling() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [feelingToAdd, setFeelingToAdd] = useState('');

    const handleInputChange = (event) => {
        setFeelingToAdd(event.target.value);
    }

    const buttonClick = () => {
        dispatch({
            type: 'FEELING',
            payload: feelingToAdd
        })
        history.push('/Understanding')
    }

    return (
        <>
        <p>How are you feeling today?</p>
      <input
        onChange={(event)=>handleInputChange(event)}
        type='number'
        placeholder='Rating'
      />

      <button onClick={buttonClick}type='submit'>Next</button>
        </>
    )
}

export default Feeling;