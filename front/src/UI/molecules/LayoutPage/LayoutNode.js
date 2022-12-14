import React, { useEffect } from 'react';
import { Box } from '@mui/material';

const LayoutNode = (props) => {
  const data = props;

  function list() {
    switch (data.data.type) {
      case 1:
        return <h5>TEXT BOX</h5>;
      case 2:
        return <h5>IMAGE BOX</h5>;
      case 3:
        return <h5>CODE BOX</h5>;
      case 4:
        return <h5>HYPERLINK BOX</h5>;
      case 5:
        return <h5>MATH BOX</h5>;
      case 6:
        return <h5>VIDEO BOX</h5>;
      case 7:
        return <h5>FILE BOX</h5>;
      default:
        return <h5>ERROR BOX</h5>;
    }
  }
  return (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'solid 1px #ddd',
        background: '#f0f0f0',
        width: data.data.width, 
        height: data.data.height}}
    >
      {list()}
    </Box>
  );
};

export default LayoutNode;
