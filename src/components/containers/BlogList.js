import React from 'react';
import PropTypes from 'prop-types';
import BlogItem from 'components/ui/BlogItem';
import WaitingFor from 'components/elements/WaitingFor';
import PaginationContainer from 'containers/PaginationContainer';
import ChartContainer from 'containers/ChartContainer';
import CommentsContainer from 'containers/CommentsContainer';
import { Divider } from 'semantic-ui-react';


const BlogList = ({items, isFetching}) => {
  if (isFetching) return <WaitingFor/>;
  return <div>
            {items.map((item) =>
              <div key={item.id}>
                <BlogItem
                  key={item.id} item={item}
                  linkToBlog={item.path}/>
                <CommentsContainer id={item.id}/>
                <Divider/>
              </div>
            )}
            <ChartContainer typeChart='bar'/>
            <PaginationContainer/>
         </div>;
};

BlogList.propTypes = {
  isFetching: PropTypes.bool,
  items: PropTypes.array
};

export default BlogList;
