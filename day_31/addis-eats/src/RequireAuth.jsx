import { Navigate, Outlet, useLocation } from "react-router-dom";

function RequireAuth() {
  const isSignedIn = localStorage.getItem("isSignedIn") === "true";

  const location = useLocation();

  if (!isSignedIn) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default RequireAuth;
