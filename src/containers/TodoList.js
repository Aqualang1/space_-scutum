import Todoitem from "../components/todoitem/Todoitem";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodo } from "../constants/api";
import { edit } from "../app/todosListSlice";
import AddForm from "../components/addForm/AddForm";
import { startTransition } from "react";

const TodoList = () => {

    const todos = useSelector((state) => state.todos);

    const quantity = useSelector((state) => state.itemsPerPage)

    const currentPage = 1;

    const limitedTodos = todos.slice(quantity * (currentPage - 1), quantity * currentPage);

    return <>
        <AddForm />

        {limitedTodos.map(todo =>
            <Todoitem
                todo={todo}
                key={todo.id}
            />)}</>


}

export default TodoList;




// const [isLoaded, setIsLoaded] = useState(false);
// const [todos, setTodos] = useState([]);
// useEffect(() => {
//     if (!isLoaded) {
//         getTodo()
//             .then(setTodos)
//             .catch(error => console.log(error))
//             .finally(() => setIsLoaded(true))
//     }
// }, [isLoaded]);