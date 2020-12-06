import React, { useState } from "react";

import { makeStyles } from "@material-ui/core";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import { AiOutlinePlus, AiFillWallet } from "react-icons/ai";
import {
  RiStickyNoteFill,
  RiWalletFill,
  RiBarChart2Fill,
  RiSettings4Fill,
  RiAddLine,
  RiStickyNoteLine,
  RiWalletLine,
} from "react-icons/ri";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  overrides: {
    MuiBottomNavigationAction: {
      root: {
        width: "20%",
        minWidth: "0",
      },
      label: {
        fontSize: "10px",
      },
    },
  },
});
const useStyles = makeStyles({
  paper: {
    position: "fixed",
    bottom: "0px",
    backgroundColor: "aquamarine",
    height: "10%",
    width: "100%",
  },
  speedDial: {
    position: "absolute",
    left: "50%",
    bottom: "0px",
    transform: "translate(-50%,-10%)",
  },
});

const NavBar = (props: any) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation showLabels className={classes.paper}>
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          hidden={false}
          open={open}
          icon={<RiAddLine size={20} />}
          onClick={handleOpen}
        >
          <SpeedDialAction
            key={"Transaction"}
            icon={<RiWalletLine />}
            //tooltipTitle={action.name}
            //onClick={handleClose}
          />
          <SpeedDialAction
            key={"Plan"}
            icon={<RiStickyNoteLine />}
            //tooltipTitle={action.name}
            //onClick={handleClose}
          />
        </SpeedDial>
        <BottomNavigationAction
          label="Transactions"
          icon={<RiWalletFill size={20} />}
        />
        <BottomNavigationAction
          label="Overview"
          icon={<RiBarChart2Fill size={20} />}
        />
        <BottomNavigationAction disabled />
        <BottomNavigationAction
          label="Planning"
          icon={<RiStickyNoteFill size={20} />}
        />
        <BottomNavigationAction
          label="Settings"
          icon={<RiSettings4Fill size={20} />}
        />
      </BottomNavigation>
    </ThemeProvider>
  );
};

export default NavBar;
