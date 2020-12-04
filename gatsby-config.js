module.exports = {
  siteMetadata: {
    title: 'Reico Lee | Software Engineer',
    metaDescription: 'Hi, I’m Reico Lee, a full stack software engineer based in NYC, specializing in web development with TypeScript, React, Node.js, Django, and more.',
    description: 'I’m a product-minded software engineer based in NYC. I love \
    leveraging the use of technologies to leapfrog human/user \
    problems. Regardless of how major or minor a problem is, you will \
    find me meticulously looking for a solution that fits the context. \
    I am a disciple of writing clean, maintainable, and well-tested code so my fellow devs \
    (and my future self) would understand.',
    descriptionTwo: 'My core values are humility, proactivity, and results-driven. My \
    ultimate goal is to perpetually work on improving my chops, and \
    build great products that empower lives.',
    works: [
      {
        title: 'Double',
        description: 'I collaborate closely with product, design, and customer success \
        to iterate on core features development, work primarily in two \
        React frontend applications that facilitate and improve the \
        delegation experienece between executives and assistants.',
        tenure: '2019 - Present',
      },
      {
        title: 'BentoBox',
        description: 'I worked on a wide array of projects across the stack. Noteable \
        projects include improved data pipeline & analytics, implemented \
        core accessibility features on 5000+ websites, streamlined \
        company-wide productivity with better tooling, core CMS features \
        development, reporting tools for customers, and more.', 
        tenure: '2017 - 2019'
      },
    ],
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
        url: 'mailto:leereico@gmail.com?body=Hi Reico!'
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
    author: '© 2020, Designed and Built by Reico Lee',
    websiteRepoUrl: 'https://github.com/reicolee/website',
    siteUrl: 'https://reicolee.com/',
    skills: [
      'JavaScript (ES6+)',
      'HTML5 & CSS3',
      'NodeJS',
      'React, React Native',
      'Redux',
      'Apollo GraphQL',
      'Web accessibility',
      'Python3',
      'Django (w/ DRF)',
    ]
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
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-97549190-2",
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/svg`
        }
      }
    }
  ],
}
