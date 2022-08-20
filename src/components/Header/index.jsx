import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: { display: "flex", justifyContent: "space-between" },
}));
export default function Header() {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <AppBar color="inherit" position="relative">
      <Container maxWidth="xl">
        <Toolbar className={classes.root}>
          <img src="/logo.webp" alt="brand" style={{ height: "25px" }} />
          <Button variant="outlined" onClick={() => navigate("/")}>
            Home
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
