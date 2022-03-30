import { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Button,
  CssBaseline,
  Typography,
  Dialog,
  DialogActions,
  Box,
} from "@mui/material";
import styles from "../style";
import Image from "../assest/imageOne.svg";
import imageTwo from "../assest/imageTwo.svg";
import UserData from "../userData";
import VendorData from "../vendorData";
import CardUser from "../shared/Card";
import womanShoppingbagCard from "../assest/womanShoppingbagCard.svg";
import ShareYourStoryForm from "./ShareYourStoryForm";
import VendorCard from "../shared/VendorCard";

function Home() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
  });
  const classes = styles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CssBaseline />
      <Container
        mt={2}
        className={classes.headCon}
        sx={{
          display: { xs: "flex", md: "flex" },
          alignItems: "center",
          justifyContent: { md: "center" },
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{
            justifyContent: { lg: "flex-start" },
          }}
        >
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            xl={6}
            sx={{
              direcion: "column",
              width: "100%",
              zIndex: 2,
            }}
          >
            <Typography
              variant="h1"
              className={classes.headerText}
              sx={{
                fontSize: { md: "48px", xs: "35px" },
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "bold",
                color: "#000",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                width: { md: "586px", xs: "350px", sm: "350px" },
                height: "180px",
                lineHeight: { md: "60px", xs: "45px" },
                letterSpacing: "1px",
              }}
            >
              Amazing Experiences from Our Wonderful Customers
            </Typography>
            <Typography
              paragraph={true}
              className={classes.headerPara}
              sx={{
                width: { md: "100%", xs: "270px" },
                marginTop: { sm: "2rem", xs: "2rem" },
              }}
            >
              Here is what customers and vendors are saying about us, you can
              share your stories with us too.
            </Typography>
          </Grid>

          <Grid
            item
            xl={12}
            sm={6}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { lg: "477.49px", xl: "536px" },
            }}
          >
            <Box
              component="img"
              src={Image}
              alt="happy customer"
              sx={{
                width: { xs: "100%", sm: "350px", md: "400px", lg: " 536px" },
              }}
              className={classes.headerImg}
            />
          </Grid>
        </Grid>
      </Container>

      <Container
        maxWidth={"xl"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#222222",
          margin: "0rem",
          spacing: "2",
          padding: { xs: "0.5rem", xl: "2rem" },
          width: "100%",
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              order: { xs: 2, sm: 2, lg: 1, xl: 2 },
            }}
          >
            <Box
              component="img"
              src={imageTwo}
              alt="happy customer"
              className={classes.headerImg}
              sx={{
                width: { xs: "478px", lg: "617px" },
                height: "572px",
              }}
            />
          </Grid>

          <Grid
            item
            xs={6}
            md={6}
            sx={{
              direcion: "column",
              order: { xs: 1, sm: 1, lg: 2, xl: 1 },
            }}
          >
            <Typography
              variant="h4"
              className={classes.headerText}
              sx={{
                fontSize: { xs: "24px", xl: "32px" },
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "bold",
                color: "#fff",
                width: { lg: "375px", xl: "375px", xs: "250px" },
                height: { xs: "29px", xl: "39px" },
                marginBottom: "1rem",
              }}
            >
              {dimensions.width <= 900
                ? "Oby’s Experience"
                : " Tolu & Joy’s Experience"}
            </Typography>

            <Button
              variant="outlined"
              size="small"
              sx={{
                color: "#fff",
                border: "1px solid#fff",
                marginBottom: "1rem",
              }}
            >
              Customer
            </Button>

            <Typography
              component="p"
              className={classes.headerParaTwo}
              sx={{
                width: { sm: "402px", xl: "454px" },
                fontSize: "18px",
                color: "#fff",
                justifyContent: "flex-start",
                height: { sm: "240px", xl: "216px" },
              }}
            >
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </Typography>

            <Button
              color="secondary"
              sx={{
                color: "#fff",
                borderBottom: "1px solid#FF5C00",
                fontSize: "16px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "500",
              }}
              onClick={handleClickOpen}
            >
              Share your story!
            </Button>
          </Grid>
        </Grid>
      </Container>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
        justifyContent="center"
        alignItems="center"
        width="100%"
        sx={{
          padding: "0 165px",
        }}
      >
        {UserData.map((user, i) => {
          return (
            <Grid key={i} item xs={4} sm={4} md={4} lg={4}>
              <CardUser {...user} />
            </Grid>
          );
        })}
      </Grid>

      <Container
        maxWidth={"xl"}
        sx={{
          background: " #FFF8F5",
          margin: "0rem",
          spacing: "2",
          padding: "2rem",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={12}
        >
          <Grid
            item
            xs={6}
            md={6}
            sx={{
              direcion: "column",
            }}
          >
            <Typography
              variant="h4"
              className={classes.headerText}
              sx={{
                fontSize: "32px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "bold",
                color: "#242120",
              }}
            >
              Josiah’s Experience
            </Typography>

            <Button
              variant="outlined"
              size="small"
              sx={{
                color: "#FF5C00",

                border: " 1px solid rgba(255, 92, 0, 0.4)",
                boxSizing: "border-box",
                borderRadius: "4px",
              }}
            >
              vendor
            </Button>

            <p className={classes.headerParaThree}>
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </p>

            <Button
              color="secondary"
              sx={{
                color: "#FF5C00",
                borderBottom: "1px solid#FF5C00",
                fontSize: "16px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "500",
              }}
              onClick={handleClickOpen}
            >
              Share your story!
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <img
              src={womanShoppingbagCard}
              alt="happy customer"
              className={classes.headerImg}
            />
          </Grid>
        </Grid>
      </Container>

      <Grid container spacing={5}>
        {VendorData.map((user, i) => {
          return (
            <Grid key={i} item>
              <VendorCard {...user} />
            </Grid>
          );
        })}
      </Grid>

      <Dialog fullWidth scroll="body" open={open} onClose={handleClose}>
        <ShareYourStoryForm onClick={handleClose} />

        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
}

export default Home;
