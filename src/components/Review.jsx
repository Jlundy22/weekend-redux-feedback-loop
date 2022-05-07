import {useSelector} from 'react-redux';
import axios from 'axios';



function Review() {
const feeling = useSelector(store => store.feelingReducer[0]);
const understanding = useSelector(store => store.understandingReducer[0]);
const support = useSelector(store => store.supportReducer[0]);
const comment = useSelector(store => store.commentReducer[0]);

    const handleSubmit= () => {
       
        console.log('submit!');
        axios({
            method: 'POST',
            url: '/review',
            data: { 
               feeling,
               understanding,
               support,
               comment
            }
          })
            .then(() => {
              console.log('POST /review success');
      
            })
            .catch(err => {
              console.error('POST /review failed', err);
            });
    }
   

    return (
        <>
        <h1>Review Your Feedback</h1>
            <p>Feelings: {feeling}</p>
            <p>Understanding: {understanding}</p>
            <p>Support: {support}</p>
            <p>Comment: {comment}</p>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Review;