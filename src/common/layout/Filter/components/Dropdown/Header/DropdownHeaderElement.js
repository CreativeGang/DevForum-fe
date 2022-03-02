import styled from 'styled-components';

import { IconContext } from 'react-icons';
import { RiArrowDownSLine } from 'react-icons/ri';

export const Wrapper = styled.div`
  height: 68px;
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const Header = styled.div`
  width: fit-content;
  height: 38px;
  font-size: 16px;
  color: #333;
  background-color: #e9ecee;
  overflow: hidden;

  cursor: grab;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-color: #a1a1a1;
  }
`;

export const HeaderName = styled.div`
  padding: 15px 0;
  white-space: nowrap;
  margin: 0 10px;
  padding: 0 10px 0 15px;
`;

export const ArrowIcon = () => {
  return (
    <IconContext.Provider
      value={{
        style: { fontSize: '25px', marginRight: '4px' },
      }}>
      <>
        <RiArrowDownSLine />
      </>
    </IconContext.Provider>
  );
};
