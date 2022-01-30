import { useState } from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import {
  CssBaseline,
  Toolbar,
  Button,
  AppBar,
  Typography,
  Link,
  Box,
  Menu,
  MenuItem,
  Tooltip,
  Container,
} from "@mui/material";
import Logo from "../assest/logo.png";
import ShareYourStoryBtn from "../shared/button/ShareYourStoryBtn";
import styles from "../style";

function Header() {
  const classes = styles();

  return (
    <>
      <CssBaseline />
      <AppBar
        position="static"
        className={classes.navbarContainer}
        sx={{
          background: "#fff",
          color: "#242120",
        }}
      >
        <Toolbar className={classes.nav}>
          <Toolbar
            className={classes.logoContainer}
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start" },
            }}
          >
            <img src={Logo} alt="logo" className={classes.logoImg} />
          </Toolbar>

          <Toolbar
            className={classes.pagesContainer}
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Typography
              className={classes.pages}
              sx={{
                fontSize: "13px",
              }}
            >
              ABOUT US
            </Typography>
            <Typography
              className={classes.pages}
              sx={{
                fontSize: "13px",
              }}
            >
              STORIES
            </Typography>
            <Typography
              className={classes.pages}
              sx={{
                fontSize: "13px",
              }}
            >
              CONTACT
            </Typography>
            <Typography
              className={classes.login}
              sx={{
                fontSize: "13px",
              }}
            >
              LOG IN
            </Typography>

            <Button
              variant="contained"
              color="warning"
              className={classes.signUpBtn}
              sx={{
                marginLeft: "-1rem",
                fontSize: "13px",
              }}
            >
              SIGN UP
            </Button>
          </Toolbar>
        </Toolbar>
        <Toolbar
          className={classes.offersPages}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            border: " 1px solid rgba(0, 0, 0, 0.08)",
            boxSizing: " border-box",
            boxShadow: "1px 4px 4px rgba(0, 0, 0, 0.04)",
            display: { xs: "none", md: "flex" },
            border: { xs: "none", md: "none" },
          }}
        >
          <Typography
            sx={{
              fontSize: "13px",
            }}
          >
            MARKERTPLACE
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
            }}
          >
            WHOLESALE CENTRE
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
            }}
          >
            SELLER CENTRE
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
            }}
          >
            SERVICES
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
            }}
          >
            INTERNSHIP
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
            }}
          >
            EVENTS
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
