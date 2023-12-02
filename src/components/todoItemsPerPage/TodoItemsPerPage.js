import { countOptions } from "../../constants/constants";

const TodoItemsPerPage = () => {
    return <select name="todoItemsPerPage">
        {countOptions.map((count, i) =>
            <option key={i} value={count}>items per page: {count}</option>
        )}
    </select>
}

export default TodoItemsPerPage;