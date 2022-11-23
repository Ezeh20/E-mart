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

    <div className="sign_in up">
      <div className="split container-three">
        <h2 className="title">Sign - in</h2>
        <Button className="goo" onClick={login} buttonType={`google`} >Sign - in with google</Button>
        <div className="spin">
          <span className="or">OR</span>
          <div className="line"></div>
        </div>

      </div>

      <form className="form container-three"  >
        <FormInput label={`Email`} inputOptions={{
          type: "email",
          id: "email",

          value: "",
          className: 'form-input'
        }} />
        <FormInput label={`Password`} inputOptions={{
          type: "password",
          id: "password",

          value: "",
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
