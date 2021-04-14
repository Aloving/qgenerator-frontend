import { filter } from 'lodash';
import { createReducer, createAction } from '@reduxjs/toolkit';

import { ILikes } from '../interfaces';

const defaultInitialState: ILikes = {
  liked: [],
  disliked: [],
};

export const createLikes = (
  prefix: string,
  initialState: ILikes = defaultInitialState,
) => {
  const actionTypes = {
    LIKE: `${prefix}//LIKE`,
    DISLIKE: `${prefix}//DISLIKE`,
  };

  const like = createAction<string | number>(actionTypes.LIKE);
  const dislike = createAction<string | number>(actionTypes.DISLIKE);

  const likesActions = {
    like,
    dislike,
  };

  const likesReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(like, (state, { payload: likedId }) => {
        const disliked = state.disliked.includes(likedId)
          ? filter(state.disliked, (entityId) => entityId !== likedId)
          : state.disliked;
        const liked = state.liked.includes(likedId)
          ? filter(state.liked, (entityId) => entityId !== likedId)
          : [...state.liked, likedId];

        return {
          liked,
          disliked,
        };
      })
      .addCase(dislike, (state, { payload: dislikedId }) => {
        const liked = state.liked.includes(dislikedId)
          ? filter(state.liked, (entityId) => entityId !== dislikedId)
          : state.liked;
        const disliked = state.disliked.includes(dislikedId)
          ? filter(state.disliked, (entityId) => entityId !== dislikedId)
          : [...state.disliked, dislikedId];

        return {
          liked,
          disliked,
        };
      })
      .addDefaultCase((state) => state);
  });

  return {
    actionTypes,
    likesActions,
    likesReducer,
  };
};
