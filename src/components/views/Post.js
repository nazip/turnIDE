import React from 'react';
import TextBox from 'components/elements/TextBox';
import ToHome from 'components/ui/ToHome';
import BlogItem from 'components/ui/BlogItem';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Button } from 'semantic-ui-react';
import EditBlogContainer from 'containers/form/EditBlogContainer';
import AddCommentContainer from 'containers/form/AddCommentContainer';

const Post = ({item, editing, addComment, editClick, addCommentClick}) => {
  if (item)
    return <div>
            <ToHome/>
            <BlogItem item={item}/>

            <Button icon={editing ? 'cancel' : 'edit'} onClick={editClick}
            label={editing ? 'Cancel' : 'Edit Post'}/>
            {!editing || <EditBlogContainer/>}

            <Button icon={addComment ? 'cancel' : 'add'}
            onClick={addCommentClick}
            label={addComment ? 'Cancel' : 'Add Comment'}/>
            {!addComment || <AddCommentContainer/>}

            <Helmet title={item.txt}/>
           </div>;
  return <TextBox txt={'Item not found'}/>;
};


Post.propTypes = {
  item: PropTypes.object,
  editing: PropTypes.bool,
  editClick: PropTypes.func,
  addComment: PropTypes.bool,
  addCommentClick: PropTypes.func
};
export default Post;
