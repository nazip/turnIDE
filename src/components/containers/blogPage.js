import React, {PropTypes} from 'react';
import BlogList from '../ui/blogList';
import PieChart from '../ui/pieChart';
import request from 'superagent';
import url from '../const/staticData';
import { Segment, Label } from 'semantic-ui-react';
import Link from '../elements/link';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: null};
  }

  componentDidMount() {
    request.get(`${url}/post/index.json`,
      {},
      (err, res) => this.setState({items: [res.body]})
    );
  }

  likeClick(id) {
    const newItem = this.state.items.map((item) => (
      item.map((item) => {
        if (item.id !== id) return item;
        const m = item;
        m.metadata.like = m.metadata.like + 1;
        return m;
      })
    ));
    this.setState({items: newItem});
  }

  dataForChart() {
    const unionArray = this.state.items.reduce(function(flat, current) {
      return flat.concat(current);
    }, []);
    return  unionArray.map((item) => (
       [item.metadata.author || 'not defined', item.metadata.like || 0]
    ));
  }

  render() {
    return this.state.items == null ? <div/> : <div>
            <Segment>
              <Link to={'/'}>My Post</Link>
              <Link to={'/about'}><Label>About</Label></Link>
            </Segment>
            {this.state.items.map((item, key) => (
                <BlogList item={item} key={key} likeHandler={(id) => this.likeClick(id)}/>))
            }
            <PieChart typeChart={'pie'} items={this.dataForChart()}/>
           </div>;
  }
}

BlogPage.propTypes = {
  BlogListItems: PropTypes.array
};

export default BlogPage;
