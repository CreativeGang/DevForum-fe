import Navbar from '../../common/layout/Navbar';
import Article from '../Article';
import Filter from '../../common/layout/Filter';
import { PublicPostPage, PostWrapper } from './PublicPostElement';
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
        <Navbar />
        <Filter />

        <NavButton to='/create_post'>Post</NavButton>
        <PostWrapper>
          {posts.map((post) => (
            <Article key={post._id} post={post} />
          ))}
        </PostWrapper>
      </PublicPostPage>
    </>
  );
};

export default PublicPost;
