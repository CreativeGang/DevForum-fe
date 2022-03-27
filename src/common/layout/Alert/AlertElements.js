import styled from 'styled-components';

export const AlertBox = styled.div`
  background-color: red;
  text-align: center;
  padding: 5px 12px;
  color: #fff;
  border-radius: 3px;
  font-family: 'Nunito Sans', sans-serif;
  margin-bottom: 5px;
  &.alert-danger {
    background-color: #faeeed;
    border: 1px solid transparent;
    color: #4a1f1d;
  }
  @media only screen and (min-width: 1040px) {
    max-width: 100%;
    padding: 25px;
    position: absolute;
    top: 50%;
  }
`;
