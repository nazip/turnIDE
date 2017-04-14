import React from 'react';
import PropTypes from 'prop-types';
import Img from 'components/elements/Img';
import Like from 'components/ui/Like';
import MetaData from 'components/ui/MetaData';
import { Header, Grid, Divider} from 'semantic-ui-react';
import Link from 'components/elements/Link';
import LikeContainer from 'containers/LikeContainer';

const BlogItem = ({linkToBlog, item: {image, metadata, id, txt}}) => (
  <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>
          <Header size='medium'><Link to={linkToBlog}>
            {txt}</Link>
          </Header>
          <MetaData metadata={metadata} />
          <LikeContainer id={id}>
            <Like/>
          </LikeContainer>
        </Grid.Column>
        <Grid.Column>
          <Img img={image} />
        </Grid.Column>
      </Grid.Row>
      <Divider/>
  </Grid>
);

BlogItem.propTypes = {
  isFetching: PropTypes.bool,
  image: PropTypes.object,
  metadata: PropTypes.object,
  id: PropTypes.number,
  item: PropTypes.object,
  txt: PropTypes.string,
  linkToBlog: PropTypes.string
};

export default BlogItem;
