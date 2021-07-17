import { makeStyles, Paper } from "@material-ui/core";
import React from "react";
import Header from "./Header";
import PageHeader from "./PageHeader";
import SideMenu from "./SideMenu";
import SubjectIcon from "@material-ui/icons/Subject";

const useStyles = makeStyles((theme) => {
  return {
    appHeader: {
      paddingLeft: "300px",
      width: "100%",
      backgroundColor: "lightblue",
    },
    pageContent: {
      paddingLeft: "300px",
    },
    pageIn: {
      padding: theme.spacing(5),
      mergin: theme.spacing(10),
      backgroundColor: "#f4f5fd",
    },
  };
});

const Design = (props) => {
  const classes = useStyles();
  return (
    <>
      {/* App SideMenu */}
      <SideMenu />
      {/* App Header */}
      <div className={classes.appHeader}>
        <Header />
      </div>

      <div className={classes.pageContent}>
        <Paper className={classes.pageIn}>
          {/* App Pages */}
          {props.children}
        </Paper>
      </div>
    </>
  );
};

export default Design;
