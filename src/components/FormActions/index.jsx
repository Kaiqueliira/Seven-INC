import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ptBr from "date-fns/locale/pt-BR";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEmployee } from "../../hooks/useEmployee";
import { usePage } from "../../hooks/usePage";
import { dateFormat } from "../../utils/formatters";

export default function FormActions() {
  const { page } = usePage();
  const { employee } = useEmployee();
  const [date, setDate] = useState(employee.created_at || new Date());
  const navigate = useNavigate();

  const handleChange = (newValue) => {
    setDate(newValue);
  };

  const formik = useFormik({
    initialValues: {
      name: employee.name || "",
      email: employee.email || "",
      phone: employee.phone || "",
      salary: employee.salary || "",
      created_at: date || new Date(),
    },
    onSubmit: (values) => {
      toast(JSON.stringify({ ...values, created_at: dateFormat(date) }));
      navigate("/employee");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexFlow: "column wrap",
          p: 2,
          background: "#fff",
        }}
      >
        <Box
          sx={{
            mb: 2,
          }}
        >
          <TextField
            sx={{ width: "100%" }}
            required
            id="name"
            label="Nome"
            disabled={page === "view" && true}
            defaultValue={formik.values.name}
            onChange={formik.handleChange}
          />
        </Box>
        <Box
          sx={[
            {
              display: "flex",
              flexFlow: "row wrap",
              mb: 2,
            },
            (theme) => ({
              [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
              },
            }),
          ]}
        >
          <TextField
            sx={[
              { width: "60%", mr: 1 },
              (theme) => ({
                [theme.breakpoints.down("sm")]: {
                  width: "100%",
                  mb: 2,
                },
              }),
            ]}
            required
            type="email"
            id="email"
            label="Email"
            disabled={page === "view" && true}
            defaultValue={formik.values.email}
            onChange={formik.handleChange}
          />
          <TextField
            sx={[
              { width: "38%" },
              (theme) => ({
                [theme.breakpoints.down("sm")]: {
                  width: "100%",
                  mb: 1,
                },
              }),
            ]}
            id="phone"
            label="Telefone"
            disabled={page === "view" && true}
            defaultValue={formik.values.phone}
            onChange={formik.handleChange}
          />
        </Box>
        <Box
          sx={[
            {
              display: "flex",
              flexFlow: "row wrap",
              mb: 2,
            },
            (theme) => ({
              [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
              },
            }),
          ]}
        >
          <TextField
            sx={[
              { mr: 1 },
              (theme) => ({
                [theme.breakpoints.down("sm")]: {
                  width: "100%",
                  mb: 2,
                  mr: 0,
                },
              }),
            ]}
            id="salary"
            type="number"
            label="Salario"
            disabled={page === "view" && true}
            defaultValue={formik.values.salary}
            onChange={formik.handleChange}
          />
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            adapterLocale={ptBr}
          >
            <DesktopDatePicker
              label="Admissão"
              inputFormat="dd/MM/yyyy"
              value={date}
              onChange={handleChange}
              disabled={page === "view" && true}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <Box
          sx={[
            {
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "space-between",
              flexGrow: 1,
            },
            (theme) => ({
              [theme.breakpoints.down("sm")]: {},
            }),
          ]}
        >
          <Button
            variant="contained"
            sx={[{ flex: 1 }]}
            onClick={() => navigate("/employee")}
          >
            Voltar
          </Button>
          {page === "view" || (
            <Button
              variant="contained"
              color="success"
              sx={{ flex: 1, ml: 2 }}
              type="submit"
            >
              Salvar
            </Button>
          )}
        </Box>
      </Box>
    </form>
  );
}
