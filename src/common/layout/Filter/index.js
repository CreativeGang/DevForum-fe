import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterAdded } from '../../../store/filter';
import DropdownHeader from './components/Dropdown/Header/index';
import DropdownMenu from './components/Dropdown/Menu/index';
import {
  FilterWrapper,
  OtherFilter,
  Filters,
  HeaderBar,
  MenuWrapper,
  CategoryElement,
  HandleEvent,
} from './FilterElements';
import { FilterList, FilterName } from './FilterInfo';
import { useClickOutside } from '../../../Hooks/detectClickOutside';
import useWindowSize from '../../../Hooks/useWindowSize';
export const DropdownContext = React.createContext();

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const [filterName, setFilterName] = useState('Category');
  const { width } = useWindowSize();
  const dispatch = useDispatch();

  const DropdownHandler = (name) => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    setFilterName(name);
  };
  let windowWidth = parseInt(width);
  let domNode = useClickOutside(() => setIsOpen(false));

  return (
    <DropdownContext.Provider value={isOpen}>
      <FilterWrapper width={windowWidth} ref={domNode}>
        <HeaderBar width={windowWidth}>
          <CategoryElement>
            <HandleEvent onClick={() => DropdownHandler(FilterName[0])}>
              <DropdownHeader headerName={'All Categories'} />
            </HandleEvent>
            <HandleEvent onClick={() => DropdownHandler(FilterName[1])}>
              <DropdownHeader headerName={'Tags'} />
            </HandleEvent>
          </CategoryElement>
          {windowWidth < 805 ? (
            <HandleEvent onClick={() => DropdownHandler(FilterName[2])}>
              <DropdownHeader headerName={'SortBy'} />
            </HandleEvent>
          ) : (
            <OtherFilter>
              <Filters
                onClick={() => {
                  dispatch({
                    type: filterAdded.type,
                    payload: { Params: { latest_post: true } },
                  });
                }}>
                Latest
              </Filters>
              <Filters>MostLiked</Filters>
            </OtherFilter>
          )}
        </HeaderBar>

        <MenuWrapper width={windowWidth} toggle={isOpen}>
          {FilterList[FilterName.indexOf(filterName)][filterName].map(
            (element) => {
              return (
                <DropdownMenu
                  key={element.key}
                  color={element.color}
                  headerName={element.topic}
                  itemName={element.name}>
                  {element.name}
                </DropdownMenu>
              );
            }
          )}
        </MenuWrapper>
      </FilterWrapper>
    </DropdownContext.Provider>
  );
}
