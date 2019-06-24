import React from "react"
import Layout from "../components/layout"

class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <div className="contact">
          <div className="container">
            To give us feedback on our show, please DM us on{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/ladybugpodcast"
            >
              Twitter
            </a>
            ! If you're interested in sponsorship opportunities, please email
            hello at ladybug.dev.
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact