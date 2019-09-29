import React, {useState, useEffect } from "react"
import PropTypes from "prop-types"
import InfiniteScroll from "react-infinite-scroll-component"
import axios from 'axios'

import "./gallery.css"

const GifGallery = ({
  gifs,
  loading,
  fetchGifs
}) => {
  
  // Create gallery here
  return (
    <InfiniteScroll 
      dataLength={ gifs.length }
      next={() => fetchGifs() }
      hasMore={ true }
      loader={
        <p style = {{ textAlign: "center", marginTop: "1%"}}>
          More gifs on their way
        </p>
      } 
    >
    <div className="gif-grid" >
      { !loading ? gifs.map( gif => ( 
        <div className="gif-item" key={ gif.id }>
          <img src={ gif.images.downsized.url } alt={ gif.title }/> 
        </div>
      )) 
      : ""} 
    </div> 
  </InfiniteScroll>
  )
}

const InfiniteGifs = (props) => {
  // I can has state
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(true)
  
  // Lets grab those GIFS!
  useEffect(() => {
    fetchGifs()
  }, [props.term])

  // Fetch Gifs from NETLIFY functions
  const fetchGifs = () => {
    axios("/.netlify/functions/fetch", {params: props.term}).then(res => {
      setGifs([...gifs, ...res.data.gifs.data])
      setLoading(false)
    })
  }

  return ( 
    <GifGallery gifs={gifs} loading={loading} fetchGifs={fetchGifs}/>
  )
}

GifGallery.propTypes = {
  gifs: PropTypes.array,
  loading: PropTypes.bool,
  fetchGifs: PropTypes.func,
}

export default InfiniteGifs
