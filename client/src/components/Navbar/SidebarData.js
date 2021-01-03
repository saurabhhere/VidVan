import React from 'react';
import * as AiIcons from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {SiMinds} from 'react-icons/si'
import {IoGameControllerOutline, IoChatbubbles} from 'react-icons/io5'
export const SidebarData = [
  {
    title: 'मुखपृष्ठम्',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Learn',
    path: '/learn',
    icon: <SiMinds />,
    cName: 'nav-text'
  },
  {
    title: 'Games & Quizzes',
    path: '/game',
    icon: <IoGameControllerOutline/>,
    cName: 'nav-text'
  },
  {
    title: 'Chat-room',
    path: '/chatroom',
    icon: <IoChatbubbles />,
    cName: 'nav-text'
  },
  {
    title: 'ई-पुस्तकम्',
    path: '/ebooks',
    icon: <BiBook />,
    cName: 'nav-text'
  }
];