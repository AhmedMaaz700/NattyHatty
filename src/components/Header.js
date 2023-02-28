import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AhmedPic from '../assets/Ahmed_Pic.PNG'
import Backdrop from '@mui/material/Backdrop';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Menu1 from '../assets/Component 330 – 1.svg'
import Menu2 from '../assets/profit (2).png';
import Menu3 from '../assets/teamwork.png';
import Logout from '../assets/logout.png';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
    
    const pages = ['Menu 1', 'Menu 2', 'Menu 3'];
    
    const Header = () => {  
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };
    
    const [opens, setOpens] = React.useState(true);

    const handleClick = () => {
      setOpens(!opens);
    };

  return (
    // <>
      <AppBar position="static" sx={{ backgroundColor: "#232E3E", }}>
        <Container maxWidth="" >
          <Toolbar disableGutters >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // color='#F8991F'
                // onClick={handleOpenNavMenu}
                onClick={handleToggle}
                color="inherit"
              >
                <MenuIcon sx={{ color: '#F8991F' }}/>
              </IconButton>
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={open}
                // onClick={handleClose}
              >
                {/* // */}
                <Grid
                  container
                  bgcolor={"#232E3E"}
                  spacing={2}
                  p={2}
                  height="100%"
                >
                  <Grid
                    item
                    xs={12}
                    // sm={12}
                    direction={"row"}
                    spacing={2}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Grid
                      container
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"left"}
                    >
                      <Grid item xs={1}>
                        <Typography variant="h5">Logo</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          sx={{
                            backgroundColor: "#F7F7F7",
                            color: "#818181",
                            padding: 1,
                            borderRadius: 1,
                            height: "20px",
                            width: "20px",
                          }}
                        >
                          <CloseIcon
                            onClick={(e) => {
                              e.stopPropagation();
                              handleClose();
                            }}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={1}>
                    <Avatar
                      alt="Ahmed Maaz"
                      src={AhmedPic}
                      sx={{ width: 70, height: 70, marginTop: 2 }}
                    />
                  </Grid>
                  <Grid item md={2}>
                    <Typography variant="h6" gutterBottom marginTop={3}>
                      Ahmed Maaz
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      sx={{ color: "#fff" }}
                    >
                      Bareilly, UP, 243005
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <List
                      sx={{ width: "100%", maxWidth: 360, bgcolor: "#232E3E", }}
                      component="nav"
                      aria-labelledby="nested-list-subheader"
                    >
                      <ListItemButton onClick={handleClick}>
                        {/* <ListItemIcon> */}
                          {/* <InboxIcon sx={{ color: '#F8991F' }} /> */}
                          <img src={Menu1} alt="Menu1" />
                          <StarRoundedIcon
                            sx={{
                              color: "#F8991F",
                              blockSize: "8px",
                              position: "relative",
                              top: "2.5px",
                              right: "20px",
                            }}
                          />
                        {/* </ListItemIcon> */}
                        <ListItemText
                          primary="Menu 1"
                          sx={{ color: "#F8991F",  }}
                        />
                        {opens ? (
                          <ExpandLess sx={{ color: "#F8991F" }} />
                        ) : (
                          <ExpandMore sx={{ color: "#F8991F" }} />
                        )}
                      </ListItemButton>
                      <Collapse in={opens} timeout="auto" unmountOnExit >
                        {/* <Box sx={{ border: '1px solid red', width: '0px', height: '70px' }}></Box> */}
                        <List
                          sx={{
                            borderLeft: "2px solid #F8991F",
                            marginLeft: "25px",
                            // borderBottom: "2px solid white",
                          }}
                          component="div"
                          disablePadding
                        >
                          <ListItemButton sx={{ pl: 0 }}>
                            {/* <ListItemIcon> */}
                              <HorizontalRuleIcon sx={{ color: "#F8991F", position: 'relative', left: '-4px' }} />
                            {/* </ListItemIcon> */}
                            <ListItemText primary="Sub Menu 1" />
                          </ListItemButton>
                        </List>
                        {/* </Collapse>
                      <Collapse in={opens} timeout="auto" unmountOnExit> */}
                        <List
                          sx={{
                            borderLeft: "2px solid #F8991F",
                            marginLeft: "25px",
                            // borderBottom: "2px solid white",
                          }}
                          component="div"
                          disablePadding
                        >
                          <ListItemButton sx={{ pl: 0 }}>
                            {/* <ListItemIcon> */}
                              <HorizontalRuleIcon sx={{ color: "#F8991F", position: 'relative', left: '-4px' }} />
                            {/* </ListItemIcon> */}
                            <ListItemText primary="Sub Menu 2" />
                          </ListItemButton>
                        </List>
                        {/* </Collapse>
                      <Collapse in={opens} timeout="auto" unmountOnExit> */}
                        <List
                          sx={{
                            borderLeft: "2px solid #F8991F",
                            marginLeft: "25px",
                            // borderBottom: "2px solid white",
                          }}
                          component="div"
                          disablePadding
                        >
                          <ListItemButton sx={{ pl: 0 }}>
                            {/* <ListItemIcon> */}
                            <Box sx={{ width: '4px', height: '24px', backgroundColor: '#232E3E', position: 'relative', top: '13px', left: '-3px' }}></Box>
                              <HorizontalRuleIcon sx={{ color: "#F8991F", position: 'relative', left: '-8px' }} />
                            {/* </ListItemIcon> */}
                            <ListItemText primary="Sub Menu 3" />
                          </ListItemButton>
                        </List>
                      </Collapse>
                      <ListItemButton>
                        <ListItemIcon>
                          {/* <SendIcon sx={{ color: '#fff' }} /> */}
                          <img src={Menu2} alt="Menu2" />
                        </ListItemIcon>
                        <ListItemText primary="Menu 2" />
                      </ListItemButton>

                      <ListItemButton>
                        <ListItemIcon>
                          {/* <DraftsIcon sx={{ color: '#fff' }} /> */}
                          <img src={Menu3} alt="Menu3" />
                        </ListItemIcon>
                        <ListItemText primary="Menu 3" />
                      </ListItemButton>

                      <ListItemButton>
                        <ListItemIcon>
                          {/* <LogoutIcon sx={{ color: '#fff' }} /> */}
                          <img src={Logout} alt="Logout" />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                      </ListItemButton>
                    </List>
                  </Grid>
                </Grid>

                {/* // */}
              </Backdrop>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                position: "absolute",
                left: "50px",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "400px",
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    // onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={0} color="error">
                  <NotificationsNoneIcon />
                </Badge>
              </IconButton>
              <Tooltip>
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Ahmed" src={AhmedPic} />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
}

export default Header
