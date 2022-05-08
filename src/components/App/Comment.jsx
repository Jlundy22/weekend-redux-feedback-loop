import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comment() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [commentToAdd, setCommentToAdd] = useState('');
    //setCommentToAdd to the comment that has been input
    const handleInputChange = (event) => {
        setCommentToAdd(event.target.value);
    }
    //disbatch the comment to the store
    // also takes you to the review page on the button click
    const buttonClick = () => {
        dispatch({
            type: 'COMMENT',
            payload: commentToAdd
        })
        history.push('/Review')
    }

    return (
        <>
            <p>Any comments you want to leave?</p>
            <input
                onChange={(event) => handleInputChange(event)}
                type='text'
                placeholder='Comment'
            />

            <button onClick={buttonClick} type='submit'>Next</button>
        </>
    )
}

export default Comment;