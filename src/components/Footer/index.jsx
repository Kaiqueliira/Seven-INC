import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "inherit",
    color: "#1a237e",
    padding: theme.spacing(3),
    textAlign: "center",
    fontWeight: "bold",
    position: "relative",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <img src="/logo.webp" alt="brand" style={{ height: "25px" }} />
    </footer>
  );
}
