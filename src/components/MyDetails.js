import React from "react";
import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import AhmedPic from "../assets/Ahmed_Pic.PNG";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import cameraIcon from "../assets/Component 53 – 1.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const MyDetails = () => {
  const mobile = useMediaQuery("(max-width: 498px)");
  const tablet = useMediaQuery("(max-width: 900px)");
  const labelStyle = { wordWrap: "break-word", lineHeight: "2.7" };
  const textStyle = { marginTop: "0%", backgroundColor: 'white' };

      if(!mobile && !tablet){
        return (
          <>    
        <Grid
          container
          bgcolor={"#F5F6F8"}
          display={"flex"}
          alignItems={"center"}
          borderRadius={2}
          spacing={0.5}
          m={1}
          p={2}
          pr={0}
          >
          <Grid item md={1} sm={4}
            // spacing={2}
            // direction={"row"}
            // margin={1}
            // padding={2}
          >
            <Avatar
              alt="Ahmed Maaz"
              src={AhmedPic}
              sx={{ width: 100, height: 100, marginTop: 2 }}
            />
            <Box
              borderRadius={"50%"}
              border={"1px solid #A2A2A2"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              backgroundColor={"#FFFFFF"}
              height={"20px"}
              width={"20px"}
              position={"relative"}
              top={"-25px"}
              left={"70px"}
            >
              <img src={cameraIcon} alt="camera_icon" />
            </Box>
          </Grid>

          <Grid item md={2} sm={8}>
            <Typography
              fontWeight={600}
              fontSize={26}
              paddingLeft={1}
              gutterBottom
              marginTop={3}
            >
              Ahmed Maaz
            </Typography>
            <Box display={'flex'} alignItems={'center'}>
              <LocationOnIcon color="#F5F6F8" fontSize={'12'}/>
              <Typography
                variant="caption"
                display="block"
                fontSize={14}
                paddingLeft={1}
                // gutterBottom
                sx={{ color: "#818181" }}
              >
                Bareilly, UP, 243005
              </Typography>
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />
          </Grid>
        
          <Grid item md={4} sm={12}> 
            <Grid container>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item md={4} sm={6} xs={6} padding={1}>
                    <Typography sx={labelStyle} fontSize={12}>
                      First Name:
                    </Typography>
                  </Grid>
                  <Grid item md={8} sm={6} xs={6}>
                    <TextField
                      sx={textStyle}
                      size="small"
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item md={4} sm={6} xs={6} padding={1}>
                    <Typography sx={labelStyle} fontSize={12}>
                      Last Name:
                    </Typography>
                  </Grid>
                  <Grid item md={8} sm={6} xs={6}>
                    <TextField
                      sx={textStyle}
                      size="small"
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item md={4} sm={6} xs={6} padding={1}>
                    <Typography sx={labelStyle} fontSize={12}>
                      Email:
                    </Typography>
                  </Grid>
                  <Grid item md={8} sm={6} xs={6}>
                    <TextField
                      sx={textStyle}
                      size="small"
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={3} sm={12}>
            <Grid container>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item md={4} sm={6} xs={6} padding={1}>
                    <Typography sx={labelStyle} fontSize={12}>
                      Phone No:
                    </Typography>
                  </Grid>
                  <Grid item md={8} sm={6} xs={6}>
                    <TextField
                      sx={textStyle}
                      size="small"
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item md={4} sm={6} xs={6} padding={1}>
                    <Typography sx={labelStyle} fontSize={12}>
                      Grad Year:
                    </Typography>
                  </Grid>
                  <Grid item md={8} sm={6} xs={6}>
                    <TextField
                      sx={textStyle}
                      size="small"
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item md={4} sm={6} xs={6} padding={1}>
                    <Typography sx={labelStyle} fontSize={12}>
                      DOB:
                    </Typography>
                  </Grid>
                  <Grid item md={8} sm={6} xs={6}>
                    <TextField
                      sx={textStyle}
                      size="small"
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={2} sm={12} spacing={1} justifyContent={"flex-end"}>
            <Grid container spacing={2} margin={1} marginLeft={'20%'} marginTop={0}>
              <Grid item md={12} sm={4}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#0C611A",
                    // m: "1",
                    fontSize: 10,
                    width: "65%",
                    height: "30px",
                  }}
                >
                  Save Changes
                </Button>
              </Grid>
              <Grid item md={12} sm={4}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#232E3E",
                    // m: "1",
                    fontSize: 10,
                    width: "65%",
                    height: "30px",
                  }}
                >
                  Change Password
                </Button>
              </Grid>
              <Grid item md={12} sm={4}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FF3A3A",
                    // m: "1",
                    fontSize: 10,
                    width: "65%",
                    height: "30px",
                  }}
                >
                  Leave Family
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </>
        )}

      if(!mobile && tablet){
        return (
        <Grid
          container
          bgcolor={"#F5F6F8"}
          display={"flex"}
          alignItems={"center"}
          borderRadius={2}
          spacing={0.5}
          m={1}
          p={2}
          pr={0}
          >
            <Grid item md={1} sm={4}
              // spacing={2}
              // direction={"row"}
              // margin={1}
              // padding={2}
            >
              <Avatar
                alt="Ahmed Maaz"
                src={AhmedPic}
                sx={{ width: 60, height: 60, marginTop: 2 }}
              />
              <Box
                borderRadius={"50%"}
                border={"1px solid #A2A2A2"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"#FFFFFF"}
                height={"20px"}
                width={"20px"}
                position={"relative"}
                top={"-20px"}
                left={"35px"}
              >
                <img src={cameraIcon} alt="camera_icon" />
              </Box>
            </Grid>

            <Grid item md={2} sm={8}>
              <Typography
                fontWeight={500}
                fontSize={16}
                paddingLeft={1}
                gutterBottom
                marginTop={3}
              >
                Ahmed Maaz
              </Typography>
              <Typography
                variant="caption"
                display="block"
                paddingLeft={1}
                gutterBottom
                sx={{ color: "#818181" }}
              >
                Bareilly, UP, 243005
              </Typography>
              <Divider orientation="vertical" variant="middle" flexItem />
            </Grid>

            <Grid item md={3} sm={12}>
              <Grid container>               
                <Grid item xs={12} >
                  <Grid container >
                    <Grid item xs={4} paddingRight={1}>
                      <Typography sx={labelStyle} fontSize={12}>
                        First Name:
                      </Typography>
                      <TextField
                        sx={textStyle}
                        size="small"
                        id="outlined-basic"
                        label=""
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={4} paddingRight={1}>
                    <Typography sx={labelStyle} fontSize={12}>
                        Last Name:
                      </Typography>
                      <TextField
                        sx={textStyle}
                        size="small"
                        id="outlined-basic"
                        label=""
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={4} paddingRight={1}>
                    <Typography sx={labelStyle} fontSize={12}>
                        Grad Year:
                      </Typography>
                      <TextField
                        sx={textStyle}
                        size="small"
                        id="outlined-basic"
                        label=""
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={6}  paddingRight={1}>
                      <Typography sx={labelStyle} fontSize={12}>
                        Phone:
                      </Typography>
                      <TextField
                        sx={textStyle}
                        size="small"
                        id="outlined-basic"
                        label=""
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6} paddingRight={1}>
                    <Typography sx={labelStyle} fontSize={12}>
                        DOB:
                      </Typography>
                      <TextField
                        sx={textStyle}
                        size="small"
                        id="outlined-basic"
                        label=""
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={3} sm={12} spacing={1} display={'flex'} justifyContent={"center"}>
              <Grid container spacing={2} margin={1} display={'flex'} >
                <Grid item md={12} sm={4}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#0C611A",
                      // m: "1",
                      fontSize: 10,
                      width: "100%",
                      height: "30px",
                    }}
                  >
                    Save Changes
                  </Button>
                </Grid>
                <Grid item md={12} sm={4}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#232E3E",
                      // m: "1",
                      fontSize: 10,
                      width: "100%",
                      height: "30px",
                    }}
                  >
                    Change Password
                  </Button>
                </Grid>
                <Grid item md={12} sm={4}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#FF3A3A",
                      // m: "1",
                      fontSize: 10,
                      width: "100%",
                      height: "30px",
                    }}
                  >
                    Leave Family
                  </Button>
                </Grid>
              </Grid>
          </Grid> 
        </Grid>
      )}

      return (
        <Grid
          container
          bgcolor={"#F5F6F8"}
          display={"flex"}
          alignItems={"center"}
          borderRadius={2}
          spacing={0.5}
          m={1}
          p={2}
          pr={0}
          >
          <Grid item md={1} sm={4}
            // spacing={2}
            // direction={"row"}
            // margin={1}
            // padding={2}
          >
            <Avatar
              alt="Ahmed Maaz"
              src={AhmedPic}
              sx={{ width: 60, height: 60, marginTop: 2 }}
            />
            <Box
              borderRadius={"50%"}
              border={"1px solid #A2A2A2"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              backgroundColor={"#FFFFFF"}
              height={"20px"}
              width={"20px"}
              position={"relative"}
              top={"-20px"}
              left={"35px"}
            >
              <img src={cameraIcon} alt="camera_icon" />
            </Box>
          </Grid>

          <Grid item md={2} sm={8}>
            <Typography
              fontWeight={500}
              fontSize={16}
              paddingLeft={1}
              gutterBottom
              marginTop={3}
            >
              Ahmed Maaz
            </Typography>
            <Typography
              variant="caption"
              display="block"
              paddingLeft={1}
              gutterBottom
              sx={{ color: "#818181" }}
            >
              Bareilly, UP, 243005
            </Typography>
            <Divider orientation="vertical" variant="middle" flexItem />
          </Grid>

          <Grid item md={3} sm={12} paddingRight={1}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                    <Typography sx={labelStyle} fontSize={12}>
                      First Name:
                    </Typography>
                    <TextField
                      sx={textStyle}
                      size="small"
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                    />
              </Grid>
              <Grid item xs={6}>
                    <Typography sx={labelStyle} fontSize={12}>
                      Last Name:
                    </Typography>
                    <TextField
                      sx={textStyle}
                      size="small"
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                    />
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={3} sm={12} paddingRight={1}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography sx={labelStyle} fontSize={12}>
                  Phone:
                </Typography>
                <TextField
                  sx={textStyle}
                  size="small"
                  id="outlined-basic"
                  label=""
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <Typography sx={labelStyle} fontSize={12}>
                  Graduation Year:
                </Typography>
                <TextField
                  sx={textStyle}
                  size="small"
                  id="outlined-basic"
                  label=""
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={3} sm={12} spacing={1} justifyContent={"flex-end"}>
            <Grid container spacing={2} margin={1} paddingLeft={3}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#232E3E",
                  // m: "1",
                  fontSize: 10,
                  width: "80%",
                  height: "40px"
                }}
              >
                Edit Details
              </Button>
            </Grid>
          </Grid>
          
          </Grid>
      );
};

export default MyDetails;
