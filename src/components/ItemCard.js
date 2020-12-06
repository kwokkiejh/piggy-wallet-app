import React, { useState } from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { FaTruck } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";
const useStyles = makeStyles({
  paper: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    borderRadius: "10px",
  },
  description: {
    fontSize: "13px",
    fontWeight: "bold",
  },
  amount: {
    fontSize: "12px",
  },
  date: {
    fontSize: "12px",
  },
});

const ItemCard = (props: any) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleSwipedLeft = () => {
    console.log("SWIPED LEFT");
    setOpen(true);
  };
  const handleSwipedRight = () => {
    console.log("SWIPED RIGHT");
    setOpen(false);
  };

  const handleTap = () => {
    setOpen(!open);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipedLeft(),
    onSwipedRight: () => handleSwipedRight(),
    onTap: () => handleTap(),
    trackMouse: true,
  });

  return (
    <>
      <Paper className={classes.paper}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="stretch"
          {...handlers}
        >
          <Grid
            item
            xs={2}
            style={{
              padding: "8px 0 8px 8px",
              alignItems: "center",
              display: open ? "none" : "flex",
            }}
          >
            <FaTruck
              size={20}
              color="#62abfe"
              style={{
                backgroundColor: "#e4f3fe",
                borderRadius: "10px",
                padding: "6px",
              }}
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            xs={7}
            style={{
              padding: "8px",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Typography className={classes.description}>
              Food Delivery
            </Typography>

            <Typography className={classes.date}>20 Sep</Typography>
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              padding: "8px 8px 8px 0",
              alignItems: "center",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Typography className={classes.amount}>Amount</Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={3}
            style={{
              alignItems: "stretch",
              display: open ? "flex" : "none",
            }}
          >
            <Grid
              item
              xs
              style={{
                backgroundColor: "#ffe87c",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <AiTwotoneEdit size={24} color="#fff" />{" "}
            </Grid>
            <Grid
              item
              xs
              style={{
                backgroundColor: "#fa8072",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <AiTwotoneDelete size={24} color="#fff" />{" "}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ItemCard;
