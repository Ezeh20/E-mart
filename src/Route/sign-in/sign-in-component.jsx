import { Link } from "react-router-dom";
import { signInWithGooglePopup, storeAuthUsers } from "../../utils/firebase/firebase.utils.js";
import "./sign-in.style.scss"

const Signin = () => {
  const login = async () => {
    const { user } = await signInWithGooglePopup();
    storeAuthUsers(user)
  };

  return (
    <div>
      <h1 >sign-in</h1>
      <button onClick={login} >Sign-in</button>
      <h1>Don't have an account ?</h1>
      <Link className="sign-up" to="/sign-up">Sign up</Link>
    </div>
  );
};

export default Signin;
