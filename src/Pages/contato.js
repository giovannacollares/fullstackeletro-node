import React from 'react';

import { Form, Row, Col, Button } from 'react-bootstrap';

import BannerContato from './imagens/bannercontato.gif';

import './css/contato.css';

export default function Contato() {

    const [ form, setForm ] = React.useState({
        nome: "",
        comentario: ""
    });

    const [resposta, setResposta] = React.useState(null)
    
    function handleChange ({target}) {
        const {id, value} = target 
        setForm({...form, [id]:value})
        console.log({[id]:value})
    }

    function handleSubmit(event) {
        event.preventDefault() 
        fetch("http://localhost:3050/comentario", {
            method: "POST", 
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(form)
        }).then(res=> {
            setResposta(res)
        })

        window.location.reload(false)
    }


    return (
        <section class="contato">
            <div>
            <Row>
            <Col className="banner"> 
                <img src={BannerContato} alt="Fale Conosco e Tire suas Dúvidas" />
            </Col>
        
            <Col className="formulario"> 
                <Form method="post" onSubmit={handleSubmit} >
                <Form.Group as={Row} controlId="formNome">
                    <Form.Label column sm={2}>
                    Nome
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control onChange={handleChange} value ={form.nome} type="text" name="nome" id="nome" placeholder="Nome Completo" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formMensagem">
                    <Form.Label column sm={2}>
                    Mensagem
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control onChange={handleChange} value ={form.comentario} type="text" name="comentario" id="comentario" as="textarea" rows={3} placeholder="Deixe sua mensagem!" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Enviar</Button>
                    </Col>
                </Form.Group>
                </Form>
                
                {resposta && resposta.ok && alert("Mensagem enviada com sucesso!")}
        </Col>
        </Row>
        <Row>
  
        </Row>
        </div>
        </section>
    )
}

