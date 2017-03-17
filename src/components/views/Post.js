import React, {PropTypes} from 'react';
import TextBox from 'components/elements/TextBox';
import ToHome from 'components/ui/ToHome';
import BlogItem from 'components/ui/BlogItem';

const Post = ({item, like}) => {
  if (item)
    return <div>
            <ToHome/>
            <BlogItem item={item}
                likeHandler={(id) => like(id)}/>
           </div>;
  return <TextBox txt={'Item not found'}/>;
};

Post.propTypes = {
  item: PropTypes.object,
  like: PropTypes.func
};
export default Post;
