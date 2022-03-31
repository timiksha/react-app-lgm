import React from "react";
import { getUsers } from "../apis/user";

const Navbar = ({  setUsers,  setIsLoading, setShowUsers }) => {
  return (
    <header>
      <h1 className="logo">My users</h1>
      <button
        className="btn"
        onClick={async () => {
          setShowUsers(true);
          setIsLoading(true);
          const data = await getUsers();
          setUsers(data);
          setIsLoading(false);
        }}
      >
        Get users
      </button>
    </header>
  );
};

export default Navbar;
