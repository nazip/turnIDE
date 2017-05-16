import React from 'react';
import { Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Like = ({id, like, likeHandler}) => (
  <Button
    content='Like'
    icon='heart'
    className='setLike'
    label={{ as: 'a', basic: true, className: 'Like',
      content: like || 0 }}
    labelPosition='right'
    onClick={() => likeHandler(id)}
  />
);

Like.propTypes = {
  isFetching: PropTypes.bool,
  id: PropTypes.number,
  like: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  likeHandler: PropTypes.func
};

export default Like;
