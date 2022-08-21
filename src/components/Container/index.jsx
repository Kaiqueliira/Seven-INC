import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  section: {
    width: "100%",
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  main: {
    width: "100%",
    background: "#f3f3f3",
    minHeight: "calc(100% - 100px)",
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
