import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    margin: "0px 20px 0px 20px",
    borderRadius: "10px",
  },
});

const BalanceCard = (props: any) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      spacing={4}
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Paper className={classes.paper}>test</Paper>
      </Grid>
      <Grid item>
        <Paper className={classes.paper}>test</Paper>
      </Grid>
    </Grid>
  );
};

export default BalanceCard;
