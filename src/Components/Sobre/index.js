import { Container } from 'react-bootstrap';
import Banner from './imagens/bannersobre.png';


export default function Sobre () {
    return (
        <Container className= "sobrebg">
            <img src={Banner}  alt="Banner com Informações sobre a FullStack Eletro" />
        </Container>
);}