import styled from 'styled-components';

export const FilterWrapper = styled.section`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 16px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  box-sizing: border-box;
  max-width: 960px;
  min-width: 270px;
  max-height: 500px;
  margin: 10px auto 10px;
  z-index: 10;
  justify-content: ${({ width }) => (width < 480 ? 'center' : '')};
  @media only screen and (min-width: 530px) {
    width: 500px;
  }
  @media only screen and (min-width: 600px) {
    width: 520px;
  }
  @media only screen and (min-width: 800px) {
    width: 710px;
  }
  @media only screen and (min-width: 1040px) {
    width: 960px;
  }
`;

export const HandleEvent = styled.div``;
export const HeaderBar = styled.div`
  width: ${({ width }) => (width < 480 ? '90%' : '100%')};
  min-height: 68px;
  max-height; 170px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 auto 0;
  border-bottom: #e9ecee 0.5px solid;
  background-color:white;
  z-index: 1;
`;
export const CategoryElement = styled.div`
  display: flex;
  width: fit-content;
  flex-wrap: nowrap;
  min-width: 260px;
`;
export const MenuWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  top: ${({ width }) => (width > 1000 ? '-18px' : '0')};
  border-top: solid 1px #f9bc64;
  box-shadow: 0px 1px 2px 0px rgb(0 0 0 / 8%);
  ${({ width }) => {
    if (width > 1000) {
      return `width:350px`;
    }
    if (width < 1000 && width > 750) {
      return `width: 710px`;
    }
    if (width < 740 && width > 540) {
      return `min-width:530px`;
    }
    if (width < 540) {
      return `width:90%; justify-content: flex-start`;
    }
  }}
  max-height: 250px;
  opacity:1;
  transition: all 0.6s ease-in-out;
  ${({ toggle }) => {
    if (!toggle)
      return `height: 0px;
    overflow: hidden;
    opacity:0`;
  }}}}
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: #fff;
  z-index: 10;
`;
export const OtherFilter = styled.div`
  margin-left: 0px;
  width: 200px;
  height: 68px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 10;
`;
export const Filters = styled.span`
  color: #8e9091;
  font-size: 16px;
  display: line-block;
  padding: 0 10px;
  cursor: grab;
  transition: color 0.5s;
  &:hover {
    color: #333;
  }
`;
