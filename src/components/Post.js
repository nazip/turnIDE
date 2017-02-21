import React, {PropTypes} from 'react';
import TextBox from './ui/TextBox';
import request from 'superagent';
import ToHome from './ui/ToHome';
import url from './const/StaticData';
import BlogItem from './ui/BlogItem';

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
              <BlogItem item={this.state.item[0]}/>
            </div>;
    }
    return <TextBox txt={'Item not found'}/>;
  }
}

Post.propTypes = {
  params: PropTypes.object
};
export default Post;
