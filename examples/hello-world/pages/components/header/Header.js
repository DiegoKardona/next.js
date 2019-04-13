import React from "react";

import "./Header.scss";

import Link from "next/link"

import Menu from "../menu/Menu";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div id="brand">
        <Link href="/">
        <a>
          <h1>Logo pequeño</h1>
          </a>
          </Link>
        </div>

        <Menu />
      </div>
    </div>
  );
};

export default Header;
