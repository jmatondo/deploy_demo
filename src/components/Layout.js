import { makeStyles } from "@material-ui/core";
import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/ToolBar";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f4f4f9",
      width: "100%",
      padding: theme.spacing(3),
      margin: theme.spacing(2),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2),
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginBottom: theme.spacing(10),
    },
    toolbar: theme.mixins.toolbar,
  };
});

const Layout = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  //List menu
  const menuItems = [
    {
      text: "Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Commentaires",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/info",
    },
  ];
  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar>
          <Typography variant="h5">
            Bienvenue sur le site des résumés
          </Typography>
        </Toolbar>
      </AppBar>

      {/* side bar */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Mes Notes
          </Typography>
        </div>
        {/* list / link */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Page content */}
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {props.children}
        {/*         <Demo />
         */}{" "}
      </div>
    </div>
  );
};

export default Layout;
