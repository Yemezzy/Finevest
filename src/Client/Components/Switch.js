// import * as React from "react";
// import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";
// import { useTheme } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Zoom from "@mui/material/Zoom";
// import Fab from "@mui/material/Fab";
// import HandshakeIcon from "@mui/icons-material/Handshake";
// import GroupsIcon from "@mui/icons-material/Groups";
// import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
// import { green } from "@mui/material/colors";
// import Box from "@mui/material/Box";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`action-tabpanel-${index}`}
//       aria-labelledby={`action-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </Typography>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `action-tab-${index}`,
//     "aria-controls": `action-tabpanel-${index}`,
//   };
// }

// const fabStyle = {
//   position: "absolute",
//   bottom: 16,
//   right: 16,
// };

// const fabGreenStyle = {
//   color: "common.white",
//   bgcolor: green[500],
//   "&:hover": {
//     bgcolor: green[600],
//   },
// };

// export default function FloatingActionButtonZoom() {
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

//   const transitionDuration = {
//     enter: theme.transitions.duration.enteringScreen,
//     exit: theme.transitions.duration.leavingScreen,
//   };

//   const fabs = [
//     {
//       color: "primary",
//       sx: fabStyle,
//       icon: <GroupsIcon />,
//       label: "Add",
//     },
//     {
//       color: "secondary",
//       sx: fabStyle,
//       icon: <HandshakeIcon />,
//       label: "Edit",
//     },
//     {
//       color: "inherit",
//       sx: { ...fabStyle, ...fabGreenStyle },
//       icon: <ThumbUpAltIcon />,
//       label: "Expand",
//     },
//   ];

//     return (
//       <div>
//         <div className="md:ml-14 ml-5 pb-5 md:block hidden">
//           <Box
//             sx={{
//               bgcolor: "",
//               width: 500,
//               color: "#F9A403",
//               border: 2,
//               position: "relative",
//               minHeight: 300,
//             }}
//           >
//             <AppBar position="static" color="default">
//               <Tabs
//                 value={value}
//                 onChange={handleChange}
//                 indicatorColor="primary"
//                 textColor="primary"
//                 variant="fullWidth"
//                 aria-label="action tabs example"
//               >
//                 <Tab label="OUR MISSION" {...a11yProps(0)} />
//                 <Tab label="OUR GUARANTEES" {...a11yProps(1)} />
//                 <Tab label="OUR ADVANTAGES" {...a11yProps(2)} />
//               </Tabs>
//             </AppBar>
//             <SwipeableViews
//               axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//               index={value}
//               onChangeIndex={handleChangeIndex}
//             >
//               <TabPanel value={value} index={0} dir={theme.direction}>
//                 The group Supports global financial stability and economic
//                 growth by enabling businesses and economies to fund innovation,
//                 manage risk and create jobs. The group can trace its history
//                 back to 1698.
//               </TabPanel>
//               <TabPanel value={value} index={1} dir={theme.direction}>
//                 BIG APPLE INVESTMENT operates an open access model, offering
//                 choic and partnership to customers across all of its businesses
//               </TabPanel>
//               <TabPanel value={value} index={2} dir={theme.direction}>
//                 FINVEST HUB Technology develops technology solutions, including
//                 high performance technology solutions, including training,
//                 market surveillance and post trade systems for over 40
//                 organisations and exchanges, including the Group's own markets.
//               </TabPanel>
//             </SwipeableViews>
//             {fabs.map((fab, index) => (
//               <Zoom
//                 key={fab.color}
//                 in={value === index}
//                 timeout={transitionDuration}
//                 style={{
//                   transitionDelay: `${
//                     value === index ? transitionDuration.exit : 0
//                   }ms`,
//                 }}
//                 unmountOnExit
//               >
//                 <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
//                   {fab.icon}
//                 </Fab>
//               </Zoom>
//             ))}
//           </Box>
//         </div>

//         <div className="md:ml-14 md:hidden block ml-5 pb-5">
//           <Box
//             sx={{
//               bgcolor: "",
//               width: 380,
//               color: "#F9A403",
//               border: 2,
//               position: "relative",
//               minHeight: 300,
//             }}
//           >
//             <AppBar position="static" color="default">
//               <Tabs
//                 value={value}
//                 onChange={handleChange}
//                 indicatorColor="primary"
//                 textColor="primary"
//                 variant="fullWidth"
//                 aria-label="action tabs example"
//               >
//                 <Tab label="OUR MISSION" {...a11yProps(0)} />
//                 <Tab label="OUR GUARANTEES" {...a11yProps(1)} />
//                 <Tab label="OUR ADVANTAGES" {...a11yProps(2)} />
//               </Tabs>
//             </AppBar>
//             <SwipeableViews
//               axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//               index={value}
//               onChangeIndex={handleChangeIndex}
//             >
//               <TabPanel value={value} index={0} dir={theme.direction}>
//                 The group Supports global financial stability and economic
//                 growth by enabling businesses and economies to fund innovation,
//                 manage risk and create jobs. The group can trace its history
//                 back to 1698.
//               </TabPanel>
//               <TabPanel value={value} index={1} dir={theme.direction}>
//                 BIG APPLE INVESTMENT operates an open access model, offering
//                 choic and partnership to customers across all of its businesses
//               </TabPanel>
//               <TabPanel value={value} index={2} dir={theme.direction}>
//                 FINVEST HUB Technology develops technology solutions, including
//                 high performance technology solutions, including training,
//                 market surveillance and post trade systems for over 40
//                 organisations and exchanges, including the Group's own markets.
//               </TabPanel>
//             </SwipeableViews>
//             {fabs.map((fab, index) => (
//               <Zoom
//                 key={fab.color}
//                 in={value === index}
//                 timeout={transitionDuration}
//                 style={{
//                   transitionDelay: `${
//                     value === index ? transitionDuration.exit : 0
//                   }ms`,
//                 }}
//                 unmountOnExit
//               >
//                 <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
//                   {fab.icon}
//                 </Fab>
//               </Zoom>
//             ))}
//           </Box>
//         </div>
//       </div>
//     );
// }


