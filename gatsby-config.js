const { siteTitle, siteDescription, siteAuthor, siteKeywords } = require('./src/config');

module.exports = {
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    author: siteAuthor,
    keywords: siteKeywords,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [{
          family: `Montserrat`,
          variants: [`400`, `500`, `700`],
        },
        {
          family: `DM Mono`,
          variants: [`400`],
        }],
      },
    },
    // {
    //   resolve: `gatsby-plugin-layout`,
    //   options: {
    //     component: require.resolve(`${__dirname}/src/components/layout.js`),
    //   },
    // },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/sections`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `MarekMazur`,
    //     short_name: `MarekMazur`,
    //     start_url: `/`,
    //     background_color: ``,
    //     theme_color: ``,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    `gatsby-plugin-offline`,
  ],
};