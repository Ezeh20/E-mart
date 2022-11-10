import { useState } from "react";
import { createUserWithEmailAndPass, storeAuthUsers } from '../../utils/firebase/firebase.utils.js'
import FormInput from "../Form-input-component/form-input.jsx";
import "./sign-up.scss"

const SignUp = () => {

    const defaultForm = {
        displayName: '',
        email: '',
        password: '',
        comfirmPassword: ''
    }

    const [formDefault, setFormDefault] = useState(defaultForm)
    const { displayName, email, password, comfirmPassword } = formDefault

    const handleChange = event => {
        const { name, value } = event.target
        setFormDefault({ ...formDefault, [name]: value })
    }

    const clear = () => {
        setFormDefault(defaultForm)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (password !== comfirmPassword) {
            alert("password does not match")
            return;
        }
        try {
            const { user } = await createUserWithEmailAndPass(email, password);
            await storeAuthUsers(user, { displayName });
            clear();

        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                alert('error')
            } else {
                console.log("failed", err)
            }
        }
    }

    console.log(defaultForm)
    return (
        <div className="up">
            <h2 className="title">Sign up</h2>
            <form className="form container-three" onSubmit={handleSubmit}>
                <FormInput type="text" className='input' label="Name" id="name" name="displayName" required value={displayName} onChange={handleChange} />
                <FormInput type="text" className='input' label={`Email`} id="email" name="email" value={email} required onChange={handleChange} />
                <FormInput type="text" className='input' label={`Password`} id="password" name="password" value={password} required onChange={handleChange} />
                <FormInput type="text" className='input' label={`Comfirm Password`} id="confirmPassword" name="comfirmPassword" value={comfirmPassword} required onChange={handleChange} />
                <FormInput type="submit" className="submit-btn" value="Sign - up" />
            </form>
        </div>
    )
}

export default SignUp