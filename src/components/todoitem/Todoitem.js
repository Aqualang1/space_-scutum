import Input from "../input/input";
import Checkbox from "../checkbox/Checkbox";
import ButtonDelete from "../buttonDelete/ButtonDelete";
import { useDispatch } from "react-redux";
import { edit, deleteTodo } from "../../app/todosListSlice";

const Todoitem = ({ todo }) => {
    const dispatch = useDispatch();
    const handleCompletedChange = () => {
        dispatch(edit({ ...todo, completed: !todo.completed }));
    }

    const handleDelete = () => {
        dispatch(deleteTodo( {todo} ))
    }

    return <div className="todoitem">
        <Checkbox checked={todo.completed} handleCompletedChange={handleCompletedChange} />
        <Input
            description={todo.title}
        />
        <ButtonDelete handleDelete={handleDelete}/>
    </div>
}

export default Todoitem;