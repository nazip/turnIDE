import React, {PropTypes} from 'react';
import Img from 'components/elements/Img';
import Like from 'components/ui/Like';
import MetaData from 'components/ui/MetaData';
import { Header, Grid, Divider} from 'semantic-ui-react';
import Link from 'components/elements/Link';
import { postsPath } from 'helpers/routes';

class BlogItem extends React.Component {
  getLike(likes, id) {
    return likes.filter((like) => like.id == id)[0].like;
  }

  shouldComponentUpdate(nextProps) {
    if (this.getLike(this.props.likes, this.props.item.id) !==
         this.getLike(nextProps.likes, nextProps.item.id)) return true;
    return false;
  }

  render() {
    const {image, metadata, id, txt} = this.props.item;
    return  <Grid columns={2} divided>
                  <Grid.Row>
                    <Grid.Column>
                      <Header size='medium'><Link to={postsPath(id)}>
                        {txt}</Link>
                      </Header>
                      <MetaData metadata={metadata} />
                      <Like like={this.getLike(this.props.likes, id)}
                      likeHandler={() => this.props.like(id)}/>
                    </Grid.Column>
                    <Grid.Column>
                      <Img img={image} />
                    </Grid.Column>
                  </Grid.Row>
                  <Divider/>
              </Grid>;
  }
}

// const getLike = (id) => (
//   store.getState().likes.likes.filter((like) => like.id == id)[0].like
// );
//
// const BlogItem = ({item, likeHandler}) => {
//   const {image, metadata, id, txt} = item;
//   return  <Grid columns={2} divided>
//               <Grid.Row>
//                 <Grid.Column>
//                   <Header size='medium'><Link to={postsPath(id)}>
//                     {txt}</Link>
//                   </Header>
//                   <MetaData metadata={metadata} />
//                   <Like like={getLike(id)}
//                   likeHandler={() => likeHandler(id)}/>
//                 </Grid.Column>
//                 <Grid.Column>
//                   <Img img={image} />
//                 </Grid.Column>
//               </Grid.Row>
//               <Divider/>
//           </Grid>;
// };

BlogItem.propTypes = {
  isFetching: PropTypes.bool,
  item: PropTypes.object,
  likes: PropTypes.array,
  like: PropTypes.func
};

export default BlogItem;
