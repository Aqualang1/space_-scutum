import Todoitem from "../components/todoitem/Todoitem";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodo } from "../constants/api";
import { edit } from "../app/todosListSlice";
import AddForm from "../components/addForm/AddForm";

const TodoList = () => {

    // const [isLoaded, setIsLoaded] = useState(false);
    // const [todos, setTodos] = useState([]);
    const todos = useSelector((state) => state.todos);

    // useEffect(() => {
    //     if (!isLoaded) {
    //         getTodo()
    //             .then(setTodos)
    //             .catch(error => console.log(error))
    //             .finally(() => setIsLoaded(true))
    //     }
    // }, [isLoaded]);

    return <>
        <AddForm />

        {todos.map(todo =>
            <Todoitem
                todo={todo}
                key={todo.id}
            />)}</>


}

export default TodoList;