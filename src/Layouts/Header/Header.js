// import "bootstrap/dist/css/bootstrap.min.css";
// import { Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { Display } from "react-bootstrap-icons";
// import logo from "../../Assets/Images/logo-small.png";
// import "./Header.css";

// function Header() {
//   return (
//     <Navbar
//       bg="light"
//       expand="lg"
//       id="main-header-bar"
//       style={{
//         paddingTop: "0px",
//         paddingBottom: "0px",
//         paddingLeft: "0px",
//         paddingRight: "0px",
//         backgroundColor: "#FFFFFF",
//       }}
//     >
//       <Image
//         src={logo}
//         className="navbar-logo"
//         style={{
//           marginLeft: "10px",
//         }}
//       />
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="justify-content-end" style={{ width: "100%" }}>
//           <Nav.Link href="/" className="nav-links">
//             Inicio
//           </Nav.Link>
//           <NavDropdown
//             title={
//               <span style={{ color: "#e70031", fontWeight: "bold" }}>
//                 Nuestros Ciclos
//               </span>
//             }
//             id="navbarScrollingDropdown"
//           >
//             <NavDropdown.Item href="/ciclos/1">
//               Ciclo Verano San Marcos
//             </NavDropdown.Item>
//             <NavDropdown.Item href="/ciclos/2">
//               Ciclo Verano UNI
//             </NavDropdown.Item>
//             <NavDropdown.Item href="/ciclos/3">
//               Ciclo Repaso San Marcos
//             </NavDropdown.Item>
//             <NavDropdown.Item href="/ciclos/4">
//               Ciclo Repaso UNI
//             </NavDropdown.Item>
//             <NavDropdown.Item href="/ciclos/5">
//               Ciclo Semestral San Marcos
//             </NavDropdown.Item>
//             <NavDropdown.Item href="/ciclos/6">
//               Ciclo Semestral Básico UNI
//             </NavDropdown.Item>
//             <NavDropdown.Item href="/ciclos/7">
//               Ciclo Semestral Intensivo UNI
//             </NavDropdown.Item>
//             <NavDropdown.Item href="/ciclos/8">
//               Ciclo Anual San Marcos
//             </NavDropdown.Item>
//             <NavDropdown.Item href="/ciclos/9">
//               Ciclo Semianual San Marcos
//             </NavDropdown.Item>
//           </NavDropdown>
//           <Nav.Link href="/videoclases" className="nav-links">
//             Biblioteca
//           </Nav.Link>
//           <Nav.Link href="/contactus" className="nav-links">
//             Contáctanos
//           </Nav.Link>
//           <Nav.Link href="/sedes" className="nav-links">
//             Sedes
//           </Nav.Link>
//           <div
//             className="intranet-button"
//             onClick={() =>
//               window.open("https://grupociencias.edu.pe/intranet/#/login")
//             }
//             style={{
//               display: "flex",
//               alignItems: "center",
//               paddingLeft: "95px",
//               width: "210px",
//               textAlign: "center",
//             }}
//           >
//             <Display color="white" size={22} className="align-top" />
//             Intranet
//           </div>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default Header;

import { useState } from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
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
import AdbIcon from "@mui/icons-material/Adb";
import { Select, TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";

import logo from "../../Assets/Images/logo-small.png";
const pages = [
  "Inicio",
  "Nuestro Ciclos",
  "Biblioteca",
  "Contáctanos",
  "Sedes",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
  },
  select: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    color: "#primary",
    backgroundColor: "transparent",
  },
}));

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const classes = useStyles();

  return (
    <AppBar color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
              size="small"
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
              <MenuItem component={Link} to="/" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Inicio</Typography>
              </MenuItem>
              <Select
                label="Nuestro Ciclos"
                className={classes.select}
                margin="normal"
                defaultValue=""
                value="opcion1"
                variant="standard"
                sx={{
                  fontWeight: "700",
                  color: "red",
                  "& .MuiSelect-icon": {
                    color: "red",
                  },
                }}
              >
                <MenuItem value="opcion1" disabled>
                  Nuestro Ciclos
                </MenuItem>

                <MenuItem component={Link} to="/ciclos/1">
                  Ciclo Verano San Marcos
                </MenuItem>
                <MenuItem component={Link} to="/ciclos/2">
                  Ciclo Verano UNI
                </MenuItem>
                <MenuItem component={Link} to="/ciclos/3">
                  Ciclo Repaso San Marcos
                </MenuItem>
                <MenuItem component={Link} to="/ciclos/4">
                  Ciclo Repaso UNI
                </MenuItem>
                <MenuItem component={Link} to="/ciclos/5">
                  Ciclo Semestral San Marcos
                </MenuItem>
                <MenuItem component={Link} to="/ciclos/6">
                  Ciclo Semestral Básico UNI
                </MenuItem>
                <MenuItem component={Link} to="/ciclos/7">
                  Ciclo Semestral Intensivo UNI
                </MenuItem>
                <MenuItem component={Link} to="/ciclos/8">
                  Ciclo Anual San Marcos
                </MenuItem>
                <MenuItem component={Link} to="/ciclos/9">
                  Ciclo Semianual San Marcos
                </MenuItem>
              </Select>
              <MenuItem
                component={Link}
                to="/videoClases"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Biblioteca</Typography>
              </MenuItem>
              <MenuItem
                component={Link}
                to="/contactus"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Contáctanos</Typography>
              </MenuItem>
              <MenuItem
                component={Link}
                to="/sedes"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Sedes</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Button component={Link} to="/" color="inherit">
            <img width="100%" height="40px" src={logo} alt="" />
          </Button>
          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "flex" },
                margin: " 0 20px",
                color: "#000",
              }}
            >
              <Button component={Link} to="/" onClick={handleCloseNavMenu}>
                <Typography textTransform="none" textAlign="center">
                  Inicio
                </Typography>
              </Button>
              <Select
                label="Nuestro Ciclos"
                className={classes.select}
                margin="normal"
                defaultValue=""
                value="opcion1"
                variant="standard"
                sx={{
                  fontWeight: "700",
                  color: "red",
                  "& .MuiSelect-icon": {
                    color: "red",
                  },
                }}
              >
                <MenuItem value="opcion1" disabled>
                  Nuestro Ciclos
                </MenuItem>

                <MenuItem component={Link} to="/ciclos/1">
                  Ciclo Verano San Marcos
                </MenuItem>
                <MenuItem component={Link} to="/ciclos/2">
                  Ciclo Verano UNI
                </MenuItem>
                <MenuItem component={Link} to="/ciclos/3">
                  Ciclo Repaso San Marcos
                </MenuItem>
                <MenuItem component={Link} to="/ciclos/4">
                  Ciclo Repaso UNI
                </MenuItem>
                <MenuItem component={Link} to="/ciclos/5">
                  Ciclo Semestral San Marcos
                </MenuItem>
                <MenuItem component={Link} to="/ciclos/6">
                  Ciclo Semestral Básico UNI
                </MenuItem>
                <MenuItem component={Link} to="/ciclos/7">
                  Ciclo Semestral Intensivo UNI
                </MenuItem>
                <MenuItem component={Link} to="/ciclos/8">
                  Ciclo Anual San Marcos
                </MenuItem>
                <MenuItem component={Link} to="/ciclos/9">
                  Ciclo Semianual San Marcos
                </MenuItem>
              </Select>
              <Button
                component={Link}
                to="/videoClases"
                onClick={handleCloseNavMenu}
              >
                <Typography textTransform="none" textAlign="center">
                  Biblioteca
                </Typography>
              </Button>
              <Button
                component={Link}
                to="/contactus"
                onClick={handleCloseNavMenu}
              >
                <Typography textTransform="none" textAlign="center">
                  Contáctanos
                </Typography>
              </Button>
              <Button component={Link} to="/sedes" onClick={handleCloseNavMenu}>
                <Typography textTransform="none" textAlign="center">
                  Sedes
                </Typography>
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Button
                sx={{
                  backgroundColor: "rgba(255,0,0,0.85)",
                  padding: { xs: "8px", md: "12px" },
                  color: "rgba(255,255,255,0.85)",
                  "&:hover": {
                    backgroundColor: "red",
                    color: "white",
                  },
                }}
                onClick={() =>
                  window.open("https://grupociencias.edu.pe/intranet/#/login")
                }
              >
                <ConnectedTvIcon color="inherit" />
                <Typography
                  sx={{
                    textTransform: "none",
                    padding: { xs: "0 5px" },
                    fontSize: { xs: "16px", md: "18px" },
                  }}
                >
                  Intranet
                </Typography>
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
