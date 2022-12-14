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
import { AppBar } from "@mui/material";



const pages = ["/", "/archive"];
const settings = ["/Profile", "/Archive"];

const ResponsiveAppBar = () => {
  let today = new Date();

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
      className="nav"
      style={{ backgroundColor: "#99582a" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ color: "#ffe6a7" }}>
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
