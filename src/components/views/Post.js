import React from 'react';
import TextBox from 'components/elements/TextBox';
import ToHome from 'components/ui/ToHome';
import BlogItem from 'components/ui/BlogItem';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Button } from 'semantic-ui-react';
import EditBlogContainer from 'containers/form/EditBlogContainer';

const Post = ({item, editing, editClick}) => {
  if (item)
    return <div>
            <ToHome/>
            <BlogItem item={item}/>
            <Button icon={editing ? 'cancel' : 'edit'} onClick={editClick}
            label={editing ? 'Cancel' : 'Edit Post'}/>
            {!editing || <EditBlogContainer/>}
            <Helmet title={item.txt}/>
           </div>;
  return <TextBox txt={'Item not found'}/>;
};


Post.propTypes = {
  item: PropTypes.object,
  editing: PropTypes.bool,
  editClick: PropTypes.func
};
export default Post;
