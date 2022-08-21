import { currencyFormatter, dateFormat } from "../../utils/formatters";
import ButtonsForm from "../ButtonsForm";

export const columns = [
  { field: "id", headerName: "ID", minWidth: 70 },
  {
    field: "name",
    headerName: "Nome",
    minWidth: 300,
  },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    minWidth: 200,
  },
  {
    field: "phone",
    headerName: "Telefone",
    type: "number",
    minWidth: 130,
  },
  {
    field: "salary",
    headerName: "Salário",
    type: "number",
    valueGetter: (values) => `${currencyFormatter(values.row.salary)}`,
    minWidth: 150,
  },
  {
    field: "created_at",
    headerName: "Admissão",
    type: "string",
    valueGetter: (values) => `${dateFormat(values.row.created_at)}`,
    minWidth: 120,
  },
  {
    minWidth: 350,
    renderCell: (params) => {
      return (
        <div>
          <ButtonsForm params={params} />
        </div>
      );
    },
  },
];
