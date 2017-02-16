import React, {PropTypes} from 'react';
import TextBox from './ui/textBox';
import request from 'superagent';
import ToHome from './ui/toHome';
import url from './const/staticData';
import BlogItem from './ui/blogItem';

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
    if (this.state.item !== null) {
      return <div>
              <ToHome/>
              <BlogItem item={this.state.item[0]} likeHandler={() => ('')} />
            </div>;
    }
    return <TextBox txt={'Item not found'}/>;
  }
}

Post.propTypes = {
  params: PropTypes.object
};
export default Post;
