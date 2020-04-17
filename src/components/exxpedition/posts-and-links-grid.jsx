import React from "react"
import styled from "@emotion/styled"
import Masonry from "react-masonry-css"

const gutter = 30
const breakpointColumnsObj = {
  default: 2,
  700: 2,
  500: 1,
}

const Container = styled.div`
  margin: 20px auto;

  .my-masonry-grid {
    display: flex;
    margin-left: -${gutter}px; /* gutter size offset */
    width: auto;
  }

  .my-masonry-grid_column {
    padding-left: ${gutter}px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column .item {
    /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: ${gutter}px;
  }
`

const PostsAndLinksGrid = ({ children }) => {
  return (
    <Container>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {children}
      </Masonry>
    </Container>
  )
}

export default PostsAndLinksGrid
