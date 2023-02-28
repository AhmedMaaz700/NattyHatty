import React from 'react'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import svgIcon1 from '../assets/Icon awesome-users-cog.svg'
import Avatar from '@mui/material/Avatar';
import useMediaQuery from "@mui/material/useMediaQuery";

const Activities = () => {
  const mobile = useMediaQuery("(max-width: 498px)");
  // const tablet = useMediaQuery("(max-width: 900px)");

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
          <Grid container>
            <Grid item xs={12}>
              <Grid container>
                <Grid item 
                  xs={12} 
                  display={"flex"}
                  // justifyContent={"space-between"}
                  alignItems={"center"}
                  // bgcolor={"#F8991F"}
                  padding={1}
                  // marginBottom={3}
                  borderRadius={2}
                >
                  <Avatar sx={{ bgcolor: "#DEE8FF", margin: "1" }}>
                    <img src={svgIcon1} alt="svgIcon1" />
                  </Avatar>
                  <Box marginLeft={1}>
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      // fontSize={'14px'}
                      gutterBottom
                    >
                      Leslie Alexander updated her{" "}
                      <span style={{ color: "#F8991F" }}>Account Type</span>
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      sx={{ color: "#818181" }}
                    >
                      22 February 11:00 AM
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container>
                <Grid item 
                  xs={12} 
                  display={"flex"}
                  // justifyContent={"space-between"}
                  alignItems={"center"}
                  // bgcolor={"#F8991F"}
                  padding={1}
                  // marginBottom={3}
                  borderRadius={2}
                >
                  <Avatar sx={{ bgcolor: "#DEE8FF", margin: "1" }}>
                    <img src={svgIcon1} alt="svgIcon1" />
                  </Avatar>
                  <Box marginLeft={1}>
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      // fontSize={'14px'}
                      gutterBottom
                    >
                      John Smith removed mark Fleix from {" "}
                      <span style={{ color: "#F8991F" }}>Family member</span>
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      sx={{ color: "#818181" }}
                    >
                      22 February 11:00 AM
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container>
                <Grid item 
                  xs={12} 
                  display={"flex"}
                  // justifyContent={"space-between"}
                  alignItems={"center"}
                  // bgcolor={"#F8991F"}
                  padding={1}
                  // marginBottom={3}
                  borderRadius={2}
                >
                  <Avatar sx={{ bgcolor: "#DEE8FF", margin: "1" }}>
                    <img src={svgIcon1} alt="svgIcon1" />
                  </Avatar>
                  <Box marginLeft={1}>
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      // fontSize={'14px'}
                      gutterBottom
                    >
                      Leslie Alexander updated her{" "}
                      <span style={{ color: "#F8991F" }}>Account Type</span>
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      sx={{ color: "#818181" }}
                    >
                      22 February 11:00 AM
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container>
                <Grid item 
                  xs={12} 
                  display={"flex"}
                  // justifyContent={"space-between"}
                  alignItems={"center"}
                  // bgcolor={"#F8991F"}
                  padding={1}
                  // marginBottom={3}
                  borderRadius={2}
                >
                  <Avatar sx={{ bgcolor: "#DEE8FF", margin: "1" }}>
                    <img src={svgIcon1} alt="svgIcon1" />
                  </Avatar>
                  <Box marginLeft={1}>
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      // fontSize={'14px'}
                      gutterBottom
                    >
                      John Smith removed mark Fleix from {" "}
                      <span style={{ color: "#F8991F" }}>Family member</span>
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      sx={{ color: "#818181" }}
                    >
                      22 February 11:00 AM
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container>
                <Grid item 
                  xs={12} 
                  display={"flex"}
                  // justifyContent={"space-between"}
                  alignItems={"center"}
                  // bgcolor={"#F8991F"}
                  padding={1}
                  // marginBottom={3}
                  borderRadius={2}
                >
                  <Avatar sx={{ bgcolor: "#DEE8FF", margin: "1" }}>
                    <img src={svgIcon1} alt="svgIcon1" />
                  </Avatar>
                  <Box marginLeft={1}>
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      // fontSize={'14px'}
                      gutterBottom
                    >
                      Leslie Alexander updated her{" "}
                      <span style={{ color: "#F8991F" }}>Account Type</span>
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      sx={{ color: "#818181" }}
                    >
                      22 February 11:00 AM
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
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
          <Typography
            variant="h4"
            fontSize={"18 !important"}
            fontWeight={"400 !important"}
            gutterBottom
            marginTop={1}
          >
            Activities
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0C611A",
              m: "1",
              fontSize: 10,
              height: "30px",
            }}
          >
            View All
          </Button>
        </Grid>
        
        <Grid container>
          <Grid item xs={12}>
            <Grid container>
              <Grid item 
                xs={12} 
                display={"flex"}
                // justifyContent={"space-between"}
                alignItems={"center"}
                // bgcolor={"#F8991F"}
                padding={1}
                marginBottom={3}
                borderRadius={2}
              >
                <Avatar sx={{ bgcolor: "#DEE8FF", margin: "1" }}>
                  <img src={svgIcon1} alt="svgIcon1" />
                </Avatar>
                <Box marginLeft={1}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    // fontSize={'14px'}
                    gutterBottom
                  >
                    Leslie Alexander updated her{" "}
                    <span style={{ color: "#F8991F" }}>Account Type</span>
                  </Typography>
                  <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                    sx={{ color: "#818181" }}
                  >
                    22 February 11:00 AM
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container>
              <Grid item 
                xs={12} 
                display={"flex"}
                // justifyContent={"space-between"}
                alignItems={"center"}
                // bgcolor={"#F8991F"}
                padding={1}
                marginBottom={3}
                borderRadius={2}
              >
                <Avatar sx={{ bgcolor: "#DEE8FF", margin: "1" }}>
                  <img src={svgIcon1} alt="svgIcon1" />
                </Avatar>
                <Box marginLeft={1}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    // fontSize={'14px'}
                    gutterBottom
                  >
                    John Smith removed mark Fleix from {" "}
                    <span style={{ color: "#F8991F" }}>Family member</span>
                  </Typography>
                  <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                    sx={{ color: "#818181" }}
                  >
                    22 February 11:00 AM
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container>
              <Grid item 
                xs={12} 
                display={"flex"}
                // justifyContent={"space-between"}
                alignItems={"center"}
                // bgcolor={"#F8991F"}
                padding={1}
                marginBottom={3}
                borderRadius={2}
              >
                <Avatar sx={{ bgcolor: "#DEE8FF", margin: "1" }}>
                  <img src={svgIcon1} alt="svgIcon1" />
                </Avatar>
                <Box marginLeft={1}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    // fontSize={'14px'}
                    gutterBottom
                  >
                    Leslie Alexander updated her{" "}
                    <span style={{ color: "#F8991F" }}>Account Type</span>
                  </Typography>
                  <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                    sx={{ color: "#818181" }}
                  >
                    22 February 11:00 AM
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container>
              <Grid item 
                xs={12} 
                display={"flex"}
                // justifyContent={"space-between"}
                alignItems={"center"}
                // bgcolor={"#F8991F"}
                padding={1}
                marginBottom={3}
                borderRadius={2}
              >
                <Avatar sx={{ bgcolor: "#DEE8FF", margin: "1" }}>
                  <img src={svgIcon1} alt="svgIcon1" />
                </Avatar>
                <Box marginLeft={1}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    // fontSize={'14px'}
                    gutterBottom
                  >
                    John Smith removed mark Fleix from {" "}
                    <span style={{ color: "#F8991F" }}>Family member</span>
                  </Typography>
                  <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                    sx={{ color: "#818181" }}
                  >
                    22 February 11:00 AM
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container>
              <Grid item 
                xs={12} 
                display={"flex"}
                // justifyContent={"space-between"}
                alignItems={"center"}
                // bgcolor={"#F8991F"}
                padding={1}
                marginBottom={3}
                borderRadius={2}
              >
                <Avatar sx={{ bgcolor: "#DEE8FF", margin: "1" }}>
                  <img src={svgIcon1} alt="svgIcon1" />
                </Avatar>
                <Box marginLeft={1}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    // fontSize={'14px'}
                    gutterBottom
                  >
                    Leslie Alexander updated her{" "}
                    <span style={{ color: "#F8991F" }}>Account Type</span>
                  </Typography>
                  <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                    sx={{ color: "#818181" }}
                  >
                    22 February 11:00 AM
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container>
              <Grid item 
                xs={12} 
                display={"flex"}
                // justifyContent={"space-between"}
                alignItems={"center"}
                // bgcolor={"#F8991F"}
                padding={1}
                marginBottom={3}
                borderRadius={2}
              >
                <Avatar sx={{ bgcolor: "#DEE8FF", margin: "1" }}>
                  <img src={svgIcon1} alt="svgIcon1" />
                </Avatar>
                <Box marginLeft={1}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    // fontSize={'14px'}
                    gutterBottom
                  >
                    John Smith removed mark Fleix from {" "}
                    <span style={{ color: "#F8991F" }}>Family member</span>
                  </Typography>
                  <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                    sx={{ color: "#818181" }}
                  >
                    22 February 11:00 AM
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
    </>
  );
}

export default Activities
