import Article from '../../common/layout/Article';
import Filter from '../../common/layout/Filter';
import {
  PublicPostPage,
  PostContainer,
  PostWrapper,
} from './PublicPostElement';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadPosts, selectFirstNPosts } from '../../store/posts';
import { NavButton } from './PublicPostElement';

const PublicPost = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectFirstNPosts);
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <>
      <PublicPostPage>
        <Filter />
        <NavButton to="/create_post">Post</NavButton>
        <PostWrapper>
          <PostContainer>
            {posts.map((post) => (
              <Article key={post._id} post={post} />
            ))}
          </PostContainer>
        </PostWrapper>
      </PublicPostPage>
    </>
  );
};

export default PublicPost;
