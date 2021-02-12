import { Container, Row, Col } from 'react-bootstrap';

import './rodape.css';

export default function Rodape() {
    return (
<Container fluid className="bg-dark py-4">
    <Row>
      <Col sm={5} className="col-5 col-md">
        <h5>Sobre Nós</h5>
          <p className="text-small text-muted">
            Fundada em 2020, Full Stack Eletro é uma e-commerce criada para o curso de Desenvolvimento Full Stack da Recode Pro, e tem como objetivo exercitar os conhecimentos adquiridos durante as aulas.
          </p>
      </Col>
      <Col sm={5} className="col-5 col-md">
        <h5>Fale Conosco</h5>
          <p className="text-small text-muted faleconosco">
            (21) 9 7654-3421 <i class="fab fa-whatsapp"></i> <br />
            fseletro@contato.com <br />
            Dúvidas, Elogios e Reclamações: <br />
            <a href="#">Nos mande uma mensagem</a>
          </p>
      </Col>
      <Col sm={5} className="col-5 col-md">
        <h5>Produtos</h5>
        <ul className="list-unstyled text-small">
          <li><a className="text-muted" href="#">Geladeira</a></li>
          <li><a className="text-muted" href="#">Fogões</a></li>
          <li><a className="text-muted" href="#">Batedeiras</a></li>
          <li><a className="text-muted" href="#">Torradeiras</a></li>
          <li><a className="text-muted" href="#">Microondas</a></li>
          <li><a className="text-muted" href="#">Outros</a></li>
        </ul>
      </Col>
      <Col sm={5} className="col-5 col-md">
        <h5>Endereços</h5>
        <p className="text-small text-muted enderecos">
          Avenida das Américas, 1234 <br />
          Barra da Tijuca <br />
          Rio de Janeiro <br /> <br />
          Avenida das Américas, 1234 <br />
          Barra da Tijuca <br />
          Rio de Janeiro <br />
        </p>
      </Col>
    </Row>
    <Row className="copyright">
      <p className="text-small text-muted">
        Copyright © Giovanna Collares Niro
      </p>
    </Row>
</Container>

)}