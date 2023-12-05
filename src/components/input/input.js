const Input = ({ title, editMode, setTodoTitle, className, id }) => {

    const handleChange = ({ target }) => {
        setTodoTitle(target.value);
    }

    return <input
        type="text"
        disabled={!editMode}
        value={title}
        onChange={handleChange}
        className={className}
        id={id}
    ></input>
}

export default Input;