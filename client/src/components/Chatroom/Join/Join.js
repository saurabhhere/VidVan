import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {animateScroll as scroll} from 'react-scroll';
import {FiArrowUp} from 'react-icons/fi'
import Navbar from '../../Navbar/Navbar';

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  window.scrollTo(0, 0);

  return (
    <div className="join-bg">
    <Navbar />
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="chat-heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'chat-button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
    <div onClick={() => {scroll.scrollToTop();}} className="top-button"><FiArrowUp /></div>
    </div>
  );
}
