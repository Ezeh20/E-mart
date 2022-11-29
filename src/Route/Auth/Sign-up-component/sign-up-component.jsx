import { useState } from "react";
import { createUserWithEmailAndPass, storeAuthUsers } from '../../../utils/firebase/firebase.utils.js'
import { useNavigate } from "react-router-dom";
import FormInput from "../../../Components/Form-input-component/form-input.jsx";
import Button from "../../../Components/Button-component/button.component.jsx";
import "./sign-up.scss"


const SignUp = () => {
    //Set the original input of the form
    const defaultForm = {
        displayName: '',
        email: '',
        password: '',
        comfirmPassword: ''
    }

    const navigate = useNavigate()
    //let the formDefault state hold the original input values
    const [formDefault, setFormDefault] = useState(defaultForm)
    //destucture elements needed from the formDefault state
    const { displayName, email, password, comfirmPassword } = formDefault

    //onChange ? setFormDefault based on the input value matched by the form name 
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
            navigate("/")
            await storeAuthUsers(user, { displayName });
            clear();

        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                alert('Email already exits')
            } else {
                console.log('error')
            }
        }
    }

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
                <Button type="submit" buttonType={`primary`}>Sign - Up</Button>
            </form>
        </div>
    )
}

export default SignUp