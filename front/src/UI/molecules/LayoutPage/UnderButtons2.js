import { Box, Button } from "@mui/material";
import OutlinedButton from "../../atoms/Commons/OutlinedButton";
import { Link } from "react-router-dom";
import Api from "../../../api/Api";

export default function UnderButtons2(props) {
  const data = props.data;
  const title = props.title.title;
  const datas = [];
  const user = props.user;

  function handleClick() {
    console.log(props);
    data.map((dataitem) => {
      datas.push({
        height: dataitem.height,
        width: dataitem.width - 30,
        coordinateX: dataitem.position.x,
        coordinateY: dataitem.position.y,
        type: dataitem.data.type,
      });
    });

    const submit = {
      user: user,
      moldName: title,
      layouts: datas,
    };
   
    const getData = async () => {
      if (submit.moldName == undefined) {
        alert("제목을 입력해주세요.");
      } else {
        const infoBody = await Api.getLayoutWrite(submit);
        if (infoBody.status == 200) {
          alert("작성되었습니다");
          window.location.href = "/";
        }
      }
    };
    getData();
  };

  return (
    <Box sx={{ float: "right", marginTop: 3, marginBottom: 3 }}>
      <Button
        style={{ marginLeft: 2, fontFamily: 'SUIT-Regular' }}
        variant="outlined"
        onClick={()=> handleClick()}
      >
        작성하기
      </Button>
      <Link to="/">
        <OutlinedButton content="목록으로" style={{ marginLeft: 2 }} />
      </Link>
    </Box>
  );
}
