// css style file
import styles from "styled-components";

export const ArticleWrap = styles.div`

  font-family: 'Nunito Sans', sans-serif;
  display: flex;
  font-size: 16px;
  line-height: 1.75;
  background-color: #F8F9FA;
  width: 70%;
  justify-content: center;
  `;
export const ArticleContainer = styles.div`
  display: flex
  flex-direction: column;
  margin: 40px 100px;
  width: 70%;
  padding: 30px;
  // height: 500px;
  height: auto;
  background-color: #ffffff;

  @media only screen and (max-width: 1280px) {
    width: 70%;
    margin: 10px auto;
  };
  `;
export const ContextHeader = styles.div`
  color: #333;
  text-align: center;
  line-height: 40px;
  display: flex;
  width: 100%;
  // background-color: pink;
  height: 40px;
  justify-content: space-between;

  @media only screen and (max-width: 410px) {
    flex-direction: column;
  };
  `;
export const TopicHeader = styles.div`
  display: flex;
  `;
export const AvatarContainer = styles.img`
  width: 32px;
  height: 32px;
  padding: 5px 0 0 0;
  `;
export const Name = styles.h2`
  margin-left: 30px;
  color: #394047;
  font-weight: 600;
  `;
export const TopDate = styles.div`
  display: flex;
  color: #8E9091;
`;

export const IconContainer = styles.div`
  margin: 2px 5px;
  @media only screen and (max-width: 410px) {
    margin-right: 40px;
  };
  `;

export const TopText = styles.div`
  margin-top: 30px;
  color: #8E9091;
  `;

export const TopicFooter = styles.div`
  display: flex;
  justify-content: flex-start;
  color: #333333;
  // padding: 30px 0 0 0;
  border-top: solid 1px #e9ecee;
  width: 100%;
  height: 50px;
  margin: 60px 0 30px 0;
  padding: 40px 0;
  color: #8E9091;
  //background-color: blue;
  `;
export const LikeContainer = styles.div`
  display: flex;
  justify-content: space-between;
  margin: 0 30px;
  width: 50px;
  // height: 50px;
  // background-color: blue;
  `

export const Button = styles.button`
  background-color: transparent;
  height: 20px;
  width: 40px;
  border: none;
  `
