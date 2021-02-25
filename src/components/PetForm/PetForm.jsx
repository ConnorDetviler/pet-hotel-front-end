import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';


function PetForm() {

    const pets = useSelector((store) => store.petsReducer)
    const dispatch = useDispatch();

    const [newPet, setNewPet] = useState({
        name: '',
        breed: '',
        color: '',
        check_in: false,
        owner_id: 0
    })

    const handleChange = (event) => {
        // console.log(event.target.name, event.target.value)
        const value = event.target.value;
        setNewPet({...newPet, [event.target.name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(newPet)
        dispatch({
            type: 'CREATE_PET',
            payload: newPet
        })
    }

    return (
        <form onSubmit={handleSubmit} method='POST'>
            <input
                placeholder="Pet Name"
                type="text"
                onChange={handleChange}
                value={newPet.name}
                name="name"
                />
            <input
                placeholder="Pet Color"
                type="text"
                onChange={handleChange}
                value={newPet.color}
                name="color"
                />
            <input
                placeholder="Pet Breed"
                type="text"
                onChange={handleChange}
                value={newPet.breed}
                name="breed"
                />
            <select
                value={newPet.owner_id}
                onChange={handleChange}
                name="owner_id"
            >
                <option value={0}>Select Owner</option>
                <option value={1}>Connor</option>
            </select>
            <input type="submit"/>
        </form>
    )
}

export default PetForm