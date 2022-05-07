import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comment() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [commentToAdd, setCommentToAdd] = useState('');

    const handleInputChange = (event) => {
        setCommentToAdd(event.target.value);
    }

    const buttonClick = () => {
        dispatch({
            type: 'COMMENT',
            payload: commentToAdd
        })
        //history.push('/Comment')
    }

    return (
        <>
        <p>Any comments you want to leave?</p>
      <input
        onChange={(event)=>handleInputChange(event)}
        type='text'
        placeholder='Comment'
      />

      <button onClick={buttonClick}type='submit'>Next</button>
        </>
    )
}

export default Comment;