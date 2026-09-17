import { useLocation, useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  function handleSignIn() {
    localStorage.setItem("isSignedIn", "true");

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
