import React from "react";
import { Typography, Button, Grid } from "@mui/material";

import styles from "../style";

function CardUser({ name, description, status, image, city }) {
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

        <Grid item>
          <h4>{name}</h4>
        </Grid>

        <Grid
          item
          sx={{
            spacing: 3,
          }}
        >
          <span className={classes.span}>in {city}</span>
          <Button
            variant="outlined"
            sx={{
              width: "95px",
              height: "30px",
              background: "#EEF8FF",
              borderRadius: "4px",
              color: " #0D019A",
              border: "none",
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

export default CardUser;
