import React from 'react';
import { Menu, Button, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Pegination = ({buttons, activePage, pageSize,
      setActivePage, setPageSize}) => (
  <div>
      <Menu pagination>

        {buttons.map((i, key) => (
          <Menu.Item name={key.toString()}
                     active={activePage === key}
                     key={key} onClick={setActivePage.bind(this, key)} />
        ))}
      </Menu>
      <Button.Group>
        <Button onClick={setPageSize.bind(this, pageSize - 1)}>
        -</Button>
        <Label>Items per Page = {pageSize}</Label>
        <Button onClick={setPageSize.bind(this, pageSize + 1)}>
        +</Button>
      </Button.Group>
  </div>
);

Pegination.propTypes = {
  buttons: PropTypes.array,
  activePage: PropTypes.number,
  pageSize: PropTypes.number,
  setActivePage: PropTypes.func,
  setPageSize: PropTypes.func
};

export default Pegination;
