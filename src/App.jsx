import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@mui/material/styles";
import Home from "./pages/Home";

function App() {
  const theme = createTheme({
    palette: {
      main: "red",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
