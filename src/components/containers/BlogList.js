import React from 'react';
import PropTypes from 'prop-types';
import BlogItem from 'components/ui/BlogItem';
import Pagination from 'components/elements/Pagination';
import WaitingFor from 'components/elements/WaitingFor';
import PaginationContainer from 'containers/PaginationContainer';
// import ChartContainer from 'containers/ChartContainer';
// import PieChart from 'components/elements/Chart';

const BlogList = ({items, isFetching}) => {
  if (isFetching) return <WaitingFor/>;
  return <div>
            {items.map((item) => <BlogItem
              key={item.id} item={item}
              linkToBlog={item.path}/>)}
            <PaginationContainer>
              <Pagination/>
            </PaginationContainer>
         </div>;
};

BlogList.propTypes = {
  isFetching: PropTypes.bool,
  items: PropTypes.array
};

export default BlogList;
