/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Project Seek`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: '@directus/gatsby-source-directus',
      options: {
        url: '',
        project: 'Directus',
        auth: {
          email: '',
          password: '',
          token: '',
        },
        targetStatuses: ['published', 'draft', '__NONE__'],
        blockCollections: ['super_secret_stuff'],
        downloadFiles: false,
      },
    },
  ],
}
