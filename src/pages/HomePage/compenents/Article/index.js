import React from 'react';
import styles from 'styled-components';
import { BsStopwatch } from 'react-icons/bs';
import AvatarImg from '../../../../static/images/B.svg';
import { GrLike, GrDislike } from 'react-icons/gr';


const ArticleWrap = styles.div`
  font-family: 'Nunito Sans', sans-serif;
  display: flex;
  font-size: 16px;
  line-height: 1.75;
  background-color: #F8F9FA;
  `
const ArticleContainer = styles.div`
  display: flex
  flex-direction: column;
  margin: 40px 100px;
  width: 70%;
  padding: 30px;
  // height: 500px;
  height: auto;
  background-color: #ffffff;

  @media only screen and (max-width: 1280px) {
    width: 90%;
    margin: 10px auto;
  };
  `
const ContextHeader = styles.div`
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
  `
const TopicHeader = styles.div`
  display: flex;
  `
const AvatarContainer = styles.img`
  width: 32px;
  height: 32px;
  padding: 5px 0 0 0;
  `
const Name = styles.h2`
  margin-left: 30px;
  color: #394047;
  font-weight: 600;
  `
const TopDate = styles.div`
  display: flex;
`

const IconContainer = styles.div`
  margin: 2px 5px;
  @media only screen and (max-width: 410px) {
    margin-right: 40px;
  };
  `

const TopText = styles.div`
  margin-top: 30px;
  color: #8E9091;
  `

const TopicFooter = styles.div`
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
  `
const LikeContainer = styles.div`
  display: flex;
  justify-content: space-between;
  margin: 0 30px;
  width: 50px;
  // height: 50px;
  // background-color: blue;
  `


const Article = () => {
  return <ArticleWrap>
    <ArticleContainer>
      <ContextHeader>
        <TopicHeader>
          <AvatarContainer src={AvatarImg} alt='avatar' />
          <Name>Benjamin Caesar</Name>
        </TopicHeader>
        <TopDate>
          <IconContainer>
            <BsStopwatch />
          </IconContainer>
          <h2>06 May, 2017</h2>
        </TopDate>
      </ContextHeader>
      <TopText>
        Welcome to Prey.A lot of this game is going to feel familiar — you’ll see bits and pieces from a dozen well-loved
        games in its DNA.But that doesn’t mean you’re going to immediately understand how everything works.
        That’s what we’re here for. Let’s talk about some of the habits
        you’re going to have to pick up, concepts you’ll have to learn and choices you’re going to be
        making as you play.
      </TopText>
      <TopText>
        We’re going to break it down into three rough categories:
        Your world, your enemies
        (and ways to kill them) and yourself.
      </TopText>
      <TopicFooter>
        <LikeContainer>
          <GrDislike />
          <span>21</span>
          </LikeContainer>  
          <LikeContainer>
          <GrLike />
          <span>08</span>
          </LikeContainer> 
      </TopicFooter>
    </ArticleContainer>
  </ArticleWrap>
}

export default Article;
