import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  main: {
    background: "#f3f3f3",
    height: "calc(100vh - 20vh)",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Container({ children }) {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <section className={classes.section}>{children}</section>
    </main>
  );
}
