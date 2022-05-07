import { useHistory } from 'react-router-dom';


function Success() {
    const history = useHistory();

    const backHome = () => {
        history.push('/');
    }

    return (
        <>
        <p>Success</p>
        <button onClick={backHome}>Leave New Feedback</button>
        </>
    )

}

export default Success;