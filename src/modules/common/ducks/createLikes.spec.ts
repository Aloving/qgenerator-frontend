import { createLikes } from './createLikes';
import { ILikes } from '../interfaces';

const PREFIX = 'TEST_LIKES';

const initialState: ILikes = {
  liked: [],
  disliked: [],
};

describe('createLikes', () => {
  let likesDucks: ReturnType<typeof createLikes>;

  beforeEach(() => {
    likesDucks = createLikes(PREFIX);
  });

  describe('Actions', () => {
    it('should check returned action creators', () => {
      const exceptedActionsList = {
        like: expect.any(Function),
        dislike: expect.any(Function),
      };

      expect(exceptedActionsList).toEqual(likesDucks.likesActions);
    });

    it('should check return action types', () => {
      const exceptedActionsList = {
        LIKE: `${PREFIX}//LIKE`,
        DISLIKE: `${PREFIX}//DISLIKE`,
      };

      expect(exceptedActionsList).toEqual(likesDucks.actionTypes);
    });
  });

  describe('Reducer', () => {
    it('should return initial state by default', () => {
      expect(likesDucks.likesReducer(initialState, { type: '' })).toEqual(
        initialState,
      );
    });

    describe('like', () => {
      it("should push to liked if there's no id in that", () => {
        const result = likesDucks.likesReducer(
          initialState,
          likesDucks.likesActions.like('test_id'),
        );

        expect(result).toEqual({
          liked: ['test_id'],
          disliked: [],
        });
      });

      it('should remove id if liked again', () => {
        const result = likesDucks.likesReducer(
          { ...initialState, liked: ['test_id'] },
          likesDucks.likesActions.like('test_id'),
        );

        expect(result).toEqual({
          liked: [],
          disliked: [],
        });
      });

      it('should remove dislikes anyway', () => {
        const result = likesDucks.likesReducer(
          {
            ...initialState,
            liked: [],
            disliked: ['test_id'],
          },
          likesDucks.likesActions.like('test_id'),
        );

        expect(result).toEqual({
          liked: ['test_id'],
          disliked: [],
        });
      });
    });

    describe('dislike', () => {
      it("should push to disliked if there's no id in that", () => {
        const result = likesDucks.likesReducer(
          initialState,
          likesDucks.likesActions.dislike('test_id'),
        );

        expect(result).toEqual({
          liked: [],
          disliked: ['test_id'],
        });
      });

      it('should remove id if disliked again', () => {
        const result = likesDucks.likesReducer(
          { ...initialState, disliked: ['test_id'] },
          likesDucks.likesActions.dislike('test_id'),
        );

        expect(result).toEqual({
          liked: [],
          disliked: [],
        });
      });

      it('should remove likes anyway', () => {
        const result = likesDucks.likesReducer(
          {
            ...initialState,
            liked: ['test_id'],
            disliked: [],
          },
          likesDucks.likesActions.dislike('test_id'),
        );

        expect(result).toEqual({
          liked: [],
          disliked: ['test_id'],
        });
      });
    });
  });
});
