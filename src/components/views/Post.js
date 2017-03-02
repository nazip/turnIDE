import React, {PropTypes} from 'react';
import TextBox from 'components/elements/TextBox';
import request from 'superagent';
import ToHome from 'components/ui/ToHome';
import url from 'components/const/StaticData';
import BlogItem from 'components/ui/BlogItem';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {item: null};
  }

  componentDidMount() {
    request.get(`${url}/post/${this.props.params.id}.json`,
      {},
      (err, res) => this.setState({item: res.body})
    );
  }

  render() {
    console.log('props = ', this.props);
    if (this.state.item !== null) {
      return <div>
              <ToHome/>
              <BlogItem item={this.state.item[0]}
                        likeHandler={(id) => this.props.like(id)}/>
            </div>;
    }
    return <TextBox txt={'Item not found'}/>;
  }
}

Post.propTypes = {
  params: PropTypes.object,
  like: PropTypes.func
};
export default Post;
