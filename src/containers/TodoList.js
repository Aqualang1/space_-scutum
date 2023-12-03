import Todoitem from "../components/todoitem/Todoitem";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodo } from "../constants/api";
import { edit } from "../app/todosListSlice";
import AddForm from "../components/addForm/AddForm";
import { startTransition } from "react";
import TodoItemsPerPage from "../components/todoItemsPerPage/TodoItemsPerPage";
import { changeItemsPerPage } from "../app/todosListSlice";

const TodoList = () => {

    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todos);

    let quantity = useSelector((state) => state.itemsPerPage)

    const currentPage = 1;

    const limitedTodos = todos.slice(quantity * (currentPage - 1), quantity * currentPage);

    const handleChangeItemsPerPage = (value) => {
        dispatch(changeItemsPerPage(value));
        // quantity = itemsPerPage;
    }

    return <>
        <AddForm />

        {limitedTodos.map(todo =>
            <Todoitem
                todo={todo}
                key={todo.id}
            />)}

        <TodoItemsPerPage
            setItemsPerPage={(e) => handleChangeItemsPerPage(e.target.value)}
            // handleChangeItemsPerPage={handleChangeItemsPerPage}
        />
    </>


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