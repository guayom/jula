import React from "react"
import Banner from "./Banner"
import SmallBanner from "./SmallBanner"
import ImageGallery from "./ImageGallery"
import FullScreenBanner from "./FullScreenBanner"

const Components = {
  ContentfulBanner: Banner,
  ContentfulSmallBanner: SmallBanner,
  ContentfulGallery: ImageGallery,
  ContentfulFullScreenBanner: FullScreenBanner,
}

export default ({ contentBlocks }) => (
  <div>
    {contentBlocks.map((block) => {
      const BlockComponent = Components[block.__typename]
      return <BlockComponent {...block} key={block.id} />
    })}
  </div>
)
