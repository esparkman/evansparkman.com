module.exports = {
  siteMetadata: {
    title: "Evan Sparkman",
    author: "Evan Sparkman",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "urn5oljhjjwv",
        accessToken: "Lww1NlAYphEO5utI6QWXWVABoY1hvdkN7PQzlhay_C0",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
