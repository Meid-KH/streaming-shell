import Image from "next/image"
import Link from "next/link"

import { Post } from "@/types/post"
import { formatDate } from "@/lib/datetime"
import { sanitizeExcerpt } from "@/lib/sanitizeExcerpt"
import imageBlurHash, { cn } from "@/lib/utils"

import { Icons } from "./icons"
import { Skeleton } from "./ui/skeleton"

const PostCard = ({
  data: post,
  className,
}: {
  data: Post
  className?: string
}) => {
  if (!post) {
    return <Skeleton className="w-full h-44" />
  }
  // console.log("sticky ", post?.isSticky)

  return (
    <Link
      href={`/blog/${post?.slug}`}
      // key={post?.slug}
      className={cn(
        "p-4 rounded-xl bg-muted/10 backdrop-blur-lg flex flex-col gap-3.5",
        "border border-border/40 hover:bg-muted/5",
        "group flex gap-6 justify-between flex-col",
        post.isSticky &&
          "col-span-1 sm:col-span-2 md:col-span-3 sm:p-6 order-first",
        className
      )}
    >
      <figure className="space-y-4">
        {/* image */}
        <Image
          src={post?.featuredImage?.node?.link}
          width={600}
          height={450}
          className={cn(
            "object-cover rounded-lg aspect-[3/2]",
            post.isSticky && "w-full"
          )}
          alt={post?.title}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${imageBlurHash(500, 600)}`}
        />
        {/* title */}
        <h3
          className={cn("text-xl font-semibold line-clamp-2")}
          dangerouslySetInnerHTML={{
            __html: post?.title,
          }}
          title={post?.title}
        />
        {/* excerpt */}
        {post.excerpt && (
          <div
            className={cn("text-sm line-clamp-5")}
            dangerouslySetInnerHTML={{
              __html: sanitizeExcerpt(post?.excerpt),
            }}
          />
        )}
      </figure>
      {/* metadata */}
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs tracking-wide flex gap-1.5 opacity-80 ml-auto">
          <Icons.timer className="w-3.5 h-3.5" />
          <time dateTime={post.date}>{formatDate(post?.date)}</time>
        </span>
      </div>
    </Link>
  )
}

export default PostCard
