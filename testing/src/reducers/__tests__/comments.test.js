import commentsReducer from 'reducers/comments';
import {SAVE_COMMENT} from 'actions/types';

it("handles actions of type SAVE_COMMENT", () => {
    const text = 'new comment';
    const action = {
        type: SAVE_COMMENT,
        payload: text
    };
    const newState = commentsReducer([], action);

    expect(newState).toContain(text);
});

it("handles action with unknown type", () => {
    const initialState = ['test']
    const newState = commentsReducer(initialState, {type: 'adsadfs'});
    expect(newState).toEqual(initialState);
});