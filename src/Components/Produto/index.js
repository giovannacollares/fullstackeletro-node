import './produto.css';
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';


export function Produto(props) {


    return (
        <Card className={props.categoria + "produto"}>
        <Card.Img src={require(`./imagens/produtos/${props.imagens}`).default}  alt="Imagem do Produto" />
        <Card.Body>
            <Card.Title className="nomeproduto"> {props.nome} </Card.Title>
            <Card.Text className="preco"> R$ {props.preco} </Card.Text>
            <Card.Text className="precofinal"> R$ {props.precofinal} </Card.Text>
        </Card.Body>
        </Card>
    )
}

export function ListaCategorias() {

    return (

    ['sm'].map((breakpoint, idx) => (
        <ListGroup horizontal={breakpoint} className="my-2" key={idx}>
        <ListGroup.Item action className="p-4 itemlista">Todos</ListGroup.Item>
        <ListGroup.Item action className="p-4 itemlista">Fogões</ListGroup.Item>
        <ListGroup.Item action className="p-4 itemlista">Geladeiras</ListGroup.Item>
        <ListGroup.Item action className="p-4 itemlista">Lava-Louças</ListGroup.Item>
        <ListGroup.Item action className="p-4 itemlista">Lava-Roupas</ListGroup.Item>
        <ListGroup.Item action className="p-4 itemlista">Microondas</ListGroup.Item>
        </ListGroup>
      ))
    );
}