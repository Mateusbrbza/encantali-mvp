import React, {useContext} from 'react';
import Sidebar from '../sidebar/Sidebar';
import {BsBag} from 'react-icons/bs';
import { SidebarContext } from '../../contexts/SidebarContext';

const Header: React.FC = () => {
  const {isOpen, handleClose} = useContext(SidebarContext);

  return (
    <header>
      <div>
        Header
      </div>
      <div>
        <Sidebar />
      </div>
      {isOpen && <Sidebar />}
    </header>
  );
};

export default Header;