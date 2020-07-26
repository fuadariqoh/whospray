import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import photos1 from "../images/image1.jpeg";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    marginTop: "100px",
  },

  container1: {
    height: "500px",
    border: "1px solid black",
    display: "flex",
    justifyContent: "space-around",

    [theme.breakpoints.down("md")]: {
      height: "100px",
      display: "flex",
      flexDirection: "column",
      height: "fit-content",
    },
  },
  photo: {
    height: "400px",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid
        container
        justify="space-between"
        className={classes.container1}
        md="12"
      >
        <div>
          <img src={photos1} className={classes.photo} />
        </div>
        <div style={{ fontSize: "14px" }}>
          <h1>WHO Nano Spray</h1>
          <div>asd</div>
        </div>
      </Grid>
      <Grid container justify="center" direction="column">
        <Grid items>Title</Grid>
        <Grid items>Video</Grid>
      </Grid>
      <Grid container>
        <Grid items sm="12" xs="12" md="12" lg="auto">
          Review
        </Grid>
        <Grid items sm="12" xs="12" md="12" lg="auto">
          Review
        </Grid>
        <Grid items sm="12" xs="12" md="12" lg="auto">
          Review
        </Grid>
      </Grid>
      <Grid container></Grid>
    </Grid>
  );
};

export default Home;
