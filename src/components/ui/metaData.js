import React, { PropTypes } from 'react';
import TextBox from '../ui/textBox';
import { Label } from 'semantic-ui-react';

const MetaData = ({metadata}) => {
  const {author, createdAt, updatedAt} = metadata;
  return <div className={'metadata'}>
          <div><Label>Автор:<TextBox txt={author}/></Label></div>
          <div><Label>createdAt:<TextBox txt={createdAt}/></Label></div>
          <div><Label>updatedAt:<TextBox txt={updatedAt}/></Label></div>
        </div>;
};

MetaData.defaultProps = {
  metadata: {
    autor: 'not defined',
    createdAt: 'not defined',
    updatedAt: 'not defined'
  }
};

MetaData.propTypes = {
  metadata: PropTypes.object
};

export default MetaData;
