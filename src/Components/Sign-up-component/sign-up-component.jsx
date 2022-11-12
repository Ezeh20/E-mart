import { useState } from "react";
import { createUserWithEmailAndPass, storeAuthUsers } from '../../utils/firebase/firebase.utils.js'
import FormInput from "../Form-input-component/form-input.jsx";
import Button from "../Button-component/button.component.jsx";
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
            <h2 className="title">Sign - up</h2>
            <form className="form container-three" onSubmit={handleSubmit}>
                <FormInput label={`Name`} inputOptions={{
                    type: "text",
                    id: "name",
                    name: "displayName",
                    required: true,
                    value: displayName,
                    onChange: handleChange,
                    className: 'form-input'
                }} />
                <FormInput label={`Email`} inputOptions={{
                    type: "text",
                    id: "email",
                    name: "email",
                    required: true,
                    value: email,
                    onChange: handleChange,
                    className: 'form-input'
                }} />
                <FormInput label={`Password`} inputOptions={{
                    type: "password",
                    id: "password",
                    name: "password",
                    required: true,
                    value: password,
                    onChange: handleChange,
                    className: 'form-input'
                }} />
                <FormInput label={`Comfirm Password`} inputOptions={{
                    type: "password",
                    id: "confirmPassword",
                    name: "comfirmPassword",
                    required: true,
                    value: comfirmPassword,
                    onChange: handleChange,
                    className: 'form-input'
                }} />
                <Button type="submit">Sign - Up</Button>
            </form>
        </div>
    )
}

export default SignUp