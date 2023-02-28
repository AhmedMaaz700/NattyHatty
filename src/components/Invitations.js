import React from 'react'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import AhmedPic from '../assets/Ahmed_Pic.PNG'
import Chip from '@mui/material/Chip';
import Slider from '@mui/material/Slider';
import useMediaQuery from "@mui/material/useMediaQuery";

const Invitations = () => {
  const mobile = useMediaQuery("(max-width: 498px)");

  function preventHorizontalKeyboardNavigation(event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  }

  if(mobile){
    return (
      <>
        <Grid
          container
          // bgcolor={"#F5F6F8"}
          borderRadius={2}
          margin={1}
          padding={1}
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
                Invitations
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Box
                display={"flex"}
                justifyContent={"flex-end"}
                alignItems={"center"}
                position={"relative"}
              >
                <Chip
                  label="Sent(5)"
                  size="small"
                  sx={{
                    position: "relative",
                    left: "10%",
                    paddingRight: "10px",
                    color: "#232E3E",
                    backgroundColor: "#DBDBDB",
                  }}
                />
                <Chip
                  label="Received(15)"
                  size="small"
                  color="warning"
                  sx={{ position: "relative", zIndex: 1 }}
                />
                <Box
                  sx={{
                    backgroundColor: "#ed6c02",
                    height: "10px",
                    width: "10px",
                    rotate: "45deg",
                    position: "absolute",
                    top: "19px",
                    right: "40px",
                  }}
                ></Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
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
                <Grid item display={"flex"} alignItems={"center"}>
                  <Avatar alt="Ahmed" src={AhmedPic} />
                  <Box>
                    <Typography fontSize={'14px'} fontWeight={600} marginX={1}>
                      <span style={{ color: "#F8991F" }}>Ahmed Maaz</span> has
                      invited you to become his family member
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      marginX={1}
                      sx={{ color: "#818181" }}
                    >
                      22 February 11:00 AM
                    </Typography>
                  </Box>
                </Grid>

                <Grid item>
                  <Stack direction={"row"} spacing={1}>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        backgroundColor: "#0C611A",
                        color: "#fff",
                        padding: 1,
                        borderRadius: 1,
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      <DoneIcon />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        backgroundColor: "#FF3A3A",
                        color: "#fff",
                        padding: 1,
                        borderRadius: 1,
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      <CloseIcon />
                    </Box>
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
                <Grid item display={"flex"} alignItems={"center"}>
                  <Avatar alt="Ahmed" src={AhmedPic} />
                  <Box>
                    <Typography fontSize={'14px'} fontWeight={600} marginX={1}>
                      <span style={{ color: "#F8991F" }}>Ahmed Maaz</span> has
                      invited you to become his family member
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      marginX={1}
                      sx={{ color: "#818181" }}
                    >
                      22 February 11:00 AM
                    </Typography>
                  </Box>
                </Grid>

                <Grid item>
                  <Stack direction={"row"} spacing={1}>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        backgroundColor: "#0C611A",
                        color: "#fff",
                        padding: 1,
                        borderRadius: 1,
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      <DoneIcon />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        backgroundColor: "#FF3A3A",
                        color: "#fff",
                        padding: 1,
                        borderRadius: 1,
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      <CloseIcon />
                    </Box>
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
                <Grid item display={"flex"} alignItems={"center"}>
                  <Avatar alt="Ahmed" src={AhmedPic} />
                  <Box>
                    <Typography fontSize={'14px'} fontWeight={600} marginX={1}>
                      <span style={{ color: "#F8991F" }}>Ahmed Maaz</span> has
                      invited you to become his family member
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      marginX={1}
                      sx={{ color: "#818181" }}
                    >
                      22 February 11:00 AM
                    </Typography>
                  </Box>
                </Grid>

                <Grid item>
                  <Stack direction={"row"} spacing={1}>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        backgroundColor: "#0C611A",
                        color: "#fff",
                        padding: 1,
                        borderRadius: 1,
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      <DoneIcon />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        backgroundColor: "#FF3A3A",
                        color: "#fff",
                        padding: 1,
                        borderRadius: 1,
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      <CloseIcon />
                    </Box>
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
                <Grid item display={"flex"} alignItems={"center"}>
                  <Avatar alt="Ahmed" src={AhmedPic} />
                  <Box>
                    <Typography fontSize={'14px'} fontWeight={600} marginX={1}>
                      <span style={{ color: "#F8991F" }}>Ahmed Maaz</span> has
                      invited you to become his family member
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      marginX={1}
                      sx={{ color: "#818181" }}
                    >
                      22 February 11:00 AM
                    </Typography>
                  </Box>
                </Grid>

                <Grid item>
                  <Stack direction={"row"} spacing={1}>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        backgroundColor: "#0C611A",
                        color: "#fff",
                        padding: 1,
                        borderRadius: 1,
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      <DoneIcon />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        backgroundColor: "#FF3A3A",
                        color: "#fff",
                        padding: 1,
                        borderRadius: 1,
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      <CloseIcon />
                    </Box>
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
                <Grid item display={"flex"} alignItems={"center"}>
                  <Avatar alt="Ahmed" src={AhmedPic} />
                  <Box>
                    <Typography fontSize={'14px'} fontWeight={600} marginX={1}>
                      <span style={{ color: "#F8991F" }}>Ahmed Maaz</span> has
                      invited you to become his family member
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      marginX={1}
                      sx={{ color: "#818181" }}
                    >
                      22 February 11:00 AM
                    </Typography>
                  </Box>
                </Grid>

                <Grid item>
                  <Stack direction={"row"} spacing={1}>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        backgroundColor: "#0C611A",
                        color: "#fff",
                        padding: 1,
                        borderRadius: 1,
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      <DoneIcon />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        backgroundColor: "#FF3A3A",
                        color: "#fff",
                        padding: 1,
                        borderRadius: 1,
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      <CloseIcon />
                    </Box>
                  </Stack>
                </Grid>
              </Grid>

            </Grid>

            {/* <Grid item xs={1} display={"flex"} justifyContent={"center"}>
              <Box sx={{ height: "100%" }}>
                <Slider
                  sx={{
                    '& input[type="range"]': {
                      WebkitAppearance: "slider-vertical",
                    },
                    color: "#E8E8E8",
                  }}
                  orientation="vertical"
                  defaultValue={85}
                  aria-label="Temperature"
                  valueLabelDisplay="auto"
                  onKeyDown={preventHorizontalKeyboardNavigation}
                />
              </Box>
            </Grid> */}
          </Grid>
        </Grid>
      </>
    )
  }

  return (
    <>
      <Grid
        container
        bgcolor={"#F5F6F8"}
        borderRadius={2}
        margin={1}
        padding={2}
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
              Invitations
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Box
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"center"}
              position={"relative"}
            >
              <Chip
                label="Sent(5)"
                size="small"
                sx={{
                  position: "relative",
                  left: "10%",
                  paddingRight: "10px",
                  color: "#232E3E",
                  backgroundColor: "#DBDBDB",
                }}
              />
              <Chip
                label="Received(15)"
                size="small"
                color="warning"
                sx={{ position: "relative", zIndex: 1 }}
              />
              <Box
                sx={{
                  backgroundColor: "#ed6c02",
                  height: "10px",
                  width: "10px",
                  rotate: "45deg",
                  position: "absolute",
                  top: "19px",
                  right: "40px",
                }}
              ></Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container>
            <Grid item xs={11}>
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
                <Grid item display={"flex"} alignItems={"center"}>
                  <Avatar alt="Ahmed" src={AhmedPic} />
                  <Box>
                    <Typography fontSize={'14px'} fontWeight={600} marginX={1}>
                      <span style={{ color: "#F8991F" }}>Ahmed Maaz</span> has
                      invited you to become his family member
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      marginX={1}
                      sx={{ color: "#818181" }}
                    >
                      22 February 11:00 AM
                    </Typography>
                  </Box>
                </Grid>

                <Grid item>
                  <Stack direction={"row"} spacing={1}>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        backgroundColor: "#0C611A",
                        color: "#fff",
                        padding: 1,
                        borderRadius: 1,
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      <DoneIcon />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        backgroundColor: "#FF3A3A",
                        color: "#fff",
                        padding: 1,
                        borderRadius: 1,
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      <CloseIcon />
                    </Box>
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
                <Grid item display={"flex"} alignItems={"center"}>
                  <Avatar alt="Ahmed" src={AhmedPic} />
                  <Box>
                    <Typography fontSize={'14px'} fontWeight={600} marginX={1}>
                      <span style={{ color: "#F8991F" }}>Ahmed Maaz</span> has
                      invited you to become his family member
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      marginX={1}
                      sx={{ color: "#818181" }}
                    >
                      22 February 11:00 AM
                    </Typography>
                  </Box>
                </Grid>

                <Grid item>
                  <Stack direction={"row"} spacing={1}>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        backgroundColor: "#0C611A",
                        color: "#fff",
                        padding: 1,
                        borderRadius: 1,
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      <DoneIcon />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        backgroundColor: "#FF3A3A",
                        color: "#fff",
                        padding: 1,
                        borderRadius: 1,
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      <CloseIcon />
                    </Box>
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
                <Grid item display={"flex"} alignItems={"center"}>
                  <Avatar alt="Ahmed" src={AhmedPic} />
                  <Box>
                    <Typography fontSize={'14px'} fontWeight={600} marginX={1}>
                      <span style={{ color: "#F8991F" }}>Ahmed Maaz</span> has
                      invited you to become his family member
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      marginX={1}
                      sx={{ color: "#818181" }}
                    >
                      22 February 11:00 AM
                    </Typography>
                  </Box>
                </Grid>

                <Grid item>
                  <Stack direction={"row"} spacing={1}>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        backgroundColor: "#0C611A",
                        color: "#fff",
                        padding: 1,
                        borderRadius: 1,
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      <DoneIcon />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        backgroundColor: "#FF3A3A",
                        color: "#fff",
                        padding: 1,
                        borderRadius: 1,
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      <CloseIcon />
                    </Box>
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
                <Grid item display={"flex"} alignItems={"center"}>
                  <Avatar alt="Ahmed" src={AhmedPic} />
                  <Box>
                    <Typography fontSize={'14px'} fontWeight={600} marginX={1}>
                      <span style={{ color: "#F8991F" }}>Ahmed Maaz</span> has
                      invited you to become his family member
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      marginX={1}
                      sx={{ color: "#818181" }}
                    >
                      22 February 11:00 AM
                    </Typography>
                  </Box>
                </Grid>

                <Grid item>
                  <Stack direction={"row"} spacing={1}>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        backgroundColor: "#0C611A",
                        color: "#fff",
                        padding: 1,
                        borderRadius: 1,
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      <DoneIcon />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        backgroundColor: "#FF3A3A",
                        color: "#fff",
                        padding: 1,
                        borderRadius: 1,
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      <CloseIcon />
                    </Box>
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
                <Grid item display={"flex"} alignItems={"center"}>
                  <Avatar alt="Ahmed" src={AhmedPic} />
                  <Box>
                    <Typography fontSize={'14px'} fontWeight={600} marginX={1}>
                      <span style={{ color: "#F8991F" }}>Ahmed Maaz</span> has
                      invited you to become his family member
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      marginX={1}
                      sx={{ color: "#818181" }}
                    >
                      22 February 11:00 AM
                    </Typography>
                  </Box>
                </Grid>

                <Grid item>
                  <Stack direction={"row"} spacing={1}>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        backgroundColor: "#0C611A",
                        color: "#fff",
                        padding: 1,
                        borderRadius: 1,
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      <DoneIcon />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        backgroundColor: "#FF3A3A",
                        color: "#fff",
                        padding: 1,
                        borderRadius: 1,
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      <CloseIcon />
                    </Box>
                  </Stack>
                </Grid>
              </Grid>

            </Grid>

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
                  defaultValue={85}
                  aria-label="Temperature"
                  valueLabelDisplay="auto"
                  onKeyDown={preventHorizontalKeyboardNavigation}
                />
              </Box>
            </Grid>
        </Grid>      
      </Grid>
    </>
  );
}

export default Invitations
