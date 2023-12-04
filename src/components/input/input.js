const Input = ({ title, editMode, setTodoTitle }) => {

    const handleChange = ({ target }) => {
        setTodoTitle(target.value);
    }

    return <input
        type="text"
        disabled={!editMode}
        value={title}
        onChange={handleChange}
    ></input>
}

export default Input;