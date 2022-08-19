import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";

export default function Header() {
  return (
    <AppBar color="inherit" position="relative">
      <Container maxWidth="xl">
        <Toolbar>
          <img src="/logo.webp" alt="brand" style={{ height: "25px" }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
