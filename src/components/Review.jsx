import {useSelector} from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


//declares variable equal to the current value 
//that has been stored by the reducer
function Review() {
const feeling = useSelector(store => store.feelingReducer[store.feelingReducer.length - 1]);
const understanding = useSelector(store => store.understandingReducer[store.understandingReducer.length - 1]);
const support = useSelector(store => store.supportReducer[store.supportReducer.length - 1]);
const comment = useSelector(store => store.commentReducer[store.commentReducer.length - 1]);
const history = useHistory();

// sends all of the data stored to the database
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
        history.push('/Success');
    }
   
//review page with all of your answers from the 
//4 previous pages , hitting the submit button send
// the info to the database
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