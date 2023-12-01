import Input from "../input/input";
import Checkbox from "../checkbox/Checkbox";
import ButtonDelete from "../buttonDelete/ButtonDelete";
import { useDispatch } from "react-redux";
import { edit } from "../../app/todosListSlice";

const Todoitem = ({ todo }) => {
    const dispatch = useDispatch();
    const handleCompletedChange = () => {
        dispatch(edit({ ...todo, completed: todo.completed }));
    }

    return <div className="todoitem">
        <Checkbox checked={todo.completed} handleCompletedChange={handleCompletedChange} />
        <Input
            description={todo.title}
        />
        <ButtonDelete />
    </div>
}

export default Todoitem;