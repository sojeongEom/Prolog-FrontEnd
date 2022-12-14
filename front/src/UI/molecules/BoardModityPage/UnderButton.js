import * as React from 'react';
import Api from '../../../api/Api';
import { Box, Button } from '@mui/material';
import OutlinedButton from '../../atoms/Commons/OutlinedButton';
import { Link } from "react-router-dom";

export default function UnderButton(props) {
  const data = props.data;
  const title = props.title;
  const tags = props.tags;
  const layoutID = props.layoutId;
  const datas = [];
  const category = props.category;
  console.log(category)
  const id = window.location.href.split('/')[4];

  function handleClick() {
    let leader = 0;
    data.map((dataitem) => {
      if(dataitem.data.leader == true) {
        leader = leader + dataitem.data.id;
    }
      if(dataitem.data.type == 1){
        datas.push({
          id: dataitem.data.id,
          height: dataitem.data.height,
          width: dataitem.data.width,
          coordinateX: dataitem.position.x,
          coordinateY: dataitem.position.y,
          type: dataitem.data.type,
          content: dataitem.data.content,
          leader: dataitem.data.leader
        });
      }
      else if(dataitem.data.type == 2){
        const i = [];
        dataitem.data.images.map((images) => {
          i.push(
            {url: images}
          )
        });
        datas.push({
          id: dataitem.data.id,
          height: dataitem.data.height,
          width: dataitem.data.width,
          coordinateX: dataitem.position.x,
          coordinateY: dataitem.position.y,
          type: dataitem.data.type,
          explanation: dataitem.data.explanation,
          image: i,
          leader: dataitem.data.leader
        });
      } else if(dataitem.data.type == 3){
        datas.push({
          id: dataitem.data.id,
          height: dataitem.data.height,
          width: dataitem.data.width,
          coordinateX: dataitem.position.x,
          coordinateY: dataitem.position.y,
          type: dataitem.data.type,
          codes: dataitem.data.content,
          explanation: dataitem.data.explanation,
          leader: dataitem.data.leader
        });
      }else if(dataitem.data.type == 5){
        datas.push({
          id: dataitem.data.id,
          height: dataitem.data.height,
          width: dataitem.data.width,
          coordinateX: dataitem.position.x,
          coordinateY: dataitem.position.y,
          type: dataitem.data.type,
          content: dataitem.data.content,
          explanation: dataitem.data.explanation,
          leader: dataitem.data.leader
        });
      }
      else {
        datas.push({
          id: dataitem.data.id,
          height: dataitem.data.height,
          width: dataitem.data.width,
          coordinateX: dataitem.position.x,
          coordinateY: dataitem.position.y,
          type: dataitem.data.type,
          content: dataitem.data.content,
          explanation: dataitem.data.explanation,
          leader: dataitem.data.leader
        });
      }
    });

    const submit = {
      layoutID: layoutID,
      title: title,
      layouts: datas,
      tag: tags,
      category : category,
      attachment : [],
    };

    const getData = async () => {
      if (submit.title == null) {
        alert("????????? ??????????????????.");
    } else if(submit.category == []) {
        alert("??????????????? ??????????????????.")
    } else if(leader == 0) {
        alert("????????????????????? ??????????????????.")
    } else {
        const infoBody = await Api.getModifyBoard(id, submit);
        console.log(infoBody);
        if (infoBody.status == 200) {
          alert("?????????????????????");
          window.location.href = "/";
        }
      }
    };
    getData();
  };

  const handledelete = async () => {
    const getData = async () => {
      const infoBody = await Api.getDeleteBoard(id);
      if (infoBody.status == 200) {
        alert("?????????????????????");
        window.location.href = "/";
      }
    };
    getData();
  };

  return (
    <Box sx={{ float: 'right', marginTop: 3, marginBottom: 3, marginRight: 10}}>
      <Button
        style={{ marginLeft: 2, fontFamily: 'SUIT-Regular' }}
        variant="outlined"
        onClick={()=>handleClick()}
      >
        ????????????
      </Button>
      <Button
        style={{ marginLeft: 2, fontFamily: 'SUIT-Regular' }}
        variant="outlined"
        onClick={()=>handledelete()}
      >
        ????????????
      </Button>
      <Link to="/">
        <OutlinedButton content="????????????" style={{ marginLeft: 2 }} />
      </Link>
    </Box>
  );
}