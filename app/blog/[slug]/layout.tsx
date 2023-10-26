import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Post } from "@/types/post"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { getPostBySlug, getPosts } from "@/lib/wp"
import Heading from "@/components/ui/heading"
import PostCard from "@/components/PostCard"
import { Icons } from "@/components/icons"

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    slug: string
  }
}
export default async function layout({ children, params }: RootLayoutProps) {
  const { posts } = await getPosts()
  const realetdPosts = posts.nodes.filter(
    (post: Post) => post.slug !== params.slug
  )
  // console.log(realetdPosts)

  return (
    <div className="container py-20 mx-auto sm:py-32">
      <main className="mx-auto max-w-prose">
        <Link
          href="/blog"
          className="inline-flex gap-2.5 items-center mb-12 sm:mb-20 group"
        >
          <span
            className={cn(
              "w-10 h-10 grid place-items-center",
              "text-background border border-muted/90 rounded-full bg-muted/70 backdrop-blur-lg",
              "duration-150 group-hover:-translate-x-2"
            )}
          >
            <Icons.arrowLeft className="w-5 h-5" />
          </span>
          <span className="text-sm tracking-wide no-underline uppercase text-muted">
            Blog
          </span>
        </Link>

        {children}
      </main>

      <footer className="max-w-5xl mx-auto mt-20">
        <Heading className={cn("mb-8 text-4xl text-left md:text-5xl")}>
          Related Articles
        </Heading>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {realetdPosts.map((post: any) => (
            <PostCard
              key={post.id}
              data={post}
              className={cn("first:!col-span-1 first:sm:p-4")}
            />
          ))}
        </div>
      </footer>
    </div>
  )
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string
  }
}) {
  const { slug } = params
  const { post } = await getPostBySlug(slug)
  return {
    title: post.seo.title,
    description: post.seo.metaDesc,
    openGraph: {
      title: post.seo?.opengraphTitle,
      description: post.seo?.opengraphDescription,
      type: post.seo?.opengraphType,
      publishedTime: post.seo?.opengraphPublishedTime,
      images: [
        {
          url: post.seo?.opengraphImage?.link,
          width: 800,
          height: 600,
        },
      ],
      url: `${siteConfig.url}/blog/${post.slug}`,
      twitter: {
        card: "app",
        title: post.seo?.twitterTitle,
        description: post.seo?.twitterDescription,
        // siteId: "1467726470533754880",
        // creator: "@nextjs",
        // creatorId: "1467726470533754880",
        images: {
          url: post.seo?.twitterImage?.link,
          alt: post.seo?.twitterImage?.altText,
        },
      },
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  }
}
