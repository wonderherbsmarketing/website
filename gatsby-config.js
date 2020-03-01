module.exports = {
  siteMetadata: {
    title: `Wonder Herbs`,
    description: `Gatsby Website`,
    author: `James`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        once: false
      }
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/images`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mbk`,
        short_name: `Mbk`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/logo-dark.png`
      }
    }
  ]
};
