import React, { useMemo } from 'react';
import { Button, Typography } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';

import styles from './Likes.module.css';

export interface ILikesProps {
  liked: boolean;
  disliked: boolean;
  likes: number;
  dislikes: number;
  onLike: () => void;
  onDislike: () => void;
}

export const Likes: React.FC<ILikesProps> = ({
  likes,
  dislikes,
  onDislike,
  onLike,
  liked,
  disliked,
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
      </div>
      <div className={styles.item}>
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
      </div>
    </div>
  );
};
