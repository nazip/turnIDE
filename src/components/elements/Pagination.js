import React from 'react';
import { Menu, Button, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Pegination = ({items, activePage, itemsPerPage,
      changeActivePage, changeItemsPerPage}) => (
  <div>
      <Menu pagination>
        {items.map((i, key) => (
          <Menu.Item name={(key).toString()}
                     active={activePage === key}
                     key={key} onClick={changeActivePage.bind(this, key)} />
        ))}
      </Menu>
      <Button.Group>
        <Button onClick={changeItemsPerPage.bind(this, -1)}>-</Button>
        <Label>Items per Page = {itemsPerPage}</Label>
        <Button onClick={changeItemsPerPage.bind(this, 1)}>+</Button>
      </Button.Group>
  </div>
);

Pegination.propTypes = {
  items: PropTypes.array,
  activePage: PropTypes.number,
  itemsPerPage: PropTypes.number,
  changeActivePage: PropTypes.func,
  changeItemsPerPage: PropTypes.func
};

export default Pegination;
