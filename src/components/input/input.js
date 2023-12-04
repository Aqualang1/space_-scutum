const Input = ({ title, editMode, setTodoTitle, className }) => {

    const handleChange = ({ target }) => {
        setTodoTitle(target.value);
    }

    return <input
        type="text"
        disabled={!editMode}
        value={title}
        onChange={handleChange}
        className={className}
    ></input>
}

export default Input;