import React from 'react';
import { Box, Paper, Container, makeStyles } from '@material-ui/core';

import { IQuestion } from './interfaces';

type IQuestionProps = IQuestion;

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

export const Question = ({
  author,
  commentariesCount,
  dislikes,
  id,
  likes,
  questionText,
}: IQuestionProps) => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={0}>
        <Box textAlign="left">{`Вопрос ${id}`}</Box>
      </Paper>
    </Container>
  );
};
