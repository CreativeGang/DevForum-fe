import Navbar from '../../common/layout/Navbar';
import Article from '../../common/layout/Article';
import Filter from '../../common/layout/Filter';
import { PublicPostPage, PostWrapper } from './PublicPostElement';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadPosts, selectFirstNPosts } from '../../store/posts';

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
