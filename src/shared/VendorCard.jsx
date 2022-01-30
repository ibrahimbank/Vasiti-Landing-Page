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
          width: "300px",
          height: "587px",
          padding: "1rem",
          gap: "2rem",
          margin: "2rem",
        }}
      >
        <Grid item className={classes.img__div}>
          <img src={image} alt="customers" height={100} width={100} />
        </Grid>

        <Grid
          item
          sx={{
            width: "100%",
          }}
        >
          <h4>{name}</h4>
        </Grid>

        <Grid
          item
          sx={{
            spacing: 3,
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
            }}
          >
            {status}
          </Button>
        </Grid>

        <Grid item>
          <Typography>{description}</Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default VendorCard;
