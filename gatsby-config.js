module.exports = {
  siteMetadata: {
      title: ``,
    siteUrl: `https://newberrydis.github.io`
  },
  pathPrefix: `/hfsgatsby`,
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-5551324-9",
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
        enableWebVitalsTracking: true,
      },
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    "gatsby-plugin-dark-mode",
    "gatsby-plugin-emotion", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "UA-5551324-4"
    }
  }, 
    "gatsby-plugin-image", 
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/drawing.svg"
    }
  }, 
    "gatsby-plugin-mdx", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "markdown-pages",
      "path": "./src/markdown-pages/"
    },
    __key: "markdown-pages"
  },{
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "markdown-text",
      "path": "./src/markdown-pages/text/"
    },
    __key: "markdown-text"
  },{
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "comments",
      "path": "./src/markdown-pages/comments/"
    },
    __key: "comments"
  }, { resolve: `gatsby-transformer-remark` }
  ]
};