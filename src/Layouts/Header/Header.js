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
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Select } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";

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

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
              <MenuItem
                sx={{ "&:hover": { backgroundColor: "red", color: "#fff" } }}
                component={Link}
                to="/"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Inicio</Typography>
              </MenuItem>
              <Select
                label="Nuestro Ciclos"
                className={classes.select}
                margin="dense"
                // margin="normal"
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
                <MenuItem key="option1" value="opcion1" disabled>
                  Nuestro Ciclos
                </MenuItem>

                <MenuItem
                  key="option2"
                  sx={{
                    "&:hover": {
                      backgroundColor: "red",
                      color: "#fff",
                    },
                  }}
                  component={Link}
                  to="/ciclos/1"
                  onClick={handleCloseNavMenu}
                >
                  Ciclo Verano San Marcos
                </MenuItem>
                <MenuItem
                  key="option3"
                  sx={{
                    "&:hover": {
                      backgroundColor: "red",
                      color: "#fff",
                    },
                  }}
                  component={Link}
                  to="/ciclos/2"
                  onClick={handleCloseNavMenu}
                >
                  Ciclo Verano UNI
                </MenuItem>
                <MenuItem
                  key="option4"
                  sx={{
                    "&:hover": {
                      backgroundColor: "red",
                      color: "#fff",
                    },
                  }}
                  component={Link}
                  to="/ciclos/3"
                  onClick={handleCloseNavMenu}
                >
                  Ciclo Repaso San Marcos
                </MenuItem>
                <MenuItem
                  key="option5"
                  sx={{
                    "&:hover": {
                      backgroundColor: "red",
                      color: "#fff",
                    },
                  }}
                  component={Link}
                  to="/ciclos/4"
                  onClick={handleCloseNavMenu}
                >
                  Ciclo Repaso UNI
                </MenuItem>
                <MenuItem
                  key="option6"
                  sx={{
                    "&:hover": {
                      backgroundColor: "red",
                      color: "#fff",
                    },
                  }}
                  component={Link}
                  to="/ciclos/5"
                  onClick={handleCloseNavMenu}
                >
                  Ciclo Semestral San Marcos
                </MenuItem>
                <MenuItem
                  key="option7"
                  sx={{
                    "&:hover": {
                      backgroundColor: "red",
                      color: "#fff",
                    },
                  }}
                  component={Link}
                  to="/ciclos/6"
                  onClick={handleCloseNavMenu}
                >
                  Ciclo Semestral Básico UNI
                </MenuItem>
                <MenuItem
                  key="option8"
                  sx={{
                    "&:hover": {
                      backgroundColor: "red",
                      color: "#fff",
                    },
                  }}
                  component={Link}
                  to="/ciclos/7"
                  onClick={handleCloseNavMenu}
                >
                  Ciclo Semestral Intensivo UNI
                </MenuItem>
                <MenuItem
                  key="option9"
                  sx={{
                    "&:hover": {
                      backgroundColor: "red",
                      color: "#fff",
                    },
                  }}
                  component={Link}
                  to="/ciclos/8"
                  onClick={handleCloseNavMenu}
                >
                  Ciclo Anual San Marcos
                </MenuItem>
                <MenuItem
                  key="option10"
                  sx={{
                    "&:hover": {
                      backgroundColor: "red",
                      color: "#fff",
                    },
                  }}
                  component={Link}
                  to="/ciclos/9"
                  onClick={handleCloseNavMenu}
                >
                  Ciclo Semianual San Marcos
                </MenuItem>
              </Select>
              {/* <MenuItem
                sx={{ "&:hover": { backgroundColor: "red", color: "#fff" } }}
                component={Link}
                to="/videoClases"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Biblioteca Free</Typography>
              </MenuItem> */}
              <MenuItem
                sx={{ "&:hover": { backgroundColor: "red", color: "#fff" } }}
                component={Link}
                to="/contactus"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Contáctanos</Typography>
              </MenuItem>
              <MenuItem
                sx={{ "&:hover": { backgroundColor: "red", color: "#fff" } }}
                component={Link}
                to="/sedes"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Sedes</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Button component={Link} to="/" color="inherit">
            <img
              width="100%"
              height="40px"
              src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Landing%20GC%2FInicio%2FHeader%2Fwebp%2Flogo-small.webp?alt=media&token=9b00a52e-4f75-40d2-aa34-35ba358bf35c"
              alt=""
            />
          </Button>

          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "flex" },
                gap: "10px",
                margin: " 0 20px",
                color: "#000",
              }}
            >
              <Button
                sx={{
                  color: "#000",
                  "&:hover": { backgroundColor: "red", color: "#fff" },
                }}
                component={Link}
                to="/"
                onClick={handleCloseNavMenu}
              >
                <Typography textTransform="none" textAlign="center">
                  Inicio
                </Typography>
              </Button>
              <Select
                label="Nuestro Ciclos"
                margin="dense"
                // margin="normal"
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
                <MenuItem key="option1" value="opcion1" disabled>
                  Nuestro Ciclos
                </MenuItem>

                <MenuItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "red",
                      color: "#fff",
                    },
                  }}
                  key="option2"
                  component={Link}
                  to="/ciclos/1"
                >
                  Ciclo Verano San Marcos
                </MenuItem>
                <MenuItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "red",
                      color: "#fff",
                    },
                  }}
                  key="option3"
                  component={Link}
                  to="/ciclos/2"
                >
                  Ciclo Verano UNI
                </MenuItem>
                <MenuItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "red",
                      color: "#fff",
                    },
                  }}
                  key="option4"
                  component={Link}
                  to="/ciclos/3"
                >
                  Ciclo Repaso San Marcos
                </MenuItem>
                <MenuItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "red",
                      color: "#fff",
                    },
                  }}
                  key="option5"
                  component={Link}
                  to="/ciclos/4"
                >
                  Ciclo Repaso UNI
                </MenuItem>
                <MenuItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "red",
                      color: "#fff",
                    },
                  }}
                  key="option6"
                  component={Link}
                  to="/ciclos/5"
                >
                  Ciclo Semestral San Marcos
                </MenuItem>
                <MenuItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "red",
                      color: "#fff",
                    },
                  }}
                  key="option7"
                  component={Link}
                  to="/ciclos/6"
                >
                  Ciclo Semestral Básico UNI
                </MenuItem>
                <MenuItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "red",
                      color: "#fff",
                    },
                  }}
                  key="option8"
                  component={Link}
                  to="/ciclos/7"
                >
                  Ciclo Semestral Intensivo UNI
                </MenuItem>
                <MenuItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "red",
                      color: "#fff",
                    },
                  }}
                  key="option9"
                  component={Link}
                  to="/ciclos/8"
                >
                  Ciclo Anual San Marcos
                </MenuItem>
                <MenuItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "red",
                      color: "#fff",
                    },
                  }}
                  key="option10"
                  component={Link}
                  to="/ciclos/9"
                >
                  Ciclo Semianual San Marcos
                </MenuItem>
              </Select>
              {/* <Button
                sx={{
                  color: "#000",
                  "&:hover": { backgroundColor: "red", color: "#fff" },
                }}
                component={Link}
                to="/videoClases"
                onClick={handleCloseNavMenu}
              >
                <Typography textTransform="none" textAlign="center">
                  Biblioteca Free
                </Typography>
              </Button> */}
              <Button
                sx={{
                  color: "#000",
                  "&:hover": { backgroundColor: "red", color: "#fff" },
                }}
                component={Link}
                to="/contactus"
                onClick={handleCloseNavMenu}
              >
                <Typography textTransform="none" textAlign="center">
                  Contáctanos
                </Typography>
              </Button>
              <Button
                sx={{
                  color: "#000",
                  "&:hover": { backgroundColor: "red", color: "#fff" },
                }}
                component={Link}
                to="/sedes"
                onClick={handleCloseNavMenu}
              >
                <Typography textTransform="none" textAlign="center">
                  Sedes
                </Typography>
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Button
                sx={{
                  padding: { xs: "8px", md: "12px" },
                  backgroundColor: "rgba(255,0,0,0.85)",
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
