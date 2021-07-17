import { makeStyles } from "@material-ui/core";
import React from "react";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "300px",
    height: "100%",
    backgroundColor: theme.palette.primary.dark,
    //backgroundColor: "#253053",
  },
  title: {
    padding: theme.spacing(2),
    color: "#fff",
  },
  menuList: {
    color: "#fff",
  },

  active: {
    backgroundColor: "#253053",
  },
}));

//List menu
const menuItems = [
  {
    text: "Home",
    icon: <SubjectOutlined color="secondary" />,
    path: "/",
  },
  {
    text: "Notes",
    icon: <SubjectOutlined color="secondary" />,
    path: "/notes",
  },
  {
    text: "Commentaires",
    icon: <AddCircleOutlineOutlined color="secondary" />,
    path: "/info",
  },
];

const SideMenu = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  return (
    <div className={classes.sideMenu}>
      {/* Logo */}
      <div>
        <Typography variant="h5" className={classes.title}>
          Mes Notes
        </Typography>
      </div>
      {/* Menu de gauche */}
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => history.push(item.path)}
            className={location.pathname === item.path ? classes.active : null}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText className={classes.menuList} primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SideMenu;
