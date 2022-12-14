import React, { useEffect, useState } from 'react';
import {
  Link, Avatar, Button, Grid, Box, CssBaseline,
  Typography, Container, Divider
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { AuthTextField } from '../../atoms/Commons/TextField';
import Api from '../../../api/Api';

const FindId = () => {
  const [account, setAccount] = useState('_____');
  const [info, setInfo] = useState({
    email: '',
  });

  // 똑같은 기능 하는 코드 하나로 합침
  const handleChange = (event) => {
    setInfo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const emptyCheck = () => {
    if (info.email === '') {
      return false;
    }
  };

  const handleFindId = async () => {

    const isEmpty = emptyCheck();
    if (isEmpty === false) {
      alert('이메일을 입력해주세요');
      return false;
    }
    
    let response = await Api.postFindID(info);

    if (response.data.success === true) {
      setAccount(response.data.data);
    }
    else {
      alert('이메일을 다시 확인해주세요!');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        style={{ fontFamily: "SUIT-Regular" }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">아이디 찾기</Typography>
        <Box noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <AuthTextField
                label="이메일"
                name="email"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleFindId}
          >
            아이디 찾기
          </Button>
          {(account === '') ?
            "" : <Typography component="h6" variant="h6">귀하의 아이디는 {account} 입니다.</Typography>
          }
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                돌아가기
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default FindId;
