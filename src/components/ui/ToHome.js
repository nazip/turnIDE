import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import Link from 'components/elements/Link';

const ToHome = () => (
  <Link to={'/'}>
    <Button animated>
      <Button.Content visible><Icon name='home'/></Button.Content>
      <Button.Content hidden>
        <Icon name='left arrow' />
      </Button.Content>
    </Button>
  </Link>
);

export default  ToHome;
