import { Box, makeStyles } from "@material-ui/core";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";
import { data } from "../../Data";
import { columns } from "./columns";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    background: "red",
  },
}));

export default function TableEmployees() {
  const classes = useStyles();

  return (
    <Box
      style={{
        width: "100%",
        height: "650px",
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",
      }}
    >
      <Box style={{ margin: "0.4rem 0" }}>
        <Button variant="contained">Novo Funcionário</Button>
      </Box>
      <DataGrid
        sx={{ backgroundColor: "#ffffff", maxWidth: "1400px" }}
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
