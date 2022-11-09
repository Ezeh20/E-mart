import { signInWithGooglePopup, storeAuthUsers } from "../../utils/firebase/firebase.utils.js";
import SignUp from "../../Components/Sign-up-component/sign-up-component.jsx";

const Signin = () => {
  const login = async () => {
    const { user } = await signInWithGooglePopup();
    storeAuthUsers(user)
  };

  return (
    <div>
      <h1 >sign-in</h1>
      <button onClick={login} >Sign-in</button>
      <SignUp />
    </div>
  );
};

export default Signin;
