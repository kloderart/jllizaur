module.exports = {
  siteMetadata: {
    title: 'Javier López Lizaur',
    description: 'Javier López Lizaur Artist Portfolio',
    author: 'Javier López Úbeda <jlopezcur@gmail.com>',
    siteUrl: 'https://jllizaur.art',
  },
  plugins: [
    '@rhysforyou/gatsby-plugin-react-helmet-async',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Lato',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'artwork',
        path: `${__dirname}/data/artwork/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'press',
        path: `${__dirname}/data/press/`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'J. L. Lizaur',
        short_name: 'J.L.Lizaur',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#121212',
        display: 'standalone',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-47318809-3',
        head: false,
        anonymize: true,
        respectDNT: true,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'jllizaur.art',
      },
    },
  ],
};
