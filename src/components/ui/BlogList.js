import React, {PropTypes} from 'react';
import BlogItem from 'components/ui/BlogItem';
import Pagination from 'components/elements/Pagination';

class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activePage: 1, itemsPerPage: 2};
    this.changeItemsPerPage = this.changeItemsPerPage.bind(this);
    this.itemsForPagination = this.itemsForPagination.bind(this);
  }

  changeItemsPerPage(n) {
    const { itemsPerPage } = this.state;
    if (n < 0)
      this.setState({itemsPerPage: itemsPerPage > 1 ?
        itemsPerPage - 1 : itemsPerPage});
    else
      this.setState({itemsPerPage: itemsPerPage + 1});
  }

  itemsForPagination() {
    const { itemsPerPage } = this.state;
    const { items } = this.props;
    const a =
    new Array(parseInt(items.length / itemsPerPage) +
        (items.length / itemsPerPage > 0 ? 1 : 0));
    for (let i = 1; i < a.length; i++) a[i] = i;
    return a;
  }

  render() {
    const { items, likeHandler } = this.props;
    const { activePage, itemsPerPage } = this.state;
    const showItems = items.slice(
       activePage * itemsPerPage - itemsPerPage,
       activePage * itemsPerPage);
    return <div>
            {showItems.map((item) =>
              <BlogItem key={item.id} item={item} likeHandler={likeHandler} />
            )}
            <Pagination items={this.itemsForPagination()}
              activePage={activePage}
              changeActivePage={(n) => this.setState({activePage: n})}
              changeItemsPerPage={(n) => this.changeItemsPerPage(n)}
              itemsPerPage={itemsPerPage}/>
           </div>;
  }
}

BlogList.propTypes = {
  items: PropTypes.array,
  likeHandler: PropTypes.func
};

export default BlogList;
