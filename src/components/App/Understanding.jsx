import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Understanding() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [understandingToAdd, setUnderstandingToAdd] = useState('');
    //setUnderstandingToAdd to the rating that has been input
    const handleInputChange = (event) => {
        setUnderstandingToAdd(event.target.value);
    }
    //disbatch the understanding rating to the store
    // also takes you to the support page on the button click
    const buttonClick = () => {
        dispatch({
            type: 'UNDERSTANDING',
            payload: understandingToAdd
        })
        history.push('/Support')
    }

    return (
        <>
            <p>How well are you understanding the content</p>
            <input
                onChange={(event) => handleInputChange(event)}
                type='number'
                placeholder='Rating 1-10'
            />

            <button onClick={buttonClick} type='submit'>Next</button>
        </>
    )
}

export default Understanding;