import React from 'react';
import TextBox from 'components/elements/TextBox';
import { Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const MetaData = ({metadata: {author, createdAt, updatedAt}}) => (
  <div className={'metadata'}>
    <div><Label>Автор:<TextBox>{author}</TextBox></Label></div>
    <div><Label>createdAt:<TextBox>{createdAt}</TextBox></Label></div>
    <div><Label>updatedAt:<TextBox>{updatedAt}</TextBox></Label></div>
  </div>
);

MetaData.defaultProps = {
  metadata: {
    author: 'not defined',
    createdAt: 'not defined',
    updatedAt: 'not defined'
  }
};

MetaData.propTypes = {
  metadata: PropTypes.shape({
    author: PropTypes.string,
    updatedAt: PropTypes.string,
    createdAt: PropTypes.string,
    like: PropTypes.number
  })
};

export default MetaData;
