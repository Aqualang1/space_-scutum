import './todoitem.css'
import Input from "../input/input";
import Checkbox from "../checkbox/Checkbox";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { editTodo, deleteTodo } from "../../app/todosListSlice";
import { useState } from "react";
import { editTodoAPI, deleteTodoAPI } from '../../constants/api';
import { FiEdit, FiTrash2, FiSave } from "react-icons/fi";


const Todoitem = ({ todo, setIsLoaded }) => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [todoTitle, setTodoTitle] = useState(todo.title);

    const handleCompletedChange = () => {
        const updatedToDo = { ...todo, completed: !todo.completed };
        editTodoAPI(updatedToDo)
            .then(() => dispatch(editTodo(updatedToDo)))
            .catch(error => console.log(error))
            .finally(() => setIsLoaded(false))
    }

    const handleDelete = () => {
        deleteTodoAPI(todo.id)
            .then(() => dispatch(deleteTodo(todo)))
            .catch(error => console.log(error))
            .finally(() => setIsLoaded(false))
    }

    const handleEdit = () => {
        setEditMode(!editMode);
        if (editMode) {
            const updatedToDo = { ...todo, title: todoTitle };
            editTodoAPI(updatedToDo)
                .then(() => dispatch(editTodo(updatedToDo)))
                .catch(error => console.log(error))
                .finally(() => setIsLoaded(false))
        }
    }


    return (
        <div className="todoitem">
            <Checkbox
                checked={todo.completed}
                handleCompletedChange={handleCompletedChange}
                editMode={editMode}
            />
            <Input
                title={todoTitle}
                editMode={editMode}
                setTodoTitle={setTodoTitle}
                className={todo.completed ? 'done' : undefined}
                id="todoInput"
            />
            <Button
                handler={handleDelete}
                title={<FiTrash2 />}
                disabled={editMode}
            />
            <Button
                handler={handleEdit}
                title={editMode ? <FiSave /> : <FiEdit />}
                disabled={todo.completed}
            />

        </div>
    );
}

export default Todoitem;