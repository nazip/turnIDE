import {set, assign} from 'lodash/object';

export default (state, path, value) => (
  set(
    assign({}, state),
    path,
    value)
);
