import React from "react";
import { Grid, Button } from "@mui/material";
import congrats from "../assest/congrat.svg";

function Success({ onClick }) {
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        margin="2rem"
        width="567px"
        height="627px"
        borderRadius="16px"
        backgroung="#fff"
        border="2px solid #e8e7e7"
      >
        <Grid item>
          <img src={congrats} alt="congrat" />
        </Grid>

        <Grid item>
          <h1
            style={{
              textAlign: "center",
              width: "250px",
              height: "68px",
              fontSize: "28px",
              color: "#000000",
              marginBottom: "1rem",
            }}
          >
            Thank you for sharing your story!
          </h1>
        </Grid>

        <Grid item>
          <p
            style={{
              textAlign: "center",
              width: "356px",
              height: "84px",
              fontSize: "16px",
              color: "#4A4A4A",
              marginTop: "4rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            sx={{
              width: "253px",
              height: "70px",
              background: "#FF5C00",
              border: "none",
              boxShadow: "2px 8px 30px rgba(230, 83, 0, 0.18)",
              borderRadius: " 8px",
              color: "#fff",
              ":hover": {
                background: "#FF5C00",
                color: "#fffS",
                border: "none",
              },
            }}
            onClick={onClick}
          >
            Close
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Success;
