import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function PetList() {

    const dispatch = useDispatch();
    const pets = useSelector((store) => store.petsReducer)

    useEffect(() => {
        dispatch({
            type: 'FETCH_PETS',
        });
    }, []);

    return (
        <div>
            <button onClick={() => console.log(pets)}>debug</button>
            <table>
                <thead>
                    <tr>
                        <th>Owner</th>
                        <th>Pet</th>
                        <th>Breed</th>
                        <th>Color</th>
                        <th>Checked in</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((pet) => {
                        return (<tr key={pet.id}>
                            <td>{pet.owner}</td>
                            <td>{pet.name}</td>
                            <td>{pet.breed}</td>
                            <td>{pet.color}</td>
                            {pet.checked_in ? <td>yes</td> : <td>no</td>}
                            <td>n/a</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>

    )
}

export default PetList;