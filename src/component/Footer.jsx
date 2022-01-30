import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Input,
  InputAdornment,
} from "@mui/material";
import { Twitter, Facebook, Instagram, LinkedIn } from "@mui/icons-material";

import banner from "../assest/subscribe-banner.png";
import styles from "../style";

function Footer() {
  const classes = styles();
  return (
    <>
      <Container
        maxWidth={"xl"}
        sx={{
          background: "#25201D",
          margin: "0rem",
          spacing: "2",
          padding: "8rem",
        }}
      >
        <Grid
          container
          spacing={5}
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item>
            <img src={banner} alt="subscribe" />
          </Grid>

          <div className={classes.footerItem}>
            <Grid item>
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  justifyContent: "flex-start",
                }}
              >
                Be a member of our community 🎉
              </Typography>
              <p className={classes.paraText}>
                We’d make sure you’re always first to know what’s happening on
                Vasiti—thus, the world.
              </p>
            </Grid>

            <Grid item>
              <Input
                sx={{
                  borderRadius: "6px",
                  width: "368px",
                  height: "51px",
                  padding: "0.5rem",
                  background: "rgba(255, 255, 255, 0.2)",
                  color: "#fff",
                }}
                className={classes.footerInput}
                id="input"
                placeholder="Enter your email address"
                endAdornment={
                  <InputAdornment position="end" size="small" className="go">
                    <Button
                      sx={{
                        alignItems: "center",
                        padding: " 8px 24px",
                        width: "119px",
                        height: "42px",
                        background: "#FFFFFF",
                        boxShadow: "1px 4px 8px rgba(239, 88, 3, 0.2)",
                        borderRadius: "4px",
                      }}
                    >
                      SUBSCRIBE
                    </Button>
                  </InputAdornment>
                }
              />
            </Grid>
          </div>
        </Grid>

        <Grid
          spacing={5}
          container
          sx={{
            marginTop: "3rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ul>
              <h5 className={classes.h5}>Company</h5>
              <li className={classes.li}>About us</li>
              <li className={classes.li}>Terms of use</li>
              <li className={classes.li}>Privacy policy</li>
              <li className={classes.li}>Press & Media</li>
            </ul>
          </Grid>
          <Grid
            item
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ul>
              <h5 className={classes.h5}>Product</h5>
              <li className={classes.li}>Marketplace</li>
              <li className={classes.li}>Magazine</li>
              <li className={classes.li}>Seller</li>
              <li className={classes.li}>Wholesale</li>
              <li className={classes.li}>Services</li>
            </ul>
          </Grid>
          <Grid
            item
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ul>
              <h5 className={classes.h5}>Careers</h5>
              <li className={classes.li}>Become a campus rep</li>
              <li className={classes.li}>Become Vasity Influencer</li>
              <li className={classes.li}>Become a Compus writer</li>
              <li className={classes.li}>Become an Affiliae</li>
            </ul>
          </Grid>
          <Grid
            item
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ul>
              <h5 className={classes.h5}>Get in touch</h5>
              <li className={classes.li}>Contact us</li>
              <li className={classes.li}>Partner with us</li>
              <li className={classes.li}>Advertise with us</li>
              <li className={classes.li}>Help/FAQs</li>
            </ul>
          </Grid>
          <Grid
            item
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h6 className={classes.h6}>Join our Community</h6>
            <div className={classes.icons}>
              <Facebook className={classes.social} />
              <Instagram className={classes.social} />
              <Twitter className={classes.social} />
              <LinkedIn className={classes.social} />
            </div>

            <h6 className={classes.h6}>Email news letter</h6>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Footer;
