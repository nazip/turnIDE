import React, { PropTypes } from 'react';
import { Icon, Segment, Container, Label } from 'semantic-ui-react';
import Link from 'components/elements/Link';

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
    <Link to={'/'}>
      <Label><Icon name='user'/>My first React blog</Label>
    </Link>
    <Link to={'/about'}>About</Link>
  </Segment>
);

const Footer = () => (
  <Segment>
    <Label>Blog footer</Label>
  </Segment>
);

export default MainLayout;
