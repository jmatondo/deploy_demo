import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Container, makeStyles, Paper } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link, useHistory } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import SubjectIcon from "@material-ui/icons/Subject";

const useStyles = makeStyles((theme) => ({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
  root: {
    padding: theme.spacing(2),
  },
}));

const Infos = () => {
  const classes = useStyles();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailError, setDetailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailError(false);

    if (title === "") {
      setTitleError(true);
    }

    if (details === "") {
      setDetailError(true);
    }

    if (title && details) {
      //fetch("http://localhost:8981/iccs/comments/new", {
      fetch("https://iccv1.herokuapp.com/iccs/comments/new", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details }),
      }).then(() => history.push("/"));
    }
  };

  return (
    <>
      <PageHeader
        title="Commentaires"
        subTitle="Ajouter un commentaire"
        icon={<SubjectIcon fontSize="large" />}
      />

      <Paper elevation={0} square className={classes.root}>
        <Typography
          variant="h5"
          color="textSecondary"
          component="h2"
          gutterBottom
        >
          Laissez un commentaire
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            className={classes.field}
            label="Prénom"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={titleError}
            value={title}
          />
          <TextField
            onChange={(e) => setDetails(e.target.value)}
            className={classes.field}
            label="Commentaire"
            variant="outlined"
            color="secondary"
            multiline
            rows={4}
            fullWidth
            required
            error={detailError}
            value={details}
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            endIcon={<ArrowForwardIosIcon />}
          >
            Envoyer
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default Infos;
