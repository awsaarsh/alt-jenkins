import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

function Accessibility(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
    const colorCode = (e) =>{
        if(e === 'View only') return 'view';
        if(e === 'Edit') return 'edit';
        if(e ===  'All') return 'all';
    }
  return (
    
      <Dropdown className='table-access' isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className={colorCode(props.selected)} caret>{props.selected}</DropdownToggle>
        <DropdownMenu>
          
          <DropdownItem>View Only</DropdownItem>
          <DropdownItem>Edit</DropdownItem>
          <DropdownItem>All</DropdownItem>
        </DropdownMenu>
      </Dropdown>
  
  );
}


export default Accessibility;