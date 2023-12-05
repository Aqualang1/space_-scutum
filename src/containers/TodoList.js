import PageSwitcher from "../components/pageSwitcher/PageSwitcher";
import Todoitem from "../components/todoitem/Todoitem";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodo } from "../constants/api";
import AddForm from "../components/addForm/AddForm";
import TodoItemsPerPage from "../components/todoItemsPerPage/TodoItemsPerPage";
import { changeItemsPerPage, loadTodos } from "../app/todosListSlice";
import { calculatePagesAmount, getFilteredTodos } from "../helpers/paginationHelper";
import './TodoList.css';

const TodoList = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        if (!isLoaded) {
            getTodo()
                .then(setTodos)
                .then(() => dispatch(loadTodos(todos)))
                .catch(error => console.log(error))
                .finally(() => setIsLoaded(true))
        }
    }, [isLoaded]);

    const dispatch = useDispatch();

    // const todos = useSelector((state) => state.todos);
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


    return <div className="todoList">

        <AddForm
            setIsLoaded={setIsLoaded}
        />

        {filteredTodos.map(todo =>
            <Todoitem
                todo={todo}
                key={todo.id}
                setIsLoaded={setIsLoaded}
            />)}

        <TodoItemsPerPage
            setItemsPerPage={(e) => handleChangeItemsPerPage(e.target.value)}
        />
        <PageSwitcher currentPage={currentPage} pagesAmount={pagesAmount} setCurrentPage={setCurrentPage} />
    </div>


}

export default TodoList;



