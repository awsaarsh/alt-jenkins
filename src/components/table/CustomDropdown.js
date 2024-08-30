import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

function CustomDropdown(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
    const colorCode = (e) =>{
        if(e === 'Ravi') return 'ravi';
        if(e === 'Jatin') return 'jatin';
        if(e ===  'Charul') return 'charul';
    }
  return (    
      <Dropdown className='table-access custom-dropdown' isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className={colorCode(props.selected)} caret>{props.selected}</DropdownToggle>
        <DropdownMenu>        
          <DropdownItem>Ravi</DropdownItem>
          <DropdownItem>Jatin</DropdownItem>
          <DropdownItem>Charul</DropdownItem>
        </DropdownMenu>
      </Dropdown>
  );
}


export default CustomDropdown;