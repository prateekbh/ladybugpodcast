import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="container">
        <main>{children}</main>
        <footer>
          <p>
            &copy; Kelly Vaughn, Ali Spittel, Emma Wedekind &amp;&amp; Lindsey
            Kopacz
          </p>
        </footer>
      </div>
    )
  }
}

export default Layout
