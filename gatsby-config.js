require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: "Ju-La.com"
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN
      }
    },
    `gatsby-transformer-remark`
  ]
};
