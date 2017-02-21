import React, {PropTypes} from 'react';
import BlogList from 'components/ui/BlogList';
import PieChart from 'components/ui/PieChart';
import request from 'superagent';
import url from 'components/const/StaticData';

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
    const item = this.state.items.map((item) => (
      item.map((item) => {
        if (item.id !== id) return item;
        const m = Object.assign({}, item);
        m.metadata.like += 1;
        return m;
      })
    ));
    this.setState({items: item});
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
            {this.state.items.map((item, key) => (
                <BlogList items={item}
                key={key} likeHandler={(id) => this.likeClick(id)}/>))
            }
            <PieChart typeChart={'pie'} items={this.dataForChart()}/>
           </div>;
  }
}

BlogPage.propTypes = {
  BlogListItems: PropTypes.array
};

export default BlogPage;
