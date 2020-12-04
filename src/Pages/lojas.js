import './css/lojas.css';
import { Row, Table, Container } from 'react-bootstrap';


export default function Lojas() {
    return (
        <Container>
        <Row className="listalojas">
        <Table responsive bordered hover>
          <tr>
            <td>
              <h3>Rio de Janeiro</h3>
              <p>Avenida das Américas, 2987</p>
              <p>16 Andar, Sala 9</p>
              <p>Barra da Tijuca</p>
              <p>Telefone: (21) 5555-5555</p>
            </td>
            <td>
              <h3>São Paulo</h3>
              <p>Avenida Eng. Armando de Arruda Pereira, 707</p>
              <p>Sala 7</p>
              <p>Jabaquara</p>
              <p>Telefone: (21) 5555-5555</p>
            </td>
            <td>
              <h3>Santos</h3>
              <p>Avenida Ana Costa, 1034</p>
              <p>7 Andar, Sala 9</p>
              <p>Gonzaga</p>
              <p>Telefone: (21) 5555-5555</p>
            </td>
          </tr>
        </Table>
        </Row>
        </Container>
    )
}
