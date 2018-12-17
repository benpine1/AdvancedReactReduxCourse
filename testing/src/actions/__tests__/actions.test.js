import {saveComment} from 'actions';
import {SAVE_COMMENT} from 'actions/types';

describe("saveComment", () => {
    it("has the correct type", () => {
        const action = saveComment();
        expect(action.type).toEqual(SAVE_COMMENT);
    });
    it("has the correct payload", () => {
        const text = 'new comment';
        const action = saveComment(text);
        expect(action.payload).toEqual(text);
    });
});