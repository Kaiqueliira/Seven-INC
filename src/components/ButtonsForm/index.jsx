import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEmployee } from "../../hooks/useEmployee";
import { usePage } from "../../hooks/usePage";

export default function ButtonsForm({ params }) {
  const employee = useEmployee();
  const page = usePage();
  const navigate = useNavigate();

  const notify = () => toast.success(`${params.row.name} foi excluido.`);
  return (
    <div>
      <Button
        sx={{ marginRight: ".4rem" }}
        variant="contained"
        startIcon={<VisibilityIcon />}
        color="success"
        size="small"
        onClick={() => {
          employee.setEmployees(params.row);
          page.setPage("view");
          navigate(`/employee/view/${params.row.id}`);
        }}
      >
        Visualizar
      </Button>
      <Button
        sx={{ marginRight: ".4rem" }}
        variant="contained"
        startIcon={<EditIcon />}
        size="small"
        onClick={() => {
          employee.setEmployees(params.row);
          page.setPage("edit");
          navigate(`/employee/edit/${params.row.id}`);
        }}
      >
        Editar
      </Button>
      <Button
        variant="contained"
        color="error"
        size="small"
        startIcon={<DeleteIcon />}
        onClick={() => notify()}
      >
        Excluir
      </Button>
    </div>
  );
}
