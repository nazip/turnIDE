import React, {PropTypes} from 'react';
import BlogItem from '../ui/blogItem';
import { Menu, Button, Label } from 'semantic-ui-react';

class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activePage: 1, itemsPerPage: 2};
    this.handleClick = this.handleClick.bind(this);
    this.changeItemsPerPage = this.changeItemsPerPage.bind(this);
  }

  handleClick(e, {name}) {
    this.setState({activePage: name});
  }

  getItemsPerPage() {
    const a = new Array(parseInt(this.props.item.length / this.state.itemsPerPage) +
      (this.props.item.length / this.state.itemsPerPage > 0 ? 1 : 0));
    for (let i = 1; i < a.length; i++) a[i] = i;
    return a;
  }

  changeItemsPerPage(e, {name}) {
    if (parseInt(name) < 0)
      this.setState({itemsPerPage:
        this.state.itemsPerPage > 1 ? this.state.itemsPerPage - 1 : this.state.itemsPerPage});
    else
      this.setState({itemsPerPage: this.state.itemsPerPage + 1});
  }

  render() {
    const { item, likeHandler } = this.props;
    return <div>
      {item.map((item, key) => {
        if ((key + 1 > this.state.activePage * this.state.itemsPerPage - this.state.itemsPerPage) &&
           (key + 1 <= this.state.activePage * this.state.itemsPerPage))
          return <BlogItem key={item.id} item={item} likeHandler={likeHandler} />;
      })}
      <Menu pagination>
        {this.getItemsPerPage().map((i, key) => (
          <Menu.Item name={key.toString()}
                     active={this.state.activePage === key.toString()}
                     key={key} onClick={this.handleClick} />
        ))}
      </Menu>
      <div>
      <Button.Group>
        <Button name='-1' onClick={this.changeItemsPerPage}>-</Button>
        <Label>Items per Page = {this.state.itemsPerPage}</Label>
        <Button name='1' onClick={this.changeItemsPerPage}>+</Button>
      </Button.Group>
      </div>
    </div>;
  }
}

BlogList.propTypes = {
  item: PropTypes.array,
  likeHandler: PropTypes.func
};

export default BlogList;
