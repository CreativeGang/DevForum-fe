import React from 'react';
import { BsStopwatch } from 'react-icons/bs';
import AvatarImg from '../../../../static/images/B.svg';
import { GrLike, GrDislike } from 'react-icons/gr';
import { ArticleWrap, 
  ArticleContainer, 
  ContextHeader, 
  TopicHeader, 
  AvatarContainer, 
  Name, 
  TopDate, 
  IconContainer, 
  TopText, 
  TopicFooter, LikeContainer } from './Article';

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
