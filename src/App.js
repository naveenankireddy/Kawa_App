import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import User_Card from "./components/User_Card/index.js";
import User_Details from "./components/User_Details";
import LoadingScreen from "./components/Loading_Screen";
import AppBar from "./components/AppBar";

function App() {
  //Get users
  const [users, setUsers] = useState([]);
  // Get single user when click happens
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const url = `https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20`;
  // fetching api using axios
  const get_user_info = () => {
    axios
      .get(url)
      .then((response) => {
        const usersData = response.data.results;
        setUsers(usersData);
        console.log(usersData);
      })
      .catch((err) => console.error(`Error ${err}`));
  };
  // onclick event handling to display user details
  const handleUser = (e, user) => {
    e.preventDefault();
    console.log(user);
    setUser(user);
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    get_user_info();
    setTimeout(() => setLoading(false), 5000);
    setUser({ user });
  }, []);

  return (
    <div className="main_section">
      {loading === false ? (
        <div className="App">
          <div>
            <AppBar />
          </div>
          <div className="users">
            {user.name && <User_Details user={user} />}

            <div className="grid">
              <User_Card users={users} handleUser={handleUser} />
            </div>
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}

export default App;
