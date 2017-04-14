import React from 'react';
import TextBox from 'components/elements/TextBox';
import ToHome from 'components/ui/ToHome';
import BlogItem from 'components/ui/BlogItem';
import PropTypes from 'prop-types';

const Post = ({item}) => {
  if (item)
    return <div>
            <ToHome/>
            <BlogItem item={item}/>
           </div>;
  return <TextBox txt={'Item not found'}/>;
};

Post.propTypes = {
  item: PropTypes.object
};
export default Post;
