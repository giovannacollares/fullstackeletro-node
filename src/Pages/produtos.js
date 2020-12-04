import { useState, useEffect} from 'react';

import { Produto, ListaCategorias } from '../Components/Produto';

import './css/produtos.css';

import { Container, Row } from 'react-bootstrap';;


export default function Produtos() {

    const [ produtos, setProdutos ] = useState([]);

    useEffect(async() => {
        const resposta = await fetch("http://localhost/fullstackeletro/php/api/produtos.php")
        const data = await resposta.json()
        setProdutos(data);
    }, []);

    return (
            <section>
            <Row className="categoriasprodutos">
                <ListaCategorias />
            </Row>
            <Row className="listaprodutos">
                {produtos && produtos.map(item => <Produto imagens={item.imagens} descricao={item.descricao} preco={item.preco} precofinal={item.precofinal} />)}
            </Row>
            </section>
    )
}