import {Navbar, Nav} from 'react-bootstrap';
import { Link, withRouter} from 'react-router-dom';
import Logo from '../../logo.svg';

function Menu(props) {
    const { location } = props
    return (
        <div>
        <Navbar className="navbar avisobg" expand="lg">
            <Nav className="m-auto align-center">
                <p className="text-white m-1 aviso">
                    Desenvolvedores tem 30% de desconto em nossos produtos. Aproveite!
                </p>
            </Nav>
        </Navbar>

        <Navbar className="navbar socialmedia" expand="lg">
            <div className="perfil">
                <i className="fas fa-user-circle"></i>
            </div>
            <div className="medias">
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
            </div>
        </Navbar>

        <Navbar className="navbar navlogo pl-0 pr-0" expand="lg">
                  <img
                  src={Logo}
                  width="200"
                  className="d-inline-block m-auto align-center"
                  alt="FullStack logo"
                  />
        </Navbar>

        <Navbar className="navprincipal" expand="lg">
            <Navbar.Toggle aria-controls="menu-navprincipal" />
            <Navbar.Collapse id="menu-navprincipal">
            <Nav activeKey={location.pathname} className="m-auto align-center">
                <Nav.Item>
            <Nav.Link className="pl-5 pr-5 py-0 mt-3" as={Link} href="/index" to="/index">Página Principal</Nav.Link>
                </Nav.Item>
                <Nav.Item>
            <Nav.Link className="pl-5 pr-5 py-0 mt-3" as={Link} href="/produtos" to="/produtos">Eletrodomésticos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
            <Nav.Link className="pl-5 pr-5 py-0 mt-3" as={Link} href="/lojas" to="/lojas">Nossas Lojas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
            <Nav.Link className="pl-5 pr-5 py-0 mt-3" as={Link} href="/contato" to="/contato">Fale Conosco</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </div>
    );
}
const MenuBar = withRouter(Menu);

export default MenuBar

