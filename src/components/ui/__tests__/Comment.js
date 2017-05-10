import React from 'react';
import ReactDOM from 'react-dom';
import Comment from '../Comment';
import { shallow } from 'enzyme';

describe('Comment', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Comment id={1}
                             comment="test comment"
                             phone="123-123-123"/>
                    , div);
  });

  it('render proper text', () => {
    const comment = shallow(<Comment id={1}
                             comment="test comment"
                             phone="123-123-123"/>);
    expect(comment.contains('123-123-123')).toEqual(true);
    expect(comment.contains('test comment')).toEqual(true);
  });
});
