import { countOptions } from "../../constants/constants";

const TodoItemsPerPage = ({ setItemsPerPage }) => {
    return <select name="todoItemsPerPage" onChange={setItemsPerPage}>
        {countOptions.map((count, i) =>
            <option key={i} value={count}>items per page: {count}</option>
        )}
    </select>
}

export default TodoItemsPerPage;