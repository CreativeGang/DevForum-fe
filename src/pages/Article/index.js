import React, { useState }from 'react';
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
  Button
} from './ArticleElements';
import { IconContext } from 'react-icons/lib';


const Article = () => {
  const [showLike, setShowLike ] = useState(false)
  const [removeLike, setRemoveLike ] = useState(false)
  const handleAddlike = () => {
    setShowLike(true)
    setRemoveLike(false)
  }
  const handleRemovelike = () => {
    setShowLike(false)
    setRemoveLike(true)
  }
  return (
    <ArticleWrap>
      <ArticleContainer>
        <ContextHeader>
          <TopicHeader>
            <AvatarContainer src={AvatarImg} alt="avatar" />
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
          Welcome to Prey.A lot of this game is going to feel familiar — you’ll
          see bits and pieces from a dozen well-loved games in its DNA.But that
          doesn’t mean you’re going to immediately understand how everything
          works. That’s what we’re here for. Let’s talk about some of the habits
          you’re going to have to pick up, concepts you’ll have to learn and
          choices you’re going to be making as you play.
        </TopText>
        <TopText>
          We’re going to break it down into three rough categories: Your world,
          your enemies (and ways to kill them) and yourself.
        </TopText>
        <TopicFooter>
          <LikeContainer>
            <Button
            onClick={handleRemovelike}
            >
            <IconContext.Provider
            value={{size: removeLike ? '1.5em': '1.2em'}}
            >
              <div>
              <GrDislike />
              </div>
            </IconContext.Provider>
            </Button>
            <span>21</span>
          </LikeContainer>
          <LikeContainer>
            <Button
            onClick={handleAddlike}
            >
            <IconContext.Provider 
            value={{size: showLike ? '1.5em': '1.2em'}}
            >
            <div><GrLike /></div>
            </IconContext.Provider>
            </Button>
            <span>08</span>
          </LikeContainer>
        </TopicFooter>
      </ArticleContainer>
    </ArticleWrap>
  );
};

export default Article;
