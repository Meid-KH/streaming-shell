import { request } from "graphql-request"

import { QUERY_ALL_POSTS, QUERY_POST_BY_SLUG } from "./queries"

// const url = process.env.NEXT_PUBLIC_WORDPRESS_API_URL_LOCAL
const url = `${process.env.SHOP_URL}/graphql`
export const wpFetcher = (query: string) => request(url as string, query)

// SSR Fetch
// export async function wpFetch({
//   query,
//   variables,
// }: {
//   query: string
//   variables?: any
// }) {
//   try {
//     const result = await fetch(
//       new URL(process.env.NEXT_PUBLIC_WORDPRESS_API_URL || ""),
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: { query, variables } && JSON.stringify({ query, variables }),
//       }
//     )
//     const data = await result.json()
//
//     return {
//       status: result.status,
//       body: data,
//     }
//   } catch (error) {
//     console.error("Error:", error)
//     return {
//       status: 500,
//       error: "Error receiving data",
//     }
//   }
// }
export async function wpFetch({
  query,
  variables,
}: {
  query: string
  variables?: any
}) {
  try {
    const response = await fetch(`${process.env.SHOP_URL}/graphql` || "", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      next: { revalidate: 10 },
    })
    const { data } = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

// Fetch All Posts
export async function getPosts() {
  return wpFetch({ query: QUERY_ALL_POSTS })
}

// Fetch All Posts
export async function getPostBySlug(slug: string) {
  return wpFetch({ query: QUERY_POST_BY_SLUG, variables: { slug } })
}
