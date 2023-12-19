import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { FaCoins } from "react-icons/fa";
import HomeIcon from "@mui/icons-material/Home";
// import InnerNav from "./InnerNav";
import AddCardIcon from "@mui/icons-material/AddCard";
// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { FaHandHoldingUsd } from "react-icons/fa";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Home from "../pages/Home";
import Investment from "../pages/Investment-plans";
import { Link } from "react-router-dom";


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const MiniDrawer = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar className="" position="fixed" open={open}>
          <div className="flex justify-between items-center border-b- shadow-white shadow-sm pr-5 bg-black text-white">
            <section>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{
                    marginRight: 5,
                    ...(open && { display: "none" }),
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography noWrap component="div">
                  <img
                    src="../image/finvest-logo-1.png"
                    alt=""
                    className="w-[50%] md:w-[35%]"
                  />
                </Typography>
              </Toolbar>
            </section>

            <section className="flex items-center gap-3 ">
              <div className="flex items-center border-2 border-[#F9A403] p-2 rounded-xl gap-1">
                {/* <AccountBalanceWalletIcon /> */}
                <ManageAccountsIcon className="md:text-2xl text-lg" />
                <p className="text-">$0.00</p>
              </div>
              <section></section>
            </section>
          </div>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <div className="flex pl-5 justify-between items-center">
            <p>Finvest</p>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <div>
                    <p>Finvest</p>
                    <ChevronRightIcon />
                  </div>
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </DrawerHeader>
          </div>
          <Divider />
          <List>
            <Link to="/Dashboard">
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <HomeIcon className="text-black" />
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                    Home
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/investment/Invest-now">
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <FaCoins className="w-5 h-5 text-black" />
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                    Investments Plans
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/deposit-funds">
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <AddCardIcon className="text-black" />
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                    Deposit
                  </ListItemText>
                </ListItemButton>
              </ListItem>
                      </Link>
                      <Link to="/withdraw-funds">
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <FaHandHoldingUsd className="w-6 h-6 text-black" />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  {" "}
                  Withdraw
                </ListItemText>
              </ListItemButton>
            </ListItem>
                      </Link>
          </List>
          <Divider />
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <InboxIcon className="text-black" />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  Transaction Logs
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <SupportAgentIcon className="text-black" />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  Support
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <LogoutIcon className="text-black" />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  Logout
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
          className="bg-black text-white"
        >
          <DrawerHeader />

          {children}
        </Box>
      </Box>
    </div>
  );
}
export default MiniDrawer; 