const Button = ({btn_type, action, label}) => {
    return(
        <button className={`btn ${btn_type}`} onClick={action} type="button">
            {label}
        </button>
    )
}

export default Button;