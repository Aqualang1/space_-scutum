import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { createTodo } from "../../app/todosListSlice";
import { useDispatch } from "react-redux";

const AddForm = () => {

    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        setValue(target.value);
    }

    const generateTodo = (title) => {
        return {
            title,
            completed: false,
            id: uuidv4(),
            userId: uuidv4()
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTodo = generateTodo(value);
        dispatch(createTodo(newTodo));
    }

    return <form onSubmit={handleSubmit}>
        <label>
            Add todo
            <input type="text" onChange={handleChange} value={value} />
        </label>
        <input type="submit" value="+" />
    </form>

}

export default AddForm;