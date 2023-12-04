import PageSwitcher from "../components/pageSwitcher/PageSwitcher";
import Todoitem from "../components/todoitem/Todoitem";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodo } from "../constants/api";
import { editTodo } from "../app/todosListSlice";
import AddForm from "../components/addForm/AddForm";
import { startTransition } from "react";
import TodoItemsPerPage from "../components/todoItemsPerPage/TodoItemsPerPage";
import { changeItemsPerPage } from "../app/todosListSlice";
import { calculatePagesAmount, getFilteredTodos } from "../helpers/paginationHelper";

const TodoList = () => {

    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todos);
    const itemsPerPage = useSelector((state) => state.itemsPerPage);

    const [currentPage, setCurrentPage] = useState(1);
    const [pagesAmount, setPagesAmount] = useState(calculatePagesAmount(todos, itemsPerPage));
    const [filteredTodos, setFilteredTodos] = useState(getFilteredTodos(todos, itemsPerPage, currentPage));

    useEffect(() => {
        setFilteredTodos(getFilteredTodos(todos, itemsPerPage, currentPage))
        setPagesAmount(calculatePagesAmount(todos, itemsPerPage))
    }, [currentPage, itemsPerPage, todos]);


    const handleChangeItemsPerPage = (value) => {
        dispatch(changeItemsPerPage(value));
    }


    return <>
        <AddForm />

        {filteredTodos.map(todo =>
            <Todoitem
                todo={todo}
                key={todo.id}
            />)}

        <TodoItemsPerPage
            setItemsPerPage={(e) => handleChangeItemsPerPage(e.target.value)}
        />
        <PageSwitcher currentPage={currentPage} pagesAmount={pagesAmount} setCurrentPage={setCurrentPage} />
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