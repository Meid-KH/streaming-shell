// "use client"

import { Suspense } from "react"
import Link from "next/link"

import { getPosts } from "@/lib/wp"
import Heading from "@/components/ui/heading"
import PostCard from "@/components/PostCard"

const Page = async () => {
  const { posts } = await getPosts()

  // todo:
  // 1. Create a Post type
  // 2. Normalise posts

  return (
    <main className="py-24 sm:py-44">
      <div className="container max-w-6xl">
        <div className="space-y-2 text-center">
          <Heading as={"h1"} className="mb-3 !leading-tight xl:text-7xl">
            The <span className="text-muted/80">Ultimate</span> Streaming Blog
          </Heading>
          <p className="max-w-2xl mx-auto leading-relaxed text-muted">
            Welcome to{" "}
            <Link
              href="/about"
              className="underline underline-offset-4 text-muted"
            >
              Streaming Shell
            </Link>{" "}
            Blog, your one-stop source for the best Streaming deals,
            comprehensive guides, tutorials, and everything you need to know
            about TV.
          </p>
        </div>
        <div className="mt-10 mb-8 sm:mt-24">
          <Heading className="hidden text-3xl text-left md:text-4xl">
            Latest blog posts
          </Heading>
          {/* <Suspense fallback={<Loading />}> */}
          {posts && (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              {posts?.nodes?.map((post: any) => {
                return <PostCard key={post.id} data={post} />
              })}
            </div>
          )}
          {/* </Suspense> */}
        </div>
      </div>
    </main>
  )
}

export default Page
