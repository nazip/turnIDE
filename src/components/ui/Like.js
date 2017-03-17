import React, { PropTypes } from 'react';
import { Button} from 'semantic-ui-react';

const Like = ({like, likeHandler}) => (
  <Button
    content='Like'
    icon='heart'
    label={{ as: 'a', basic: true, content: like || 0 }}
    labelPosition='right'
    onClick={likeHandler}
  />
);

Like.defaultProps = { like: 0 };
Like.propTypes = {
  isFetching: PropTypes.bool,
  like: PropTypes.number,
  likeHandler: PropTypes.func
};

export default Like;
