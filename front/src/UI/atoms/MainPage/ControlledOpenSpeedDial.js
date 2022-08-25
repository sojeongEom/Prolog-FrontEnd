import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import { Link } from 'react-router-dom';

const withLink = (to, children) => <Link to={to}>{children}</Link>;

const actions = [
  { icon: withLink('/', <FileCopyIcon />), name: '메인' },
  { icon: withLink('/Layout/14', <SaveIcon />), name: '레이아웃조회' },
  { icon: withLink('/layoutWrite', <PrintIcon />), name: '레이아웃작성' },
  { icon: withLink('/BoardDetail', <PrintIcon />), name: '글조회' },
  { icon: withLink('/BoardWrite', <PrintIcon />), name: '글작성' },
  { icon: withLink('/BoardModify', <PrintIcon />), name: '글수정' },
  { icon: withLink('/AllStatistics', <PrintIcon />), name: '전체 통계' },
];

export default function ControlledOpenSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        height: 50,
        transform: 'translateZ(0px)',
        flexGrow: 1,
        position: 'fixed',
        bottom: 16,
        right: 16,
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
