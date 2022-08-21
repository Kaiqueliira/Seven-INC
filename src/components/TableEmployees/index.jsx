import { Box } from "@material-ui/core";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../../Data";
import { usePage } from "../../hooks/usePage";
import { columns } from "./columns";

export default function TableEmployees() {
  const { setPage } = usePage();
  const navigate = useNavigate();

  return (
    <Box
      style={{
        width: "100%",
        maxWidth: "1400px",
        height: "700px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          margin: "1rem 0",
          maxWidth: "1400px",
          alignSelf: "flex-end",
        }}
      >
        <Button
          variant="contained"
          onClick={() => {
            setPage("add");
            navigate("/employee/add");
          }}
        >
          Novo Funcionário
        </Button>
      </Box>
      <DataGrid
        sx={{
          backgroundColor: "#ffffff",
          width: "100%",
          maxWidth: "1400px",
        }}
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        showCellRightBorder
        showColumnRightBorder
      />
    </Box>
  );
}
