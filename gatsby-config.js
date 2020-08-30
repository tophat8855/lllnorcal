module.exports = {
  siteMetadata: {
    title: `La Leche League of Northern California, Hawaii, and Nevada`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },  
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-linker',
        ],
      }
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}