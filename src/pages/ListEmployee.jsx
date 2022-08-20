import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TableEmployees from "../components/TableEmployees";

export default function ListEmployee() {
  return (
    <>
      <Header />
      <Container>
        <TableEmployees></TableEmployees>
      </Container>
      <Footer />
    </>
  );
}
