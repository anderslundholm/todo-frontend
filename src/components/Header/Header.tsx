import React from 'react';
import { Menu, Icon } from 'antd';


const Header: React.FC = () => {
  return (
    <Menu mode="horizontal">
    <Menu.Item key="home">
    <a href="/" rel="noopener noreferrer">
      <Icon type="home" />
      Home
    </a>
    </Menu.Item>
    <Menu.Item key="lists">
    <a href="/todos" rel="noopener noreferrer">
      <Icon type="read" />
        Todo Lists</a>
    </Menu.Item>
  </Menu>
  )
}

export default Header;
