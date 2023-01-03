import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import biblioteca from "../../Assets/Images/biblioteca-free.png";
import logo from "../../Assets/Images/logo-white.png";
import { Image } from "react-bootstrap";
import { Button } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: 0,
  backgroundColor: "black",
  width: "100%",
  fontFamilyamily: "Marlin Geo",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "18px",
  borderRadius: "30px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "red",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const drawerWidth = 240;
const navItems = ["Videoclases", "Admisiones"];

export default function LibraryHeader() {
  const styleButton = {
    marginRight: "10px",
    fontFamily: "Marlin Geo",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "19px",
  };
  const AdditionalStyle = {
    borderRadius: "30px",
    backgroundColor: "#1F1D1B",
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#262626" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Image
            src={biblioteca}
            className="navbar-logo"
            style={{
              marginLeft: "10px",
            }}
          />
          <Image
            src={logo}
            className="navbar-logo"
            style={{
              marginLeft: "10px",
              marginRight: "70px",
            }}
          />
          <Box
            sx={{ display: { xs: "none", sm: "block" } }}
            style={{ width: "70%" }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "#fff" }}
                style={
                  item === "Videoclases"
                    ? { ...styleButton, ...AdditionalStyle }
                    : styleButton
                }
              >
                {item}
              </Button>
            ))}
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon style={{ color: "#FFFFFF" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar Temas"
              inputProps={{ "aria-label": "search" }}
              style={{
                marginRight: "10px",
              }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
