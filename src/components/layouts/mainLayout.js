import React, { PropTypes } from 'react';
import { Icon, Segment, Container, Label } from 'semantic-ui-react';

const MainLayout = ({ children }) => (
  <Container>
    <Logo />
    {children}
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

const Logo = () => (
  <Segment>
    <Label><Icon name='user'/>My first React blog</Label>
  </Segment>
);

const Footer = () => (
  <Segment>
    <Label>Blog footer</Label>
  </Segment>
);

export default MainLayout;
