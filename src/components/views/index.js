import React from 'react';
import PropTypes from 'prop-types';
import BlogList from 'components/containers/BlogList';
import Helmet from 'react-helmet';
import { Button } from 'semantic-ui-react';
import AddBlogContainer from 'containers/form/AddBlogContainer';

const Index = ({ items, adding, addClick }) => (
  <div>
    <Button icon={adding ? 'cancel' : 'add'}
     label={adding ? 'Cancel' : 'Add Post'} onClick={addClick}/>
     {!adding || <AddBlogContainer/>}
    <BlogList items={items}/>
    <Helmet title='Список постов'/>
  </div>
);

Index.propTypes = {
  items: BlogList.propTypes.items,
  adding: PropTypes.bool,
  addClick: PropTypes.func
};

export default Index;
