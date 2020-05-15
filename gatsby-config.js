const siteMetadata = {
  title: `ryanchanplc`
}

module.exports = {
  siteMetadata: siteMetadata,
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-remark-copy-linked-files',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`300`]
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080
            }
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `posts`,
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`]
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: `posts`
      }
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080
      }
    }
  ]
}
