import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <h1>YO!</h1>
      <p>Search for some rad new GIFs</p>
      <button className="button">
        <Link to="/gallery/">
          GIF me!
        </Link>
      </button>
    </div> 
  </Layout>
)

export default IndexPage
