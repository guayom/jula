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
    `gatsby-transformer-remark`,
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`
    //   }
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Ju-la.com",
        short_name: "Jula",
        start_url: "/",
        background_color: "#002A3F",
        theme_color: "#002A3F",
        display: "standalone",
        icon: "src/images/Jula_Favicon.png",
        crossOrigin: `use-credentials`
      }
    }
  ]
};
