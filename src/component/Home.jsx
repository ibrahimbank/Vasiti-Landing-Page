import { useState, Routes, Route } from "react";
import {
  Container,
  Grid,
  Button,
  CssBaseline,
  Typography,
  Dialog,
  DialogActions,
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
          justifyContent: { md: "center" },
        }}
      >
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              direcion: "column",
            }}
          >
            <Typography
              variant="h1"
              className={classes.headerText}
              sx={{
                fontSize: "48px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "bold",
                color: "#000",
                justifyContent: "flex-start",
                width: "586px",
                height: "180px",
                lineHeight: "60px",
              }}
            >
              Amazing Experiences from Our Wonderful Customers
            </Typography>
            <p className={classes.headerPara}>
              Here is what customers and vendors are saying about us, you can
              share your stories with us too.
            </p>
          </Grid>

          <Grid
            item
            xs={6}
            md={6}
            sx={{
              justifyContent: "center",
              width: "100%",
            }}
          >
            <img
              src={Image}
              alt="happy customer"
              className={classes.headerImg}
            />
          </Grid>
        </Grid>
      </Container>

      <Container
        maxWidth={"xl"}
        sx={{
          background: "#222222",
          margin: "0rem",
          spacing: "2",
          padding: "2rem",
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              src={imageTwo}
              alt="happy customer"
              className={classes.headerImg}
            />
          </Grid>

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
                color: "#fff",
              }}
            >
              Tolu & Joy’s Experience
            </Typography>

            <Button
              variant="outlined"
              size="small"
              sx={{
                color: "#fff",
                border: "1px solid#fff",
              }}
            >
              Customer
            </Button>

            <p className={classes.headerParaTwo}>
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

      <Grid container spacing={5}>
        {UserData.map((user, i) => {
          return (
            <Grid key={i} item>
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
