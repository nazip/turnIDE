import BlogPage from '../components/containers/blogPage';
import Post from '../components/post';
import About from '../components/ui/about';
import MainLayout from '../components/layouts/mainLayout';

const Index = {
  path: '/',
  component: BlogPage
};

const BlogsItem = {
  path: '/post/:id',
  component: Post
};

const AboutBlog = {
  path: '/about',
  component: About
};

export default  {
  MainLayout,
  childRoutes: [
    Index,
    BlogsItem,
    AboutBlog
  ]
};
