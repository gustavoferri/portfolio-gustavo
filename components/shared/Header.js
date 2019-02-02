import React from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

  import auth0 from '../../services/auth0';


    const BsNavLink = (props) => {
        const { route, title } = props;

         return (
            <Link href={route}>
                <a className="nav-link"> {title} </a>
            </Link>  
        )
    }

    const Login = () => {
      return (
        <span className="nav-link port-navbar-link clickable"> Entrar </span>

      )
    }

    const Logout = () => {
      return (
        <span className="nav-link port-navbar-link clickable"> Sair </span>

      )
    }

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Gustavo Ferri</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem  className="port-navbar-item">
                  <BsNavLink route="/" title="Home" />
              </NavItem>
              <NavItem className="port-navbar-item">
                  <BsNavLink route="/sobre" title="Sobre" />
              </NavItem>
              <NavItem className="port-navbar-item">
                  <BsNavLink route="/portfolios" title="Portifolio" />
              </NavItem>
              <NavItem className="port-navbar-item">
                  <BsNavLink route="/blogs" title="Blog" />
              </NavItem>
              <NavItem className="port-navbar-item">
                  <BsNavLink route="/cv" title="Cv" />
              </NavItem>
              <NavItem className="port-navbar-item">
                  <Login />
              </NavItem>
              <NavItem className="port-navbar-item">
                  <Logout />
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

