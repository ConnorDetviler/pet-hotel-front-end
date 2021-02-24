import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function PetList() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_PETS',
        });
    }, []);

    return (
        <p>petlist</p>
    )
}

export default PetList;