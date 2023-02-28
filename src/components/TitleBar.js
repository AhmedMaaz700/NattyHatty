import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const TitleBar = () => {
  const matches2 = useMediaQuery('(min-width: 498px)')

  return (
    <>
      <Grid container xs={12}
        direction="row"
        spacing={2}
        marginY={2}
        sx={{
          display: "flex",
          justifyContent: "space-between !important",
          alignItems: "center",
        }}
      >
        <Typography pl={1} ml={2} fontSize={28} fontWeight={600} >
          My Account
        </Typography>
        
        {matches2  ? (
          <Button variant="contained" sx={{ backgroundColor: "#232E3E", marginRight: '8px !important' }}>
            View Button
          </Button> ) : (
            <MoreHorizIcon sx={{ marginY: 1 }}/>
          )}

      </Grid>
    </>
  );
}

export default TitleBar
