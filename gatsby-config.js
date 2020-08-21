module.exports = {
  siteMetadata: {
    title: `Reico Lee - Software Engineer`,
    description: "I'm a full stack software engineer based in NYC, specializing in building \
    web applications using technologies such as NodeJS, React, Redux, GraphQL, Django, etc.",
    tagline: `I build things on the web, and I love what I do.`,
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/reicolee/'
      },
      {
        name: 'Github',
        url: 'https://github.com/reicolee'
      },
      {
        name: 'Contact Reico by email',
        url: 'mailto:leereico@gmail.com?subject=Hi Reico!'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/reicolee/?hl=en'
      }
    ],
    author: `@Reico`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `reico-website`,
        short_name: `reico`,
        start_url: `/`,
        background_color: `#0B1726`,
        theme_color: `#0B1726`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-root-import`
  ],
}
