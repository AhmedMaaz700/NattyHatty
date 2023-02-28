import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import AhmedPic from "../assets/Ahmed_Pic.PNG";
import svgIcon2 from '../assets/Component 54 – 1.svg'
import Slider from '@mui/material/Slider';
import useMediaQuery from "@mui/material/useMediaQuery";


const Family = () => {
  const match = useMediaQuery("(min-width: 498px)");

  function preventHorizontalKeyboardNavigation(event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  }

  return (
    <>
      <Grid
        container
        bgcolor={"#F5F6F8"}
        margin={1}
        padding={2}
        borderRadius={2}
      >
        <Grid
          xs={12}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid item md={6}>
            <Typography
              variant="h4"
              fontSize={"18 !important"}
              fontWeight={"400 !important"}
              gutterBottom
              marginTop={1}
            >
              Family
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Box
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"center"}
            >
              <Box margin={1}>
                <SearchIcon />
              </Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0C611A",
                  m: "1",
                  fontSize: 10,
                  height: "30px",
                }}
              >
                Add New
              </Button>
            </Box>
          </Grid>
        </Grid>

        {match ? (
          <Grid container>
            <Grid item xs={11}>
              <Grid container>
                {/* here */}
                <Grid
                  xs={12}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  bgcolor={"#F8991F"}
                  padding={1}
                  marginBottom={3}
                  borderRadius={2}
                >
                  <Grid item display={"flex"} alignItems={"center"} spacing={1}>
                    <Avatar alt="Ahmed" src={AhmedPic} />
                    <Typography
                      fontSize={16}
                      // lineHeight={"2.2rem"}
                      pr={1}
                      fontWeight={600}
                      margin={1}
                      color={"#fff"}
                    >
                      Ahmed Maaz
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Stack direction={"row"} spacing={1}>
                      {/* <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ backgroundColor: "#fff", color: '#000', padding: 1, borderRadius: 1, height: '20px', width: '40px',}}>

                      Admin
                    </Box> */}

                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#FFFFFF",
                          color: "#000000",
                          margin: "1",
                          fontSize: 10,
                          height: "30px",
                          fontWeight: "400",
                          paddingTop: "8px",
                        }}
                      >
                        Admin
                      </Button>
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        sx={{
                          backgroundColor: "#FFFFFF",
                          color: "#000",
                          padding: 1,
                          borderRadius: 1,
                          height: "14px",
                          width: "14px",
                        }}
                      >
                        <img src={svgIcon2} alt="svgIcon1" />
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
                {/* here */}

                <Grid
                  xs={12}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  bgcolor={"#DEE8FF"}
                  padding={1}
                  marginBottom={3}
                  borderRadius={2}
                >
                  <Grid item display={"flex"} alignItems={"center"} spacing={1}>
                    <Avatar alt="Ahmed" src={AhmedPic} />
                    <Typography
                      fontSize={16}
                      // lineHeight={"2.2rem"}
                      pr={1}
                      fontWeight={600}
                      margin={1}
                    >
                      Ahmed Maaz
                    </Typography>
                  </Grid>

                  <Grid item>
                    {/* <Stack direction={"row"} spacing={1}> */}
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#CAD7F5",
                        color: "#000000",
                        margin: "1",
                        fontSize: 10,
                        height: "30px",
                        fontWeight: "400",
                      }}
                    >
                      Member
                    </Button>
                    {/* </Stack> */}
                  </Grid>
                </Grid>

                <Grid
                  xs={12}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  bgcolor={"#DEE8FF"}
                  padding={1}
                  marginBottom={3}
                  borderRadius={2}
                >
                  <Grid item display={"flex"} alignItems={"center"} spacing={1}>
                    <Avatar alt="Ahmed" src={AhmedPic} />
                    <Typography
                      fontSize={16}
                      // lineHeight={"2.2rem"}
                      pr={1}
                      fontWeight={600}
                      margin={1}
                    >
                      Ahmed Maaz
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Stack direction={"row"} spacing={1}>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#CAD7F5",
                          color: "#000000",
                          margin: "1",
                          fontSize: 10,
                          height: "30px",
                          fontWeight: "400",
                        }}
                      >
                        Member
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>

                <Grid
                  xs={12}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  bgcolor={"#DEE8FF"}
                  padding={1}
                  // marginBottom={3}
                  borderRadius={2}
                >
                  <Grid item display={"flex"} alignItems={"center"} spacing={1}>
                    <Avatar alt="Ahmed" src={AhmedPic} />
                    <Typography
                      fontSize={16}
                      // lineHeight={"2.2rem"}
                      pr={1}
                      fontWeight={600}
                      margin={1}
                    >
                      Ahmed Maaz
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Stack direction={"row"} spacing={1}>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#CAD7F5",
                          color: "#000000",
                          margin: "1",
                          fontSize: 10,
                          height: "30px",
                          fontWeight: "400",
                        }}
                      >
                        Member
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* Slider */}
            <Grid item xs={1} display={"flex"} justifyContent={"center"}>
              <Box sx={{ height: "100%" }}>
                <Slider
                  sx={{
                    '& input[type="range"]': {
                      WebkitAppearance: "slider-vertical",
                    },
                    color: "#E8E8E8",
                  }}
                  orientation="vertical"
                  defaultValue={90}
                  aria-label="Temperature"
                  valueLabelDisplay="auto"
                  onKeyDown={preventHorizontalKeyboardNavigation}
                />
              </Box>
            </Grid>
            {/* Slider */}
          </Grid>
        ) : (
          <Grid container>
            {/* <Grid item xs={11}>  */}
            <Grid container>
              {/* here */}
              <Grid
                xs={12}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                bgcolor={"#F8991F"}
                padding={1}
                marginBottom={3}
                borderRadius={2}
              >
                <Grid item display={"flex"} alignItems={"center"} spacing={1}>
                  <Avatar alt="Ahmed" src={AhmedPic} />
                  <Typography
                    fontSize={16}
                    lineHeight={"2.2rem"}
                    pr={1}
                    fontWeight={600}
                    margin={1}
                    color={"#fff"}
                  >
                    Ahmed Maaz
                  </Typography>
                </Grid>

                <Grid item>
                  <Stack direction={"row"} spacing={1}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#FFFFFF",
                        color: "#000000",
                        margin: "1",
                        fontSize: 10,
                        height: "30px",
                        fontWeight: "400",
                        paddingTop: "8px",
                      }}
                    >
                      Admin
                    </Button>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        backgroundColor: "#FFFFFF",
                        color: "#000",
                        padding: 1,
                        borderRadius: 1,
                        height: "14px",
                        width: "14px",
                      }}
                    >
                      <img src={svgIcon2} alt="svgIcon1" />
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
              {/* here */}

              <Grid
                xs={12}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                bgcolor={"#DEE8FF"}
                padding={1}
                marginBottom={3}
                borderRadius={2}
              >
                <Grid item display={"flex"} alignItems={"center"} spacing={1}>
                  <Avatar alt="Ahmed" src={AhmedPic} />
                  <Typography
                    fontSize={16}
                    lineHeight={"2.2rem"}
                    pr={1}
                    fontWeight={600}
                    margin={1}
                  >
                    Ahmed Maaz
                  </Typography>
                </Grid>

                <Grid item>
                  <Stack direction={"row"} spacing={1}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#CAD7F5",
                        color: "#000000",
                        margin: "1",
                        fontSize: 10,
                        height: "30px",
                        fontWeight: "400",
                      }}
                    >
                      Member
                    </Button>
                  </Stack>
                </Grid>
              </Grid>

              <Grid
                xs={12}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                bgcolor={"#DEE8FF"}
                padding={1}
                marginBottom={3}
                borderRadius={2}
              >
                <Grid item display={"flex"} alignItems={"center"} spacing={1}>
                  <Avatar alt="Ahmed" src={AhmedPic} />
                  <Typography
                    fontSize={16}
                    lineHeight={"2.2rem"}
                    pr={1}
                    fontWeight={600}
                    margin={1}
                  >
                    Ahmed Maaz
                  </Typography>
                </Grid>

                <Grid item>
                  <Stack direction={"row"} spacing={1}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#CAD7F5",
                        color: "#000000",
                        margin: "1",
                        fontSize: 10,
                        height: "30px",
                        fontWeight: "400",
                      }}
                    >
                      Member
                    </Button>
                  </Stack>
                </Grid>
              </Grid>

              <Grid
                xs={12}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                bgcolor={"#DEE8FF"}
                padding={1}
                // marginBottom={3}
                borderRadius={2}
              >
                <Grid item display={"flex"} alignItems={"center"} spacing={1}>
                  <Avatar alt="Ahmed" src={AhmedPic} />
                  <Typography
                    fontSize={16}
                    lineHeight={"2.2rem"}
                    pr={1}
                    fontWeight={600}
                    margin={1}
                  >
                    Ahmed Maaz
                  </Typography>
                </Grid>

                <Grid item>
                  <Stack direction={"row"} spacing={1}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#CAD7F5",
                        color: "#000000",
                        margin: "1",
                        fontSize: 10,
                        height: "30px",
                        fontWeight: "400",
                      }}
                    >
                      Member
                    </Button>
                  </Stack>
                </Grid>
              </Grid>

              {/* </Grid> */}
            </Grid>
            {/* Slider */}
            {/* <Grid item xs={1}>
              <Box sx={{ height: '100%' }}>
                <Slider
                  sx={{
                    '& input[type="range"]': {
                      WebkitAppearance: 'slider-vertical',
                    },
                    color: '#E8E8E8'
                  }}
                  orientation="vertical"
                  defaultValue={90}
                  aria-label="Temperature"
                  valueLabelDisplay="auto"
                  onKeyDown={preventHorizontalKeyboardNavigation}
                />
              </Box>
            </Grid> */}
            {/* Slider */}
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Family;
