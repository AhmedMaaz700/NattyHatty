import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Avatar from '@mui/material/Avatar';
import MasterCard from '../assets/mastercard-26161.png'
import useMediaQuery from '@mui/material/useMediaQuery';


const BankAccount = () => {
  const mobile = useMediaQuery('(min-width: 498px)')

  return (
    <>
      <Grid 
        container
        // spacing={2}
        bgcolor={"#F5F6F8"}
        borderRadius={2}
        margin={1}
        padding={2}
        paddingBottom={6}
      >
        <Typography
          variant="h4"
          fontSize={'18 !important'}
          fontWeight={'400 !important'}
          marginBottom={3}
        >
          Bank Account
        </Typography>

        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            lg={5}
            display={"flex"}
            alignItems={"center"}
            bgcolor={"#fff"}
            spacing={1}
            margin={1}
            borderRadius={2}
            sx={{
              paddingTop: "0 !important",
              paddingLeft: "0 !important",
            }}
          >
            <Avatar alt="Ahmed" src={MasterCard} sx={{ margin: '8px' }}/>
            <Box margin={1}>
              <Typography variant="h5">**** **** **** 5946</Typography>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                sx={{ color: "#818181" }}
              >
                Expires 09/27
              </Typography>
            </Box>
            {!mobile ? (
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0C611A",
                  m: "8px",
                  fontSize: 10,
                  height: "30px",
                  paddingX: '6px'
                }}
              >
                Edit
              </Button>
            ) : null}
          </Grid>
          <Grid
            item
            xs={12}
            lg={5}
            display={"flex"}
            alignItems={"center"}
            bgcolor={"#fff"}
            spacing={1}
            margin={1}
            borderRadius={2}
            sx={{
              paddingTop: "0 !important",
              paddingLeft: "0 !important",
            }}
          >
            <Avatar alt="Ahmed" src={MasterCard} sx={{ margin: '8px' }} />
            <Box margin={1}>
              <Typography variant="h5">**** **** **** 5946</Typography>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                sx={{ color: "#818181" }}
              >
                Expires 09/27
              </Typography>
            </Box>
            {!mobile ? (
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0C611A",
                  m: "8px",
                  fontSize: 10,
                  height: "30px",
                  paddingX: '6px'
                }}
              >
                Edit
              </Button>
            ) : null}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default BankAccount
