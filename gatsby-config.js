module.exports = {
  siteMetadata: {
    title: 'Reico Lee | Software Engineer',
    metaDescription: 'Hi, I’m Reico Lee, a full stack software engineer based in NYC, specializing in web development with TypeScript, React, Node.js, Django, and more.',
    description: "I’m a full stack software engineer based in NYC. I love solving hard problems. \
    No matter how big or small the task is, you will find me meticulously looking for the \
    right solution that fits the context. Humility, resourcefulness, and open-mindedness are \
    core to how I approach my work, and people around me. My ultimate goal is to translate \
    my passion in software development, perpetually work on improving my chops, and build \
    great products that empower lives along the way.",
    tagline: 'I build things on the web, and I love what I do.',
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
    metaKeywords: 
    'Reico Lee, Reico, Lee, reicolee, software engineer, front-end engineer, full stack engineer, \
    full-stack engineer, NYC, web developer, web development, full stack developer, \
    full-stack engineer, full-stack developer, @reicolee, leereico@gmail.com',
    author: '© 2020, Handcrafted by Reico Lee',
    websiteRepoUrl: 'https://github.com/reicolee/website',
    siteUrl: 'https://reicolee.com/'
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
    `gatsby-plugin-root-import`,
    `gatsby-plugin-sitemap`
  ],
}
