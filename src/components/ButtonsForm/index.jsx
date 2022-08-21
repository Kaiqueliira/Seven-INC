import { makeStyles } from "@material-ui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PreviewIcon from "@mui/icons-material/Preview";
import { Button } from "@mui/material";

const useStyles = makeStyles({});

export default function ButtonsForm({ params }) {
  console.log(params);
  const classes = useStyles();
  return (
    <div>
      <Button
        sx={{ marginRight: ".4rem" }}
        variant="contained"
        startIcon={<PreviewIcon />}
        color="success"
        size="small"
      >
        Visualizar
      </Button>
      <Button
        sx={{ marginRight: ".4rem" }}
        variant="contained"
        startIcon={<EditIcon />}
        size="small"
      >
        Editar
      </Button>
      <Button
        variant="contained"
        color="error"
        size="small"
        startIcon={<DeleteIcon />}
      >
        Excluir
      </Button>
    </div>
  );
}
