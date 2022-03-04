import styled from 'styled-components';

export const Menus = styled.div`
 
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  
  margin: 0 5px;
  max-width: 100%;
  height: 100px;
  max-height: 200px
  cursor: grab;
`;

export const ItemNames = styled.span`
  display: inline-block;
  min-width: 50px;
  max-width: 340px;
  text-align: center;
  font-size:16px;
  height: fit-content;
  color: ${(props) => (props.name === 'Tags' ? 'white' : '#8e9091')};
  padding: 3px 5px;
  margin: 10px;
  border-radius: 2px;
  background-color: ${(props) =>
    props.name === 'Tags' ? props.color : 'transparent'};

  transition: all 0.8s;
  &:hover {
    color: ${({ name }) => (name !== 'Tags' ? 'black' : '#fff')};};
  }

  &::before {
    content: '';
    height: 8px;
    margin: 0 4px;
    margin-bottom: 1px;
    display: ${(props) => (props.name === 'Tags' ? 'none' : 'inline-block')};
    width: 8px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
  }
`;
