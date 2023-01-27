import './form-input.scss'

const FormInput = ({ label,  inputOptions }) => {
    return (
        <div className='sign_up'>
            <div className="sign_up_container ">
                <input  {...inputOptions} />
                <label className={`${inputOptions.value.length ? 'shrink' : ''} field-label`}>{label}</label>
            </div>
        </div>
    )
}

export default FormInput