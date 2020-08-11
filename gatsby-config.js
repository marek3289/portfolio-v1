const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    author: config.siteAuthor,
    keywords: config.siteKeywords,
    url: config.siteUrl,
    lang: config.siteLanguage,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Marek Mazur`,
        short_name: `MarekMazur`,
        start_url: `/`,
        background_color: `#191919`,
        theme_color: `#191919`,
        display: `minimal-ui`,
        icon: `src/assets/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsID,
        head: true,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
