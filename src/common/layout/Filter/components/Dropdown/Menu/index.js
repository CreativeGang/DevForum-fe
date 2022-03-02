import React, { useContext } from 'react';
import { DropdownContext } from '../../../index';

import { Menus, ItemNames } from './DropdownMenuElement';

export default function DropdownMenu(props) {
  const isOpen = useContext(DropdownContext);
  return (
    <>
      <Menus toggle={isOpen}>
        <ItemNames color={props.color} name={props.headerName}>
          {props.children}
        </ItemNames>
      </Menus>
    </>
  );
}
