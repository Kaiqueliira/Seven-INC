import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEmployee } from "../../hooks/useEmployee";
import { usePage } from "../../hooks/usePage";

export default function FormActions() {
  const { page } = usePage();
  const { employee } = useEmployee();

  const [value, setValue] = useState(employee.created_at);

  const navigate = useNavigate();

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <form>
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
            id="outlined-required"
            label="Nome"
            disabled={page === "view" && true}
            defaultValue={page === "add" ? "" : employee.name}
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
            id="outlined-required"
            label="Email"
            disabled={page === "view" && true}
            defaultValue={page === "add" ? "" : employee.email}
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
            id="outlined-required"
            label="Telefone"
            disabled={page === "view" && true}
            defaultValue={page === "add" ? "" : employee.phone}
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
            id="outlined-required"
            label="Salario"
            disabled={page === "view" && true}
            defaultValue={page === "add" ? "" : employee.salary}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Admissão"
              inputFormat="dd/MM/yyyy"
              value={value || new Date()}
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
            sx={[{ flex: 1, mr: 2 }]}
            onClick={() => navigate("/employee")}
          >
            Voltar
          </Button>
          <Button variant="contained" color="success" sx={{ flex: 1 }}>
            Salvar
          </Button>
        </Box>
      </Box>
    </form>
  );
}
