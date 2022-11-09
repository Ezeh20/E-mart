import { useState } from "react";
import { createUserWithEmailAndPass, storeAuthUsers } from '../../utils/firebase/firebase.utils.js'
import FormInput from "../Form-input-component/form-input.jsx";

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
        <div>
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
                <FormInput type="text" label="Name" name="displayName" required value={displayName} onChange={handleChange} />
                <FormInput type="text" label={`Email`} name="email" value={email} required onChange={handleChange} />
                <FormInput type="text" label={`Password`} name="password" value={password} required onChange={handleChange} />
                <FormInput type="text" label={`Comfirm Password`} name="comfirmPassword" value={comfirmPassword} required onChange={handleChange} />
                <FormInput type="submit" value="Sign-up"/>
            </form>
        </div>
    )
}

export default SignUp