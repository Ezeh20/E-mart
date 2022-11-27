import { Link } from "react-router-dom";
import { signInWithGooglePopup, storeAuthUsers, signInUserWithEmailAndPass } from "../../../utils/firebase/firebase.utils.js";
import { useState } from "react";
import FormInput from "../../../Components/Form-input-component/form-input.jsx";
import Button from "../../../Components/Button-component/button.component.jsx";
import "./sign-in.scss"


const Signin = () => {
  //Set the original input of the form
  const form = {
    email: "",
    password: ""
  }
  //let the formDefault state hold the original input values
  const [formDefault, setFormDefault] = useState(form)
  //destucture elements needed from the formDefault state
  const { email, password } = formDefault;

  //onChange ? setFormDefault based on the input value matched by the form name 
  const handleChange = event => {
    const { name, value } = event.target
    setFormDefault({ ...formDefault, [name]: value })
  }

  const onSubmit = async event => {
    event.preventDefault()

    try {
      const response = await signInUserWithEmailAndPass(email, password)
      console.log(response)
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("wrong email or password")
      } else {
        return
      }
    }
  }

  const login = async () => {
    const { user } = await signInWithGooglePopup();
    storeAuthUsers(user)
  };

  return (

    <div className="sign_in up">
      <div className="split container-three">
        <h2 className="title">Sign - in</h2>
        <Button className="goo" onClick={login} buttonType={`google`} >Sign - in with google</Button>
        <div className="spin">
          <span className="or">OR</span>
          <div className="line"></div>
        </div>

      </div>

      <form className="form container-three" onSubmit={onSubmit} >
        <FormInput label={`Email`} inputOptions={{
          type: "email",
          id: "email",
          name: "email",
          required: true,
          onChange: handleChange,
          value: email,
          className: 'form-input'
        }} />
        <FormInput label={`Password`} inputOptions={{
          type: "password",
          id: "password",
          name: "password",
          required: true,
          onChange: handleChange,
          value: password,
          className: 'form-input'
        }} />
        <div className="log">
          <Button type="submit" buttonType={`primary`} >Sign - in</Button>
        </div>
        <div className="other">
          <p className="text">Don't have an account ?</p>
          <Link to="/sign-up">
            <Button buttonType='redirect'>Sign - up</Button>
          </Link>
        </div>
      </form>
    </div>


  );
};

export default Signin;
