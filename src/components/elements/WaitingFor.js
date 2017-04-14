import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

const WaitingFor = () => (
  <Segment>
    <Dimmer active>
      <Loader />
    </Dimmer>
    <Image src='/assets/images/wireframe/short-paragraph.png' />
  </Segment>
);

WaitingFor.propTypes = {
  img: PropTypes.string
};

export default WaitingFor;
