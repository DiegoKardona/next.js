import React from "react";

import Head from "next/head";

const Layout = props => {
  return (
    <div id={props.page}>
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="http://avancesconluz.org/favicon.png" sizes="16x16 32x32" />
      </Head>
      {props.children}
    </div>
  );
};

export default Layout;
