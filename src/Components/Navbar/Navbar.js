import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import "../../styles.css"

import logo from "../img/5fe189b860b0fede6c76b678_logo-ghregular.svg"

const settings = ["ABOUT US", "HOW IT WORKS", "SERVICES", "MARKETPLACE", "BECOME A PROVIDER"];


const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="fixed" style={{
      backgroundColor: "white",
      height: 80
    }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{mr: 2, display: {xs: "none", md: "flex"}}}
          >
            <img src={logo} alt="logo!" style={{maxWidth: 200}}/>
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: "flex", align: "center", md: "none", justifyContent: "center"}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: "block", md: "none"},
                justifyContent: "center"
              }}
            >{settings.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography style={{justifyContent: "center"}}
                            textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}
          >
            {logo}
          </Typography>
          <Box justifyContent="center" sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
            {settings.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{my: 2, color: "black", display: "block"}}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{flexGrow: 0}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                <IconButton size="large" aria-label="search" color="primary">
                  <SearchIcon fontSize="large"/>
                </IconButton>
              </IconButton>
            </Tooltip>
          </Box>

          <Box sx={{flexGrow: 0}} mr={1}>
            <div className="vl">&nbsp;</div>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{
                p: 0,
              }}>
                <Button color="primary" style={{fontSize: 15}}>Login</Button>
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{flexGrow: 0,}} mr={1}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                <Button variant="contained" style={{fontSize: 15, backgroundColor: "#24b277", paddingLeft: 8}}>
                  GET ACCESS
                </Button>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
    ;
};
export default Navbar;
