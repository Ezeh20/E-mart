import { Link } from "react-router-dom";
import { signInWithGooglePopup, storeAuthUsers } from "../../utils/firebase/firebase.utils.js";
import FormInput from "../../Components/Form-input-component/form-input.jsx";
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
          <FormInput label={`Email`} className="input" id={`email`} required type="email" />
          <FormInput label={`Password`} className="input" id={`password`} required type="password" />
          <div className="log">
            <FormInput onClick={login} className="submit-btn" type="submit" value="Sign - in " />
            <FormInput onClick={login} className="submit-btn" type="submit" value="Sign - in with google" />
          </div>
          <div className="other">
            <p className="text">Don't have an account ?</p>
            <Link className="sign-up " to="/sign-up">Sign - up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
