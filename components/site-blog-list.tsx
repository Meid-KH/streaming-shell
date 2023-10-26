import Link from "next/link"

import { cn } from "@/lib/utils"
import { getPosts } from "@/lib/wp"

import PostCard from "./PostCard"
import { Icons } from "./icons"
import { Button, buttonVariants } from "./ui/button"
import Heading from "./ui/heading"

const BlogList = async () => {
  const { posts } = await getPosts()
  const blogPostsList = posts.nodes.slice(0, 4)
  return (
    <section className="py-12 md:py-24">
      <div className="container">
        <Heading className={cn("")}>
          Streaming News, <span className="text-muted">Guides</span> and
          Tutorials
        </Heading>
        <div className="grid gap-6 mt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {blogPostsList.map((post: any) => (
            <PostCard
              key={post.id}
              data={post}
              className={cn(post.isSticky && "!col-span-1 sm:p-4")}
            />
          ))}
        </div>
        <div className="mt-10 md:mt-16">
          <Link
            href="/blog"
            className={cn(
              buttonVariants({ size: "sm" }),
              "relative flex px-4 py-5 pr-11 group w-max mx-auto"
            )}
          >
            View more articles
            <span
              className={cn(
                "absolute grid w-8 h-8 rounded-full right-1 top-1 place-items-center",
                "text-muted/90 bg-background backdrop-blur-lg",
                "transition-transform group-hover:scale-90"
              )}
            >
              <Icons.arrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogList
