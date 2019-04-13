import { PureComponent } from "react";

import "./Menu.scss";

import Link from "next/link";

import { MdMenu } from "react-icons/md";

class Menu extends PureComponent {
  state = { isShowing: false };

  handleMenu = () => {
    this.setState({ isShowing: !this.state.isShowing });
  };

  render() {
    return (
      <div id="menu">
        <h1>
          <MdMenu onClick={this.handleMenu} />
        </h1>
        <div
          id="menu-items"
          style={{
            transform: this.state.isShowing
              ? "translateX(0%)"
              : "translateX(-100%)"
          }}
        >
          <ul>
            <li>
              <Link href="/">
                <a>Inicio</a>
              </Link>
            </li>
            <li>
              <Link href="/mision-vision">
                <a>Misión - Visión</a>
              </Link>
            </li>
            <li>
              <Link href="/valores">
                <a>Nuestros valores</a>
              </Link>
            </li>
            <li>
              <Link href="/servicios">
                <a>Servicios</a>
              </Link>
            </li>
            <li>
              <Link href="/equipo">
                <a>Equipo de profesionales</a>
              </Link>
            </li>
            <li>
              <Link href="/contacto">
              <a>Contacto</a></Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
