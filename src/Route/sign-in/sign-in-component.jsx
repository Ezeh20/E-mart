import { signInWithGooglePopup, storeAuthUsers } from "../../utils/firebase/firebase.utils.js";

const Signin = () => {
  const login = async () => {
    const {user} = await signInWithGooglePopup();
    storeAuthUsers(user)
  };

  return (
    <div>
      <h1 >sign-in</h1>
      <button onClick={login} >Sign-in</button>
    </div>
  );
};

export default Signin;
