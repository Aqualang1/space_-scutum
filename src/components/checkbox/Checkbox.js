const Checkbox = ({ checked, handleCompletedChange, editMode }) => {
    return <label>Done
        <input type="checkbox" checked={checked} onChange={handleCompletedChange} disabled={editMode} />
    </label>
}

export default Checkbox;