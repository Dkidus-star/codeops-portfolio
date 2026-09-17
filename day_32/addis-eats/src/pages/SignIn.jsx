import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();

  const { signIn } = useAuth();

  const from = location.state?.from?.pathname || "/";

  function handleSignIn() {
    signIn();
    navigate(from, { replace: true });
  }

  return (
    <section>
      <h2>Sign In</h2>

      <p>Sign in to continue to checkout.</p>

      <button onClick={handleSignIn}>Sign In</button>
    </section>
  );
}

export default SignIn;
