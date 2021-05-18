import React, { useMemo } from 'react';
import { Button, Typography } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';

import styles from './Likes.module.css';
import { Skeleton } from '@material-ui/lab';

export interface ILikesProps {
  liked: boolean;
  disliked: boolean;
  likes: number;
  dislikes: number;
  isLoading: boolean;

  onLike: () => void;
  onDislike: () => void;
}

export const Likes: React.FC<ILikesProps> = ({
  disliked,
  dislikes,
  isLoading,
  liked,
  likes,
  onDislike,
  onLike,
}) => {
  const likedIcon = useMemo(
    () => (liked ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />),
    [liked],
  );
  const dislikedIcon = useMemo(
    () => (disliked ? <ThumbDownIcon /> : <ThumbDownOutlinedIcon />),
    [disliked],
  );

  return (
    <div className={styles.root}>
      <div className={styles.item}>
        {isLoading ? (
          <Skeleton width={80} height={24} />
        ) : (
          <Button
            startIcon={likedIcon}
            color="primary"
            onClick={onLike}
            className={styles.button}
          >
            <Typography variant="caption" color="textPrimary">
              {likes}
            </Typography>
          </Button>
        )}
      </div>
      <div className={styles.item}>
        {isLoading ? (
          <Skeleton width={80} height={24} />
        ) : (
          <Button
            startIcon={dislikedIcon}
            color="primary"
            onClick={onDislike}
            className={styles.button}
          >
            <Typography variant="caption" color="textPrimary">
              {dislikes}
            </Typography>
          </Button>
        )}
      </div>
    </div>
  );
};
