import React from 'react';
import { BsStopwatch } from 'react-icons/bs';
import AvatarImg from '../../static/images/B.svg';
import { GrLike, GrDislike } from 'react-icons/gr';
import {
  ArticleWrap,
  ArticleContainer,
  ContextHeader,
  TopicHeader,
  AvatarContainer,
  Name,
  TopDate,
  IconContainer,
  TopText,
  TopicFooter,
  LikeContainer,
} from './ArticleElements';

const Article = (props) => {
  return (
    <ArticleWrap>
      <ArticleContainer>
        <ContextHeader>
          <TopicHeader>
            <AvatarContainer src={AvatarImg} alt='avatar' />
            <Name>{props.post.name}</Name>
          </TopicHeader>
          <TopDate>
            <IconContainer>
              <BsStopwatch />
            </IconContainer>
            <h2>{props.post.date}</h2>
          </TopDate>
        </ContextHeader>
        <TopText>{props.post.text}</TopText>
        <TopText>
          category: {`${props.post.category} tags: ${props.post.tags}`}
        </TopText>
        <TopicFooter>
          <LikeContainer>
            <GrDislike />
            <span> {props.post.likes || '0'}</span>
          </LikeContainer>
          <LikeContainer>
            <GrLike />
            <span>08</span>
          </LikeContainer>
        </TopicFooter>
      </ArticleContainer>
    </ArticleWrap>
  );
};

export default Article;
