import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AnimationIcon from "@mui/icons-material/Animation";
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-router-dom";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectProfile, logout } from "../../ProfileSlice";

import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from "@mui/icons-material/Send";
import MessageIcon from '@mui/icons-material/Message';
import { Comment } from "../home/Blog";
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";

const drawerWidth = 440;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const pages = ["/", "/archive"];
const settings = ["/Profile", "/Archive"];

const ResponsiveAppBar = () => {
  let today = new Date();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [change, setChange] = React.useState("");
  const [comments, setComment] = React.useState([]);

  const handelSubmit = (par) => {
    let copy = [...comments];
    copy.push(par);
    setComment(copy);
  };

  const values = useSelector(selectProfile);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleCloseUserMenu();
  };

  const user = useSelector(selectUser);
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();

  return (
    <Box>
    <AppBar
      open={open}
      className="nav"
      style={{ backgroundColor: "#99582a" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ color: "#ffe6a7" }}>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MessageIcon />
          </IconButton> */}
          <AnimationIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#ffe6a7",
              textDecoration: "none",
              webkitTextStrokeWidth: "1px",
              webkitTextStrokeColor: "black",
            }}
          >
            Employeely
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={page} className="menu-link">
                    {page == "/" ? "home" : page.slice(1)}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AnimationIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Employeely
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link to={page} className="link">
                  {page == "/" ? "home" : page.slice(1)}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }}>
            {user.email === "" || user.password === "" ? (
              <>
                <Button
                  key="Log-in"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mr: 2,
                    color: "white",
                    display: "block",
                    backgroundColor: "#6f1d1b",
                  }}
                >
                  <Link to="/login" className="link">
                    Log-in
                  </Link>
                </Button>
                <Button
                  key="Sign-up"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mr: 2,
                    color: "white",
                    display: "block",
                    backgroundColor: "#6f1d1b",
                  }}
                >
                  <Link to="/signup" className="link">
                    Sign-up
                  </Link>
                </Button>
              </>
            ) : (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu}>
                  <Avatar
                    alt="Remy Sharp"
                    src={profile.photo}
                    sx={{ width: 54, height: 54 }}
                  />
                </IconButton>
              </Tooltip>
            )}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Link to={setting.toLowerCase()} className="setting-links">
                    {setting.slice(1)}
                  </Link>
                </MenuItem>
              ))}
              <MenuItem key="/Logout" onClick={handleLogout}>
                <Link to="/" className="setting-links">
                  Logout
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

    
    </Box>
  );
};
export default ResponsiveAppBar;

{/* <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Comment
              alt="Remy Sharp"
              src="https://www.aceshowbiz.com/images/photo/gary_oldman.jpg"
              userName="Remy Sharp"
              subject="Brunch this weekend?"
              date="17:13"
            />
            <Divider variant="inset" component="li" />
            <Comment
              alt="Travis Howard"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              userName="Travis Howard"
              subject="Wish I could come, but I'm out of town this…"
              date="17:23"
            />
            <Divider variant="inset" component="li" />
            <Comment
              alt="Cindy Baker"
              src="https://t3.ftcdn.net/jpg/03/17/23/90/360_F_317239009_UW4LCUmTHOxYyH4W9RHTIsslLygTonc9.jpg"
              userName="Cindy Baker"
              subject="Anyone saw the new shop downsters???"
              date="18:43"
            />
            {comments.map((comment) => {
            return (
              <div>
                <Divider variant="inset" component="li" />
                <Comment
                  alt="Cindy Baker"
                  src={values.photo}
                  userName={values.firstName + " " + values.lastName}
                  subject={comment}
                  date={today.getHours() + ":" + (today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes())}
                />
              </div>
            );
          })}
        </List>
        <Divider />
        <FormControl className="add-comment-container" variant="standard">
          <InputLabel
            className="comment-lable"
            htmlFor="input-with-icon-adornment"
          ></InputLabel>
          <div className="message">
            <Avatar
              alt="Cindy Baker"
              src={values.photo}
              sx={{ marginLeft: 2.5, height: 33, width: 33, marginBottom: 0.5 }}
            />
          <Input
            sx={{ height: 40, marginLeft: 2, marginRight: 0, width: 350 }}
            id="input-with-icon-adornment"
            placeholder="Message"
            onChange={(e) => setChange(e.target.value)}

            endAdornment={
              <InputAdornment position="end">
                <Button
                variant="text"
                onClick={() => {
                  handelSubmit(change);
                }}>
                <SendIcon/>
                </Button>
                </InputAdornment>
            }
          />
          </div>
        </FormControl>

      </Drawer> */}
