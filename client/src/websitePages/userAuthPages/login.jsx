import axios from 'axios';
import { useContext, useState } from 'react';
import { AuthContext } from "./authContext.jsx"

export default function UserRegister() {
  const [userData, setUserData] = useState({
    username: "timo",
    userPassword: 'timo1234',
  });

  const {user ,error, loading, dispatch} = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({type: "LOGIN_START"})

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', userData, {
        headers: {
          'Content-Type': 'application/json',  // Ensure the correct content type
        },
      });
      // console.log('Response:', response.data);
      dispatch({type: "LOGIN_SUCCESS", payload: response.data})
    } catch (error) {
      dispatch({type: "LOGIN_FAILURE", payload:error.response.data});
    }
  };

  console.log(user);

  return (
    <div className="register--div">
      <input
        type="text"
        name="username"
        placeholder="username"
        value={userData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="userPassword"
        placeholder="userPassword"
        value={userData.userPassword}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Login</button>
      {error && <span>{error.message}</span>}
    </div>
  );
}
