const Button = ({ handler, title, disabled }) => {
    return <button onClick={handler} disabled={disabled}>{title}</button>
}

export default Button;