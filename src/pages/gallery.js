import React, {useState} from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfiniteGifs from '../components/infiniteGifs'
import SearchBar from '../components/searchBar'

const Gallery = () => {
  const [search, setSearch] = useState('')
  const handleTermChange = (term) => {
    setSearch(term)
  }

  return (
    <Layout>
      <SEO title="Gallery" />
      <SearchBar onTermChange={handleTermChange} />
      <InfiniteGifs term={ search } />

      {/* <Link to="/">Go back to the homepage</Link> */}
    </Layout>
  )
}
export default Gallery
