import React from "react";
import Header from "./Header";
import TitleBar from "./TitleBar";
import Grid from "@mui/material/Grid";
import MyDetails from "./MyDetails";
import BankAccount from "./BankAccount";
import BillingAddress from "./BillingAddress";
import Activities from "./Activities";
import Invitations from "./Invitations";
import Family from "./Family";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Dashboard = () => {
  const tablet = useMediaQuery("(min-width: 900px)");
  const mobile = useMediaQuery("(min-width: 498px)");

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  // Full Screen
  if (tablet && mobile) {
    return (
      <>
        <Header />
        <Grid container>
          <Grid item xs={12}>
            <TitleBar />
            <Grid container>
              <Grid item xs={8.5}>
                <Grid container>
                  <MyDetails />
                  <Grid item xs={7}>
                    <Grid container>
                      {/* <Grid item xs={12}> */}
                        <BankAccount />
                      {/* </Grid> */}
                      {/* <Grid item xs={12}> */}
                        <BillingAddress />
                      {/* </Grid> */}
                    </Grid>
                  </Grid>
                  <Grid item xs={5}>
                    <Grid container>
                      {/* <Grid item xs={12}> */}
                        <Activities />
                      {/* </Grid> */}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3.5}>
                <Grid container>
                  <Family />
                  <Invitations />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }

  // Medium Screen
  if (!tablet && mobile) {
    return (
      <>
        <Header />
        <Grid container marginTop={5} spacing={2}>
          {/* <Grid container> */}
          <Grid item xs={6.5}>
            <MyDetails />
          </Grid>
          <Grid item xs={5.5}>
            <Family />
          </Grid>
          {/* </Grid> */}
          {/* <Grid container> */}
          <Grid item xs={6}>
            <BankAccount />
          </Grid>
          <Grid item xs={6}>
            <BillingAddress />
          </Grid>
          {/* </Grid> */}
          {/* <Grid container> */}
          <Grid item xs={6}>
            <Activities />
          </Grid>
          <Grid item xs={6}>
            <Invitations />
          </Grid>
          {/* </Grid> */}
        </Grid>
      </>
    );
  }

  //Mobile Screen
  return (
    <>
      <Header />
      <Grid container>
        <TitleBar />
        <Grid item xs={12} margin={1}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider", }}>
              <Tabs
                sx={{ 
                  justifyContent:"space-between",
                  "& .css-wh9p97-MuiButtonBase-root-MuiTab-root.Mui-selected":
                    { color: "#f8991f", fontWeight: "700", },
                    "& .css-1aquho2-MuiTabs-indicator": {
                      backgroundColor:"#f8991f",
                    }
                }}
                value={value}
                onChange={handleChange}
                centered
                aria-label="basic tabs example"
              >
                <Tab label="Profile" {...a11yProps(0)} />
                <Tab label="Wallet" {...a11yProps(1)} />
                <Tab label="Activities" {...a11yProps(2)} />
                <Tab label="Invitations" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Family />
              <MyDetails />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <BankAccount />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Activities />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Invitations />
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
