import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { createTodo } from "../../app/todosListSlice";
import { useDispatch } from "react-redux";
import { createTodoAPI } from "../../constants/api";
import './addForm.css'
import { BsPlusSquare } from "react-icons/bs";


const AddForm = ({ setIsLoaded }) => {

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
        createTodoAPI(newTodo)
            .then(() => dispatch(createTodo(newTodo)))
            .then(setValue(''))
            .catch(error => console.log(error))
            .finally(() => setIsLoaded(false))

    }

    return <form onSubmit={handleSubmit} className="addTodo">
        <label>
            Add todo:
            <input type="text"
                onChange={handleChange}
                value={value}
            />
        </label>
        <button
            className="btnSubmit"
            type="submit"
            disabled={!value}
        >
            <BsPlusSquare />

        </button>
    </form>

}

export default AddForm;