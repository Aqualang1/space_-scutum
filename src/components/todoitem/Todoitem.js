import Input from "../input/input";
import Checkbox from "../checkbox/Checkbox";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { editTodo, deleteTodo } from "../../app/todosListSlice";
import { useEffect, useState } from "react";

const Todoitem = ({ todo }) => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [todoTitle, setTodoTitle] = useState(todo.title);

    const handleCompletedChange = () => {
        dispatch(editTodo({ ...todo, completed: !todo.completed }));
    }

    const handleDelete = () => {
        dispatch(deleteTodo(todo))
    }

    const handleEdit = () => {
        setEditMode(!editMode);
        if (editMode) {
            dispatch(editTodo({ ...todo, title: todoTitle }));
        }
        // debugger;
    }


    return (
        <div className="todoitem">
            <Checkbox
                checked={todo.completed}
                handleCompletedChange={handleCompletedChange}
            />
            <Input
                title={todoTitle}
                // setEditMode={setEditMode}
                editMode={editMode}
                setTodoTitle={setTodoTitle}
            />
            <Button handler={handleDelete} title='DELETE' />
            <Button handler={handleEdit} title={editMode ? 'SAVE' : 'EDIT'} />

        </div>
    );
}

export default Todoitem;