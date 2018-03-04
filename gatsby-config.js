require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Ju-La.com',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `hhqbvsrpmoqa`,
        accessToken: `e513c2d83981f83982f2e653d8d51f636b45da92295f2a08d416be691b0898bd`,
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
