import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    marginTop: "100px",
  },

  container1: {
    height: "500px",
    border: "1px solid black",

    [theme.breakpoints.down("md")]: {
      height: "100px",
      display: "flex",
      flexDirection: "column",
      height: "fit-content",
    },
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
        <div>Foto Product</div>
        <div style={{ fontSize: "14px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          rerum cum animi aliquid reiciendis mollitia voluptas libero
          accusantium neque iusto qui fuga, eaque voluptatem est enim nihil
          repellat laboriosam nobis.
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
