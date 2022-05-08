import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Support() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [supportToAdd, setSupportToAdd] = useState('');
    //setSupportToAdd to the rating that has been input
    const handleInputChange = (event) => {
        setSupportToAdd(event.target.value);
    }
    //disbatch the support rating to the store
    // also takes you to the comment page on the button click
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
                onChange={(event) => handleInputChange(event)}
                type='number'
                placeholder='Rating 1-10'
            />

            <button onClick={buttonClick} type='submit'>Next</button>
        </>
    )
}

export default Support;