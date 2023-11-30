const Checkbox = ({checked, handleCompletedChange}) => {
    return <input type="checkbox" checked={checked} onChange={handleCompletedChange}/>
}

export default Checkbox;