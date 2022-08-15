import { Box } from '@mui/material';
import React from 'react';
import OutlineButton from '../../atoms/Commons/OutlinedButton';
function CommentWriteBox(props) {
  const { onChange, onClick, display } = props;
  return (
    <Box
      sx={{
        display: display,
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <textarea
        style={{
          width: '90%',
          height: '5em',
          minHeight: '66px',
          marginTop: '1%',
          marginBottom: '1%',
          resize: 'vertical',
          outlineColor: '#BADBF3',
        }}
        onChange={onChange}
      ></textarea>
      <OutlineButton
        content={'댓글입력'}
        style={{
          marginBottom: '1%',
          marginTop: '1%',
          marginLeft: '1%',
          maxHeight: '5em',
        }}
        onClick={onClick}
      ></OutlineButton>
    </Box>
  );
}
export default CommentWriteBox;