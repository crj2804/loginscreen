import React from 'react';
import Drawer from "./Drawer";
import useDrawer from './useDrawer';
import logo from '../images/Logo.png';
import '../styling/login.scss';
import axios from 'axios';

const Login = () => {
  const [isShowing, setToggle] = useDrawer();
  const [users, setUsers] = React.useState();
  React.useEffect(() => {
    axios.get('http://localhost:3333/users').then(res => setUsers(res.data));
  }, []);

  if (!users) return null;

  return (
    <div className={`center-group${isShowing ? " blur" : ""}`}>
      <img
        className="logo-style"
        src={logo}
        alt="Logo"
      />
      <button className="button-style" onClick={setToggle}>LOGIN</button>
      <Drawer
        isShowing={isShowing}
        hide={setToggle}
        users={users}
      />
    </div>
  );
};

export default Login;