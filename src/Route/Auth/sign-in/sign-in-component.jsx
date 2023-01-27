import { Link } from "react-router-dom";
import { signInWithGooglePopup, signInUserWithEmailAndPass } from "../../../utils/firebase/firebase.utils.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../../Components/Form-input-component/form-input.jsx";
import Button from "../../../Components/Button-component/button.component.jsx";
import "./sign-in.scss"


const Signin = () => {
  //Set the original input of the form
  const form = {
    email: "",
    password: ""
  }
  const navigate = useNavigate()
  //let the formDefault state hold the original input values
  const [formDefault, setFormDefault] = useState(form)

  //destucture elements needed from the formDefault state
  const { email, password } = formDefault;

  //onChange ? setFormDefault based on the input value matched by the form name 
  const handleChange = event => {
    const { name, value } = event.target
    setFormDefault({ ...formDefault, [name]: value })
  }
  //import the userContext to get access to the setter function

  //clear form input
  const clear = () => {
    setFormDefault(form)
  }

  const onSubmit = async event => {
   
    event.preventDefault();
    try {
      //get the user after auth the pass it to the setter function so that the current
      //user state can be updated 
      await signInUserWithEmailAndPass(email, password)
      navigate("/")
      clear() 
    }
    catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("wrong email or password");
          break;
        case "auth/user-not-found":
          alert("wrong email or password");
          break;
        default: console.log(error)
      }
    }
  }

  const login = async () => {
    await signInWithGooglePopup();
  };

  return (

    <div className="sign_in up">
      <div className="split container-form">
        <h2 className="title">Sign - in</h2>
        <Button className="goo" onClick={login} buttonType={`google`} >Sign - in with google</Button>
        <div className="spin">
          <span className="or">OR</span>
          <div className="line"></div>
        </div>

      </div>

      <form className="form container-form" onSubmit={onSubmit} >
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
