import React, {PropTypes} from 'react';
import BlogList from 'components/ui/BlogList';
import PieChart from 'components/elements/Chart';
import request from 'superagent';
import url from 'components/const/StaticData';
import store from 'components/store';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: null};
    // this.postLike = this.postLike.bind(this);
  }

  componentDidMount() {
    console.log('store', store.getState());
    request.get(`${url}/post/index.json`,
      {},
      (err, res) => this.setState({items: [res.body]})
    );
  }

  // postLike(id, like) {
  //   request.put(`${url}/post`)
  //   .set('Content-Type', 'application/json')
  //   .accept('application/json')
  //   .send(`{"id":${id},"like":${like}}`)
  //   .end(null);
  // }

  // likeClick(id) {
  //   const items = this.state.items.map((item) => (
  //     item.map((item) => {
  //       if (item.id !== id) return item;
  //       const m = Object.assign({}, item);
  //       m.metadata.like += 1;
  //       this.postLike(m.id, m.metadata.like);
  //       return m;
  //     })
  //   ));
  //   this.setState({items});
  //   // this.props.dispatch({type: POST_INC_LIKE, id});
  // }

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
            {this.state.items.map((item, key) => (
                <BlogList items={item}
                key={key}
                likeHandler={(id) => this.props.like(id, this.state.items)}/>))
            }
            <PieChart typeChart={'pie'} items={this.dataForChart()}/>
           </div>;
  }
}

BlogPage.propTypes = {
  BlogListItems: PropTypes.array,
  like: PropTypes.func
};

export default BlogPage;
