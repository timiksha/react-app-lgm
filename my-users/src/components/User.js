import React from "react";

const User = ({ data }) => {
  const { email, first_name, last_name, avatar } = data;
  return (
    <div data-aos="zoom-in" className="user-card">
      <img src={avatar} alt="" />
      <h2>
        {first_name} {last_name}
      </h2>
      <p>{email}</p>
    </div>
  );
};

export default User;
