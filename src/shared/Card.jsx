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
          width: "100%",
          height: "587px",
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
            marginBottom: "-5px",
          }}
        >
          <h4>{name}</h4>
        </Grid>

        <Grid
          item
          sx={{
            spacing: 5,
            marginBottom: "31px",
          }}
        >
          <span className={classes.span}>in {city}</span>
          {status === "Customer" ? (
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
          ) : (
            <Button
              variant="outlined"
              sx={{
                width: "95px",
                height: "30px",
                background: "#F0FFEE",
                borderRadius: "4px",
                color: "#049A01",
                border: "none",
              }}
            >
              {status}
            </Button>
          )}
        </Grid>

        <Grid
          item
          sx={{
            width: "341px",
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
