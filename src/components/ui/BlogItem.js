import React, {PropTypes} from 'react';
import Img from 'components/ui/Img';
import Like from 'components/ui/Like';
import MetaData from 'components/ui/MetaData';
import { Header, Grid, Divider} from 'semantic-ui-react';
import Link from 'components/elements/Link';
import { postsPath } from 'helpers/routes';

const BlogItem = ({item, likeHandler}) => {
  const {image, metadata, id, txt} = item;

  return  <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column>
                  <Header size='medium'><Link to={postsPath(id)}>
                    {txt}</Link>
                  </Header>
                  <MetaData metadata={metadata} />
                  <Like like={metadata.like}
                  likeHandler={() => likeHandler(id)}/>
                </Grid.Column>
                <Grid.Column>
                  <Img img={image} />
                </Grid.Column>
              </Grid.Row>
              <Divider/>
          </Grid>;
};

BlogItem.propTypes = {
  item: PropTypes.object,
  likeHandler: PropTypes.func
};
export default BlogItem;
