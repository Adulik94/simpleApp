import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';
import docquity from "../img/docquity.svg"
import socar from "../img/socar.svg"
import doctoranywhere from "../img/doctoranywhere.svg"
import iixglobal from "../img/iixglobal.svg"
import gojek from "../img/ogo-gojek.svg"
import skuad from "../img/skuad.svg"
import wesurance from "../img/wesurance.svg"

const useStyles = makeStyles({
  img_root: {
    display: "flex",
    width: "100px",
    height: "100px",
    borderRadius: "70%",
    border: "1px #24b277 solid ",
    margin: "0 auto",
    transition: "ease 0.7s",
    cursor: "pointer",
    "&:hover ": {
      border: "4px dotted #24b277"
    }
  },
  img_responsive: {
    maxHeight: "70px",
    width: "70%",
    textAlign: "center",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center"
  },
  gridItem: {
    margin: "10px",
    transition: "ease 2s"
  },
  borderColor: {color: "#24b277", transition: "ease 0.7s"},
  borderHover: {color: "#000", transition: "ease 0.7s"}
});

const Partners = () => {
  const [carHover, setcarHover] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Container maxWidth={false} sx={{bgcolor: 'rgba(147,213,180,0.1)',}}
                 height="fit-content">
        <Box mt={2} mb={4}>
          <Typography
            variant="body2"
            align="center"
            sx={{mx: "auto",}}
            maxWidth="sm"
          >Our network serves startups, small businesses, and enterprises from all over the world
          </Typography>
          <Grid container paddingTop="40px">
            <Grid item md={2} xs={4}>
              <div
                onMouseLeave={() => {
                  setcarHover(false);
                }}
                onMouseEnter={() => {
                  setcarHover(true);
                }}
                className={classes.gridItem}
              >
                <div className={classes.img_root}>
                  <img
                    className={classes.img_responsive}
                    src={gojek}
                    alt="ah"
                  />
                </div>
                <Typography
                  className={carHover ? classes.borderColor : classes.borderHover}
                  variant="h5"
                  align="center"
                >{carHover}
                </Typography>
              </div>
            </Grid>
            <Grid item md={2} xs={4}>
              <div className={classes.gridItem}>
                <div className={classes.img_root}>
                  <img
                    className={classes.img_responsive}
                    src={socar}
                    alt="ah"
                  />
                </div>
              </div>
            </Grid>
            <Grid item md={2} xs={4}>
              <div className={classes.gridItem}>
                <div className={classes.img_root}>
                  <img
                    className={classes.img_responsive}
                    src={doctoranywhere}
                    alt="ah"
                  />
                </div>
              </div>
            </Grid>
            <Grid item md={2} xs={4}>
              <div
                onMouseLeave={() => {
                  setcarHover(false);
                }}
                onMouseEnter={() => {
                  setcarHover(true);
                }}
                className={classes.gridItem}
              >
                <div className={classes.img_root}>
                  <img
                    className={classes.img_responsive}
                    src={docquity}
                    alt="ah"
                  />
                </div>
              </div>
            </Grid>
            <Grid item md={2} xs={4}>
              <div
                onMouseLeave={() => {
                  setcarHover(false);
                }}
                onMouseEnter={() => {
                  setcarHover(true);
                }}
                className={classes.gridItem}
              >
                <div className={classes.img_root}>
                  <img
                    className={classes.img_responsive}
                    src={iixglobal}
                    alt="ah"
                  />
                </div>
              </div>
            </Grid>
            <Grid item md={2} xs={4}>
              <div
                onMouseLeave={() => {
                  setcarHover(false);
                }}
                onMouseEnter={() => {
                  setcarHover(true);
                }}
                className={classes.gridItem}
              >
                <div className={classes.img_root}>
                  <img
                    className={classes.img_responsive}
                    src={skuad}
                    alt="ah"
                  />
                </div>
              </div>
            </Grid>
            <Grid item md={2} xs={4}>
              <div
                onMouseLeave={() => {
                  setcarHover(false);
                }}
                onMouseEnter={() => {
                  setcarHover(true);
                }}
                className={classes.gridItem}
              >
                <div className={classes.img_root}>
                  <img
                    className={classes.img_responsive}
                    src={wesurance}
                    alt="ah"
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box mt={5} mb={8}>
        <Typography
          fontWeight="500"
          fontSize={26}
          align="center"
          sx={{mx: "auto",}}
          maxWidth="sm"
        >Don't waste a minute of your time on google searches or cold calls.
        </Typography>
        <Typography
          variant="body2"
          align="center"
          sx={{mx: "auto",}}
          maxWidth="sm"
        >Greenhouse connects you to Asia's largest network of qualified market entry and corporate service providers.
        </Typography>
      </Box>
    </>
  );
};
export default Partners;
