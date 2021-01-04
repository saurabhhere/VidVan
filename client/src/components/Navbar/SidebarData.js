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
    title: 'अध्ययन',
    path: '/learn',
    icon: <SiMinds />,
    cName: 'nav-text'
  },
  {
    title: 'क्रीडा परीक्ष् च',
    path: '/game',
    icon: <IoGameControllerOutline/>,
    cName: 'nav-text'
  },
  {
    title: 'संलप्-कक्षः',
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