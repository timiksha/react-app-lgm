import React from "react";
import User from "./User";

const UserGrid = ({ users }) => {
  console.log("Users:", users);
  return (
    <>
      {users === [] ? (
        <div>There is no user to display</div>
      ) : (
        <section className="user-grid">
          {users.map((user, index) => {
            return <User data={user} key={index} />;
          })}
        </section>
      )}
    </>
  );
};

export default UserGrid;
