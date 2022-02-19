import React, { useState } from 'react';
import styled from 'styled-components';
import { GiCowled } from 'react-icons/gi';
import { Drawer } from 'antd';
import { useRouter } from 'next/router';
import links from './links';
import GodLinkItem from './components/GodLinkItem';

const MenuButton = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  * {
    color: white;
    font-size: 32px;
  }
  z-index: 999999;
`;

const GodMode = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  return (
    <>
      <MenuButton onClick={() => setVisible(!visible)}>
        <GiCowled />
      </MenuButton>
      <Drawer bodyStyle={{backgroundColor: 'white'}} placement="left" visible={visible} onClose={() => setVisible(false)}>
        {links.map((link) => (
          <GodLinkItem key={link.id} link={link} onClickUrl={() => {
            setVisible(false)
            router.push(link.path)
          }} />
        ))}
      </Drawer>
    </>
  );
};

export default GodMode;
