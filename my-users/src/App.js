import { useState } from "react";
import { Navbar, Spinner, UserGrid } from "./components";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  AOS.init({ duration: 500 });
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  return (
    <>
      <Navbar
        setUsers={setUsers}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setShowUsers={setShowUsers}
      />
      {showUsers ? (
        isLoading ? (
          <div className="spinner-outer">
            <Spinner />
          </div>
        ) : (
          <UserGrid users={users} />
        )
      ) : (
        <h2 className="display-message">
          Click on the button to display the users
        </h2>
      )}
    </>
  );
};

export default App;
