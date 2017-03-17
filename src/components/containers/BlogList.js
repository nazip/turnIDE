import React, {PropTypes} from 'react';
import BlogItem from 'components/ui/BlogItem';
import Pagination from 'components/elements/Pagination';
import WaitingFor from 'components/elements/WaitingFor';
//import PieChart from 'components/elements/Chart';
import LikeContainer from 'containers/LikeContainer';

class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.changeItemsPerPage = this.changeItemsPerPage.bind(this);
    this.makeButtons = this.makeButtons.bind(this);
  }

  changeItemsPerPage(n) {
    const { itemsPerPage } = this.state;
    if (n < 0)
      this.setState({itemsPerPage: itemsPerPage > 1 ?
        itemsPerPage - 1 : itemsPerPage});
    else
      this.setState({itemsPerPage: itemsPerPage + 1});
  }

  dataForChart() {
    return  this.props.items.map((item) => (
       [item.metadata.author || 'not defined', item.metadata.like || 0]
    ));
  }

  makeButtons(pageCount) {
    const a = [0..pageCount - 1];
    for (let i = 0; i < pageCount; i++) a[i] = 0;
    return a;
  }

  render() {
    const { items, isFetching,
            changePageSize, changeActivePage, pagination} = this.props;
    const {activePage, pageSize, pageCount} = pagination;
    if (isFetching) return <WaitingFor/>;
    return <div>
              {items.map((item) =>
                <LikeContainer key={item.id} item={item}>
                  <BlogItem />
                </LikeContainer>
              )}
              <Pagination items={this.makeButtons(pageCount)}
                activePage={activePage}
                changeActivePage={(n) => changeActivePage(n)}
                changeItemsPerPage={(n) => changePageSize(n)}
                itemsPerPage={pageSize}
              />
           </div>;
  }
}

BlogList.propTypes = {
  isFetching: PropTypes.bool,
  items: PropTypes.array,
  like: PropTypes.func,
  pagination: PropTypes.object,
  changeActivePage: PropTypes.func,
  changePageSize: PropTypes.func
};

export default BlogList;
