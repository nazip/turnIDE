import React from 'react';
import TextBox from 'components/elements/TextBox';
import ToHome from 'components/ui/ToHome';
import BlogItem from 'components/ui/BlogItem';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import EditBlog from 'components/ui/EditBlog';
import { Button } from 'semantic-ui-react';

const Post = ({item, edit, editClick}) => {
  if (item)
    return <div>
            <ToHome/>
            <BlogItem item={item}/>
            <Button icon='edit' onClick={editClick}/>
            {!edit || <EditBlog/>}
            <Helmet title={item.txt}/>
           </div>;
  return <TextBox txt={'Item not found'}/>;
};


Post.propTypes = {
  item: PropTypes.object,
  edit: PropTypes.bool,
  editClick: PropTypes.func
};
export default Post;
