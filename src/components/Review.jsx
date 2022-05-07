import {useSelector} from 'react-redux'

function Review() {
    const handleSubmit= () => {
        console.log('submit!')
    }
    const feeling = useSelector(store => store.feelingReducer[0]);
    const understanding = useSelector(store => store.understandingReducer[0]);
    const support = useSelector(store => store.supportReducer[0]);
    const comment = useSelector(store => store.commentReducer[0]);
    // console.log(feeling);
    // console.log(understanding);
    // console.log(support);
    // console.log(comment);

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