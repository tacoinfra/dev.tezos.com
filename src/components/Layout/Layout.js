import React, { Fragment } from "react"
import { Helmet } from "react-helmet"

import { rhythm } from "../../utils/typography"
import Navigation from "./Navigation"

const Layout = ({ children }) => (
  <Fragment>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/0.5.0/modern-normalize.min.css"
      />
    </Helmet>
    <Navigation
      navigationListItems={[
        { title: "Tutorials", href: "/tutorials" },
        { title: "Community", href: "/community" },
        { title: "Documetation", href: "/docs" },
      ]}
    />
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  </Fragment>
)

export default Layout
