import * as React from 'react';

import { Box } from '@mui/material';
import OutlinedButton from '../../atoms/Commons/OutlinedButton';
import { Link } from 'react-router-dom';

export default function UnderButtons(props) {
  const data = props.data;
  const title = props.title;
  const datas = [];
   
  const handleClick = () => {
    data.map((dataitem) => {
      if(dataitem.data.type == 2){
        datas.push({
          height: dataitem.data.height,
          width: dataitem.data.width,
          coordinateX: dataitem.position.x,
          coordinateY: dataitem.position.y,
          type: dataitem.data.type,
          content: dataitem.data.content,
          image: dataitem.data.image
        });
      }
      else {
        datas.push({
          height: dataitem.data.height,
          width: dataitem.data.width,
          coordinateX: dataitem.position.x,
          coordinateY: dataitem.position.y,
          type: dataitem.data.type,
          content: dataitem.data.content
        });
      }
    });

    const submit = {
      user : '',
      moldName: title,
      layouts: datas
    };
  };

  return (
    <Box sx={{ float: 'right', marginTop: 3, marginBottom: 3 }} onClick={handleClick}>
      <OutlinedButton content="수정하기" />
      <OutlinedButton content="삭제하기" style={{ marginLeft: 2 }} />
      {/* <Link to="/"> */}
        <OutlinedButton content="목록으로" style={{ marginLeft: 2 }} />
      {/* </Link> */}
    </Box>
  );
}