import { Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import Container from "../components/Container";
import Footer from "../components/Footer";
import FormActions from "../components/FormActions";
import Header from "../components/Header";

import { usePage } from "../hooks/usePage";

export default function Actions() {
  const { page } = usePage();

  const pagesTitle = {
    view: "Visualizar Funcionário",
    edit: "Editar Funcionário",
    add: "Novo Funcionário",
  };

  return (
    <>
      <Header />
      <Container>
        <Typography variant="h5" sx={{ color: blue[900], marginBottom: 2 }}>
          {pagesTitle[page]}
        </Typography>
        <FormActions />
      </Container>
      <Footer />
    </>
  );
}
