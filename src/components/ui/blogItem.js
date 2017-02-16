import React, {PropTypes} from 'react';
import Img from '../ui/img';
import Like from '../ui/like';
import MetaData from '../ui/metaData';
import { Header, Grid, Divider} from 'semantic-ui-react';
import Link from '../elements/link';

const BlogItem = ({item, likeHandler}) => {
  const {image, metadata, id, txt} = item;

  return  <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column>
                  <Header size='medium'><Link to={`/post/${id}`}>{txt}</Link></Header>
                  <MetaData metadata={metadata} />
                  <Like like={metadata.like} likeHandler={() => likeHandler(id)}/>
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
