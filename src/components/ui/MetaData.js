import React, { PropTypes } from 'react';
import TextBox from 'components/ui/TextBox';
import { Label } from 'semantic-ui-react';

const MetaData = ({metadata}) => {
  const {author, createdAt, updatedAt} = metadata;
  return <div className={'metadata'}>
          <div><Label>Автор:<TextBox>{author}</TextBox></Label></div>
          <div><Label>createdAt:<TextBox>{createdAt}</TextBox></Label></div>
          <div><Label>updatedAt:<TextBox>{updatedAt}</TextBox></Label></div>
        </div>;
};

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
