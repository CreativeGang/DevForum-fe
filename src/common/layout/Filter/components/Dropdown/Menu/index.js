import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { filterAdded, loadFilter } from '../../../../../../store/filter';
import { DropdownContext } from '../../../index';
import { Menus, ItemNames, ClickHandler } from './DropdownMenuElement';
// import moment from 'moment';

export default function DropdownMenu(props) {
  const dispatch = useDispatch();
  const isOpen = useContext(DropdownContext);

  return (
    <>
      <Menus toggle={isOpen}>
        <ClickHandler
          onClick={() => {
            dispatch({
              type: filterAdded.type,
              payload: { Params: { [props.headerName]: props.itemName } },
            });
            dispatch(
              loadFilter(
                props.headerName !== 'Latest'
                  ? { [props.headerName]: props.itemName }
                  : {
                      Latest_post: true,
                    }
              )
            );
          }}>
          <ItemNames color={props.color} name={props.headerName}>
            {props.children}
          </ItemNames>
        </ClickHandler>
      </Menus>
    </>
  );
}
