import React from 'react';
import BlogList from 'components/containers/BlogList';
import Helmet from 'react-helmet';

const Index = ({ items }) => (
  <div>
    <BlogList items={items}/>
    <Helmet title='Список постов'/>
  </div>
);

Index.propTypes = {
  items: BlogList.propTypes.items
};

export default Index;
