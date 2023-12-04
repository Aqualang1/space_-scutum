const Button = ({ handler, title }) => {
    return <button onClick={handler}>{title}</button>
}

export default Button;