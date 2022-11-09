import { useState } from "react";
import { createUserWithEmailAndPass, storeAuthUsers } from '../../utils/firebase/firebase.utils.js'

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

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== comfirmPassword) {
            alert("password does not match")
            return;
        }
        try {
            const { user } = await createUserWithEmailAndPass(email, password);

            await storeAuthUsers(user, { displayName })

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
                <label>Name</label>
                <input type="text" name="displayName" value={displayName} onChange={handleChange} />
                <label >Email</label>
                <input type="text" name="email" value={email} onChange={handleChange} />
                <label>Password</label>
                <input type="text" name="password" value={password} onChange={handleChange} />
                <label>Confirm password</label>
                <input type="text" name="comfirmPassword" value={comfirmPassword} onChange={handleChange} />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default SignUp