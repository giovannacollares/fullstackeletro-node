import { Container, Card, Row, Col } from 'react-bootstrap';
import Batedeira from './imagens/batedeiraoster.jpg';
import Pipoqueira from './imagens/pipoqueiranostalgia.jpg';
import Torradeira from './imagens/torradeiranostalgia.jpg';

export default function Promos () {
        return (
        <section>
        <Container fluid className = "promobg">
        <h1>Ofertas do Dia</h1>
        </Container>
        <Row className="promolinha">
            <Col>
            <Card className="promobox">
                <Card.Body>
                <Card.Img src={Batedeira} alt="Batedeira Planetária Oster" />
                <Card.Title className="descricao">Batedeira Planetária RedVelvet Oster - 110V</Card.Title>
                <Card.Text className ="preco"><strike>R$ 559,89</strike></Card.Text>
                <Card.Text className="text-danger precofinal">R$ 398,49</Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="promobox">
                <Card.Body>
                <Card.Img src={Pipoqueira} alt="Torradeira Good Taste Retrô Nostalgia" />
                <Card.Title className="descricao">Torradeira Good Taste Nostalgia - 110V</Card.Title>
                <Card.Text className ="preco"><strike>R$ 389,90</strike></Card.Text>
                <Card.Text className="text-danger precofinal">R$ 228,39</Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="promobox">
                <Card.Body>
                <Card.Img src={Torradeira} alt="Pipoqueira Com Bowl Nostalgia" />
                <Card.Title className="descricao">Pipoqueira com Bowl Nostalgia - 110V</Card.Title>
                <Card.Text className ="preco"><strike>R$ 239,90</strike></Card.Text>
                <Card.Text className="text-danger precofinal">R$ 182,99</Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </section>

)}