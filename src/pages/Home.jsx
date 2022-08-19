import { makeStyles } from "@material-ui/core";
import { Box, Button, Typography } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
  },
  main: {
    background: "#f3f3f3",
    height: "calc(100vh - 20vh)",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  apresentation: {
    border: "1px solid #red",
  },
  section: {
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  btn: {
    color: "blue",
  },
}));
export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header />
      <main className={classes.main}>
        <section className={classes.section}>
          <Box>
            <Typography variant="body1" p={2}>
              Projeto Feito com o intuito de Avaliação para a vaga de
              Desenvolvedor Front-end!
            </Typography>
          </Box>
          <box>
            <Button variant="outlined" size="large">
              Lista de Funcionários
            </Button>
          </box>
        </section>
      </main>
      <Footer />
    </div>
  );
}
