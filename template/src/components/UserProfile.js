import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "react-bootstrap/Spinner";

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Spinner animation="border" variant="primary" />;
  }

  return (
    isAuthenticated && (
      <article>
        {user?.picture && <img src={user.picture} alt={user?.name} />}
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
        <ul>
          {Object.keys(user).map((userKey, idx) => <li key={idx}>{userKey}: {user[userKey]}</li>)};
        </ul>
      </article>
    )
  );
};

export default UserProfile;