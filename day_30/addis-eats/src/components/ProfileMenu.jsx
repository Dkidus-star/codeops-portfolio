import { memo } from "react";
import PropTypes from "prop-types";

function ProfileMenu({ name, onLogout }) {
  console.log("ProfileMenu rendered");

  return (
    <div>
      <h2>Profile</h2>
      <p>Welcome, {name}</p>

      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

ProfileMenu.propTypes = {
  name: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default memo(ProfileMenu);
