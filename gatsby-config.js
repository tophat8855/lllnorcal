module.exports = {
  siteMetadata: {
    title: `La Leche League of California, Hawaii, and Nevada`,
    url: "http://lllnorcal.org",
    image: "/images/LLL-calhinv.png"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
          'gatsby-remark-copy-linked-files',
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
