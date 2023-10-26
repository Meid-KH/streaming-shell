import { gql } from "graphql-request"

export const QUERY_ALL_PRODUCTS = gql`
  {
    products(where: { visibility: HIDDEN }) {
      nodes {
        ... on SimpleProduct {
          title
          price
          regularPrice
          salePrice
        }
      }
    }
  }
`
export const QUERY_ALL_POSTS = gql`
  {
    posts {
      nodes {
        id
        title
        slug
        isSticky
        excerpt
        content
        date
        seo {
          fullHead
          metaDesc
        }
        featuredImage {
          node {
            altText
            uri
            link
          }
        }
      }
    }
  }
`
export const QUERY_POST_BY_SLUG = gql`
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      date
      content
      isSticky
      featuredImage {
        node {
          altText
          link
          uri
        }
      }
      id
      slug
      title
      seo {
        metaDesc
        metaKeywords
        title
        metaRobotsNoindex
        metaRobotsNofollow
        opengraphTitle
        opengraphDescription
        opengraphImage {
          altText
          link
          uri
          mimeType
          slug
        }
        opengraphUrl
        opengraphType
        opengraphSiteName
        opengraphModifiedTime
        opengraphPublishedTime
        twitterTitle
        twitterDescription
        twitterImage {
          altText
          link
          uri
          mimeType
          slug
        }
      }
      tags {
        nodes {
          id
          name
          slug
          uri
        }
      }
    }
  }
`
