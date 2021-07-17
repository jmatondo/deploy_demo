import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Infos from "./pages/Infos";
import Layout from "./components/Layout";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Design from "./components/Design";
import Home from "./pages/Home";

const theme = createTheme({
  palette: {
    primary: {
      // main: "#333996",
      dark: "rgb(81, 81, 143)",
      light: "#3c44b126",
      main: "rgb(81, 81, 143 )",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Design>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/notes">
              <Notes />
            </Route>
            <Route path="/info">
              <Infos />
            </Route>
          </Switch>
        </Design>
      </Router>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
