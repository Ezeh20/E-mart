import './button.scss'


const Button_Class = {
    google: "google-sign-in",
    primary: "primary-btn",
    redirect: "redirect",
    addToCart:"cart",
    checkout:"checkout",
    addOrRemove:"addOrRemove"
}

const Button = ({ children, buttonType, otherProps, onClick, link }) => {
    return (
        <button className={`btn ${Button_Class[buttonType]}`} {...otherProps} onClick={onClick} link={link}>{children}</button>
    )
}

export default Button