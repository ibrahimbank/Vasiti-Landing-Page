import { useState } from "react";
import {
  Container,
  FormControl,
  Input,
  CssBaseline,
  InputAdornment,
  OutlinedInput,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  Dialog,
  DialogContent,
} from "@mui/material";

import UploadIcon from "../assest/imageUploadIcon.svg";
import styles from "../style";
import ShareYourStoryBtn from "../shared/button/ShareYourStoryBtn";
import Success from "./Success";

function ShareYourStoryForm({ onClick }) {
  const classes = styles();

  const [open, setOpen] = useState(false);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CssBaseline />

      <Container
        className={classes.container}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginBottom: "2rem",
          padding: "3rem",
        }}
      >
        <header className={classes.formHeader}>
          <p className={classes.pageHeader}>Share your amazing story!</p>
        </header>

        <Grid
          container
          justifyItems="center"
          alignItems="center"
          className={classes.gridContainer}
          spacing={2}
          width="100%"
          marginTop="5rem"
        >
          <Grid className={classes.gridItem} item>
            <FormControl fullWidth variant="outlined" xs={6}>
              <span
                className={classes.inputLabelUpload}
                htmlFor="bootstrap-input"
              >
                Upload your Picture
              </span>
              <Input
                sx={{
                  border: "1px solid #EAEAEA !important",
                  borderRadius: "8px",
                  width: "100%",
                  height: "62px",
                  padding: "2rem",
                }}
                className={classes.uploadInput}
                id="input"
                placeholder="Choose image"
                endAdornment={
                  <InputAdornment position="end" size="small" className="go">
                    <img src={UploadIcon} alt="upload icon" />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>

          <Grid xs={12} sm={6} md={6} className={classes.gridItem} item>
            <FormControl
              className={classes.play}
              variant="outlined"
              sx={{
                width: "100%",
              }}
            >
              <span
                className={classes.inputLabelUpload}
                htmlFor="bootstrap-input"
              >
                First Name
              </span>
              <TextField
                className={classes.nameField}
                id="fname"
                required
                sx={{
                  width: "100%",
                }}
              />
            </FormControl>
          </Grid>

          <Grid xs={12} sm={6} md={6} className={classes.gridItem} item>
            <FormControl
              variant="outlined"
              sx={{
                width: "100%",
              }}
            >
              <span
                className={classes.inputLabelUpload}
                htmlFor="bootstrap-input"
              >
                Last Name
              </span>
              <TextField
                className={classes.nameField}
                id="lname"
                required
                sx={{
                  width: "100%",
                }}
              />
            </FormControl>
          </Grid>

          <Grid xs={12} className={classes.gridItem} item>
            <FormControl
              variant="outlined"
              sx={{
                width: "100%",
              }}
            >
              <span className={classes.inputLabelUpload}>Share your story</span>
              <TextField
                className={classes.message}
                id="message"
                multiline
                rows={4}
                sx={{
                  width: "100%",
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={5} sm={4} md={4} margin="1rem">
            <FormControl>
              <span
                className={classes.interactFormControlLabel}
                id="demo-row-radio-buttons-group-label"
              >
                What did you interact with Vasiti as?
              </span>
            </FormControl>
          </Grid>

          <Grid item xs={6} sm={8} md={6} className={classes.tryy}>
            <FormControl className={classes.booo}>
              <RadioGroup row>
                <FormControlLabel
                  control={<Radio />}
                  className={classes.customersFormControlLabel}
                  value="customers"
                  control={<Radio />}
                  label={
                    <Typography
                      variant="body2"
                      fontSize="10px"
                      color="#242120"
                      marginRight="1rem"
                    >
                      Customers
                    </Typography>
                  }
                />

                <FormControlLabel
                  control={<Radio />}
                  className={classes.customerFormControlLabel}
                  value="vendors"
                  label={
                    <Typography variant="body2" fontSize="10px" color="#242120">
                      Vendors
                    </Typography>
                  }
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid className={classes.gridItem} item>
            <FormControl fullWidth variant="outlined" xs={6}>
              <span
                className={classes.inputLabelUpload}
                htmlFor="bootstrap-input"
              >
                City or Higher Institution (For Student)
              </span>
              <OutlinedInput className={classes.uploadInput} id="text" />
            </FormControl>
          </Grid>

          <Grid item className={classes.btn}>
            <ShareYourStoryBtn
              onClick={onHandleSubmit}
              value={"Share your story!"}
              type="submit"
            />
          </Grid>
        </Grid>
      </Container>

      <Dialog fullWidth scroll="body" open={open} onClose={handleClose}>
        <Success onClick={handleClose} />
      </Dialog>
    </>
  );
}

export default ShareYourStoryForm;
