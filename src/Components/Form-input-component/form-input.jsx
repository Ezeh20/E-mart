import './form-input.scss'

const FormInput = ({ label, id, ...otherProps }) => {
    return (
        <div className='sign_up'>
            <div className="sign_up_container ">
                <label htmlFor={id}>{label}</label>
                <input  {...otherProps} />
            </div>
        </div>
    )
}

export default FormInput