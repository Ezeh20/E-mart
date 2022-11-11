import { Link } from "react-router-dom";
import { signInWithGooglePopup, storeAuthUsers } from "../../utils/firebase/firebase.utils.js";
import FormInput from "../../Components/Form-input-component/form-input.jsx";
import Button from "../../Components/Button-component/button.component.jsx";
import "./sign-in.scss"

const Signin = () => {
  const login = async () => {
    const { user } = await signInWithGooglePopup();
    storeAuthUsers(user)
  };

  return (
    <div>
      <div className="sign_in up">
        <h1 className="title">sign-in</h1>
        <form className="form container-three">
          <FormInput label={`Email`} inputOptions={{
            type: "email",
            id: "email",
            required: true,
            value: "",
            className: 'form-input'
          }} />
          <FormInput label={`Password`} inputOptions={{
            type: "password",
            id: "password",
            required: true,
            value: "",
            className: 'form-input'
          }} />
          <div className="log">
            <Button onClick={login}  type="submit">Sign - in</Button>
            <Button onClick={login} buttonType="google" type="submit">Sign - in with google</Button>
          </div>
          <div className="other">
            <p className="text">Don't have an account ?</p>
            <Link  to="/sign-up">
              <Button buttonType='redirect'>Sign - up</Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
