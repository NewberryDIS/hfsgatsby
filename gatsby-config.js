module.exports = {
  siteMetadata: {
      title: ``,
    siteUrl: `https://newberrydis.github.io`
  },
  pathPrefix: `/hfsgatsby`,
  plugins: ["gatsby-plugin-emotion", {
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