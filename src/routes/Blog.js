import BlogPage from 'components/containers/BlogPage';
import Post from 'components/views/Post';
import About from 'components/ui/About';
import MainLayout from 'components/layouts/MainLayout';
import { postsPath } from 'helpers/routes';
import { fetchPosts } from 'components/actions/Posts';

const Index = {
  path: '/',
  component: BlogPage,
  prepareData: (store) => (store.dispatch(fetchPosts()))
};

const BlogsItem = {
  path: postsPath(),
  component: Post
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
