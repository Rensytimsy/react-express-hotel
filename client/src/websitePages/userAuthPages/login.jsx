import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./authContext";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    userPassword: "",
  });

  const {user ,error, loading, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData({
      ...userData,
      [name] : value
    })
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", userData, {
        headers: {
          'Content-Type' : "application/json"
        },
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };
   
  console.log(userData)

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          name="username"
          value={userData.username}
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="userPassword"
          name="userPassword"
          value={userData.userPassword}
          onChange={handleChange}
          className="lInput"
        />
        <button onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;