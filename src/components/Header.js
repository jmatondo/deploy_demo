import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => {
  return {
    appHeader: {
      paddingLeft: "340px",
      width: "100%",
      backgroundColor: "#fff",
      transform: "translateZ(0)",
    },

    //  toolbar: theme.mixins.toolbar,
  };
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appHeader}>
      <Toolbar></Toolbar>
    </AppBar>
  );
};

export default Header;
