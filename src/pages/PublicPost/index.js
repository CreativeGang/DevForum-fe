import Navbar from '../../common/layout/Navbar';
import Article from '../../common/layout/Article';
import Filter from '../../common/layout/Filter';
import { PublicPostPage, PostWrapper } from './PublicPostElement';

const PublicPost = () => {
  return (
    <PublicPostPage>
      <Navbar />
      <Filter />
      <PostWrapper>
        <Article />
        <Article />
      </PostWrapper>
    </PublicPostPage>
  );
};

export default PublicPost;
