import React from "react";
import { Typography, Button, Grid } from "@mui/material";

import styles from "../style";

function VendorCard({ name, description, status, image }) {
  const classes = styles();
  return (
    <>
      <Grid
        container
        className={classes.card__container}
        sx={{
          width: "100%",
          height: "587px",
          padding: "1rem",
          gap: "0.5rem",
          padding: "2rem",
          marginTop: "-4rem",
        }}
      >
        <Grid item className={classes.img__div}>
          <img src={image} alt="customers" height={100} width={100} />
        </Grid>

        <Grid
          item
          sx={{
            width: "100%",
            marginBottom: "-3px",
          }}
        >
          <h4>{name}</h4>
        </Grid>

        <Grid
          item
          sx={{
            spacing: 1,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              width: "75px",
              height: "30px",
              background: "#F0FFEE",
              borderRadius: "4px",
              color: " #049A01",
              border: "none",
              marginBottom: "31px",
            }}
          >
            {status}
          </Button>
        </Grid>

        <Grid
          item
          sx={{
            width: "300px",
            height: "336px",

            fontSize: "16px",

            color: "#474747",
          }}
        >
          <Typography>{description}</Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default VendorCard;
