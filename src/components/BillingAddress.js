import React from 'react'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { yellow } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import useMediaQuery from "@mui/material/useMediaQuery";

const BillingAddress = () => {
  const tablet = useMediaQuery('(max-width: 900px)')

  if(tablet){
    return (
      <>
        <Stack
          spacing={2}
          bgcolor={"#F5F6F8"}
          borderRadius={2}
          direction={"column"}
          margin={1}
          padding={2}
        >
        <Grid direction={"row"} display={'flex'} justifyContent={'space-between'} alignItems={"center"}>
          <Typography
            variant="h4"
            fontSize={"18 !important"}
            fontWeight={"400 !important"}
            // gutterBottom
          >
            Billing Address
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#232E3E",
              float: "right",
              // marginTop: "40px",
              fontSize: 10,
              paddingX: '6px'
            }}
          >
            Edit Details
          </Button>
        </Grid>

        <Stack direction={"row"} alignItems={"center"}>
          <Checkbox
            label="Same as Home Address"
            defaultChecked
            sx={{
              color: yellow[800],
              "&.Mui-checked": {
                color: yellow[600],
              },
            }}
          />
          <Typography variant="overline" fontSize={14} fontWeight={600} gutterBottom>
            Same as Home Address
          </Typography>
        </Stack>

        <Grid container spacing={1} >
          <Grid item xs={6}>
            <Typography fontSize={12} fontWeight={600}>First Name: </Typography>
            <TextField sx={{ backgroundColor: 'white' }}
              size="small"
              id="outlined-basic"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Typography fontSize={12} fontWeight={600}>Last Name: </Typography>
            <TextField sx={{ backgroundColor: 'white' }}
              size="small"
              id="outlined-basic"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography fontSize={12} fontWeight={600}>Address Line 1: </Typography>
            <TextField sx={{ backgroundColor: 'white' }}
              size="small"
              id="outlined-basic"
              variant="outlined"
              fullWidth
            />
          </Grid>
          {/* <Grid item xs={6}>
            <Typography fontSize={12} fontWeight={600}>Address Line 2: </Typography>
            <TextField
              size="small"
              id="outlined-basic"
              variant="outlined"
              fullWidth
            />
          </Grid> */}

          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography fontSize={12} fontWeight={600}>Country: </Typography>
                <TextField sx={{ backgroundColor: 'white' }}
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <Typography fontSize={12} fontWeight={600}>State/Province/Region: </Typography>
                <TextField sx={{ backgroundColor: 'white' }}
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography fontSize={12} fontWeight={600}>City: </Typography>
                <TextField sx={{ backgroundColor: 'white' }}
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <Typography fontSize={12} fontWeight={600}>ZipCode: </Typography>
                <TextField sx={{ backgroundColor: 'white' }}
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {/* <Button
            variant="contained"
            sx={{
              backgroundColor: "#232E3E",
              float: "right",
              marginTop: "40px",
            }}
          >
            Edit Details
          </Button> */}
        </Grid>
        </Stack>
      </>
    )
  }

  return (
    <>
      <Stack
        spacing={2}
        bgcolor={"#F5F6F8"}
        borderRadius={2}
        direction={"column"}
        margin={1}
        padding={2}
      >
        <Typography
          variant="h4"
          fontSize={"18 !important"}
          fontWeight={"400 !important"}
          gutterBottom
        >
          Billing Address
        </Typography>

        <Stack direction={"row"} alignItems={"center"}>
          <Checkbox
            label="Same as Home Address"
            defaultChecked
            sx={{
              color: yellow[800],
              "&.Mui-checked": {
                color: yellow[600],
              },
            }}
          />
          <Typography variant="overline" fontSize={14} fontWeight={600} gutterBottom>
            Same as Home Address
          </Typography>
        </Stack>

        <Grid container spacing={1} >
          <Grid item xs={6}>
            <Typography fontSize={12} fontWeight={600}>First Name: </Typography>
            <TextField sx={{ backgroundColor: 'white' }}
              size="small"
              id="outlined-basic"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Typography fontSize={12} fontWeight={600}>Last Name: </Typography>
            <TextField sx={{ backgroundColor: 'white' }}
              size="small"
              id="outlined-basic"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Typography fontSize={12} fontWeight={600}>Address Line 1: </Typography>
            <TextField sx={{ backgroundColor: 'white' }}
              size="small"
              id="outlined-basic"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Typography fontSize={12} fontWeight={600}>Address Line 2: </Typography>
            <TextField sx={{ backgroundColor: 'white' }}
              size="small"
              id="outlined-basic"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography fontSize={12} fontWeight={600}>Country: </Typography>
                <TextField sx={{ backgroundColor: 'white' }}
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <Typography fontSize={12} fontWeight={600}>State/Province/Region: </Typography>
                <TextField sx={{ backgroundColor: 'white' }}
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography fontSize={12} fontWeight={600}>City: </Typography>
                <TextField sx={{ backgroundColor: 'white' }}
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <Typography fontSize={12} fontWeight={600}>ZipCode: </Typography>
                <TextField sx={{ backgroundColor: 'white' }}
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#232E3E",
              float: "right",
              marginTop: "40px",
              fontSize: 10,
            }}
          >
            Edit Details
          </Button>
        </Grid>
      </Stack>
    </>
  );
}

export default BillingAddress
