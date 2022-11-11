import './button.scss'


const Button_Class = {
    google: "google-sign-in",
    primary: "primary-btn",
    redirect: "redirect"
}

const Button = ({ children, buttonType }) => {
    return (
        <button className={`btn ${Button_Class[buttonType]}`}>{children}</button>
    )
}

export default Button