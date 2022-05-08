import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Feeling() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [feelingToAdd, setFeelingToAdd] = useState('');
    //setFeelingToAdd to the rating that has been input
    const handleInputChange = (event) => {
        setFeelingToAdd(event.target.value);
    }
    //disbatch the feeling rating to the store
    // also takes you to the understanding page on the button click
    const buttonClick = () => {
        if (!feelingToAdd) {
            alert('Must add rating!');
            return;
        }
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
                onChange={(event) => handleInputChange(event)}
                type='number'
                placeholder='Rating 1-10'
            />

            <button onClick={buttonClick} type='submit'>Next</button>
        </>
    )
}

export default Feeling;