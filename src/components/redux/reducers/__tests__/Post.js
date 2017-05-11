import post from '../Post';
import * as type from '../../const/actionTypes/Post';
import { COMMENT_ADD_SUCCESS } from
'components/redux/const/actionTypes/Comments';

describe('Post reducer', () => {
  const initialState = {
    isFetching: false,
    isUpdating: false,
    error: false,
    entry: null,
    comments: [],
    editing: false,
    addComment: false
  };

  const entry = {
    isFetching: false,
    isUpdating: false,
    error: false,
    entry: {
      image: {},
      metadata: {},
      comment: [],
      txt: 'test',
      id: 1
    },
    comments: [],
    editing: false,
    addComment: false
  };

  it('returns proper initial state', () => {
    expect(post(undefined, {})).toEqual(initialState);
  });

  it('update post', () => {
    expect(post(undefined, {
      type: type.POST_UPDATE_SUCCESS,
      response: entry.entry
    })).toEqual(entry);
  });

  it('add comment', () => {
    expect(post(undefined, {
      type: COMMENT_ADD_SUCCESS,
      response: {
        id: 1,
        postId: 1,
        phone: '321-123',
        comment: 'test comment'
      }
    })).not.toEqual(entry.comment);
  });
});
