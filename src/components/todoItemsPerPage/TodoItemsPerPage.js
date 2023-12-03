import { countOptions } from "../../constants/constants";
import { useSelector } from "react-redux/es/hooks/useSelector";

const TodoItemsPerPage = ({ setItemsPerPage }) => {

    const defaultValue = useSelector(state => state.itemsPerPage)

    return <select name="todoItemsPerPage" onChange={setItemsPerPage} defaultValue={defaultValue}>
        {countOptions.map((count, i) =>
            <option key={i} value={count}>items per page: {count}</option>
        )}
    </select>
}

export default TodoItemsPerPage;