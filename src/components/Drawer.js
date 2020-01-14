import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import '../styling/drawer.scss';

function postOnClick(user) {
  return () => axios.post('/user', user).then(() => {
    window.location.href = '/';
  });
}

const Drawer = ({ isShowing, hide, users }) => isShowing ? ReactDOM.createPortal(

  <div className="wrapper" id="slide-in" tabIndex={- 1} role="dialog">
    <button type="button" className="close-button" aria-label="Close" style={{ backgroundColor: 'black' }} onClick={hide}>
      <span aria-hidden="true">&times;</span>
    </button>
    {users.map(user => (
      <button key={user.id} id="user-button1" onClick={postOnClick(user)}>
        {user.name}
      </button>
    ))}
  </div>, document.body
) : null;

export default Drawer;

