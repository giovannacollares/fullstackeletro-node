import React, { useState, useEffect } from 'react';

import { Form, Row, Col, Button, Container } from 'react-bootstrap';

import BannerContato from './imagens/bannercontato.gif';

import './css/contato.css';

export default function Contato() {

    const [comentarios, setComentarios] = useState([]);

    const controleEnvio = (evento) => {
        evento.preventDefault();
        fetch("http://localhost/php/full_stack_music/src/api_comments/products.php", { method: "POST", body: new FormData(evento.target) });
        getComentario();
        window.alert("Comentário enviado com secesso !")
    }

    function getComentario() {
        async function showComentarios() {
            const url = "http://localhost/php/full_stack_music/src/api_comments/products.php";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setComentarios(resultado);
        }
        showComentarios();
    }

    useEffect(() => { getComentario() }, []);

    useEffect(() => { }, [comentarios]);

    return (
        <section class="contato">
            <Row>
            <Col className="banner"> 
                <img src={BannerContato} alt="Fale Conosco e Tire suas Dúvidas" />
            </Col>
       
            <Col className="formulario"> 
                <Form method="post" onSubmit={controleEnvio} >
                <Form.Group as={Row} controlId="formNome">
                    <Form.Label column sm={2}>
                    Nome
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="text" name="nome" id="nome" placeholder="Nome Completo" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formMensagem">
                    <Form.Label column sm={2}>
                    
                    </Form.Label>
                    <Col sm={10}>
                    <textarea type="text" name="mensagem" id="mensagem" placeholder="Deixe sua mensagem!" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Enviar</Button>
                    </Col>
                </Form.Group>
                </Form>
        </Col>
        </Row>
        <Row>
        <Container className="text-white comments">
                <Col sm={9}>

                    {comentarios && comentarios.map(row => {
                        console.log(comentarios)
                        if (row.descricao === null) { 
                            return (
                                <div className="text-dark" key={row.id}>  
                                    Cliente: {row.nome} <br />
                                    Mensagem: {row.mensagem}  <br />
                                </div>
                        )

                        } else{
                            return (
                                <div className="text-dark" key={row.id}>  
                                    Cliente: {row.nome} <br />
                                    Mensagem: {row.mensagem}  <br />
                                    Comprou: {row.descricao} <br />
                                </div>
                            )
                        }
                        })
                    }
                </Col>
            </Container>
        </Row>
        </section>
    )
}

