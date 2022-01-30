import React from "react";
import { Button } from "@mui/material";
import styles from "../../style";

function ShareYourStoryBtn({ value, onClick }) {
  const classes = styles();
  return (
    <>
      <Button
        variant="contained"
        color="warning"
        size="small"
        className={classes.submitBtn}
        onClick={onClick}
      >
        {value}
      </Button>
    </>
  );
}

export default ShareYourStoryBtn;
