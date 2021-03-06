import {
  CssBaseline,
  Toolbar,
  Button,
  AppBar,
  Typography,
} from "@mui/material";
import Logo from "../assest/logo.png";
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
        <Toolbar
          className={classes.nav}
          sx={{
            justifyContent: { md: "space-around", xs: "flex-start" },
          }}
        >
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
                marginLeft: { md: "2rem", lg: "-1rem" },
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
            justifyContent: "space-around",
            alignItems: "center",
            border: {
              xs: "none",
              md: "none",
              lg: " 1px solid rgba(0, 0, 0, 0.08)",
            },
            boxSizing: " border-box",
            display: { xs: "none", md: "flex" },
            boxShadow: {
              xs: "none",
              md: "none",
              lg: "1px 4px 4px rgba(0, 0, 0, 0.04)",
            },
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
