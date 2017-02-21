import BlogPage from 'components/containers/BlogPage';
import Post from 'components/Post';
import About from 'components/ui/About';
import MainLayout from 'components/layouts/MainLayout';
import { postsPath } from 'helpers/routes';

const Index = {
  path: '/',
  component: BlogPage
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
