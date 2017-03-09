// import BlogPage from 'components/containers/BlogPage';
// import Post from 'components/views/Post';
import About from 'components/ui/About';
import MainLayout from 'components/layouts/MainLayout';
import { postsPath } from 'helpers/routes';
import { fetchPosts } from 'components/redux/actions/Posts';
import { fetchPost } from 'components/redux/actions/Post';
import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';

const Index = {
  path: '/',
  component: PostsContainer,
  prepareData: (store) => {
    store.dispatch(fetchPosts());
  }
};

const BlogsItem = {
  path: postsPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    store.dispatch(fetchPost(params.id));
  }
};

const AboutBlog = {
  path: '/about',
  component: About
};

export default  {
  component: MainLayout,
  childRoutes: [
    Index,
    BlogsItem,
    AboutBlog
  ]
};
