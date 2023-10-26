import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { getPostBySlug, getPosts } from "@/lib/wp"
import Heading from "@/components/ui/heading"

export async function generateStaticParams() {
  const { posts } = await getPosts()

  return posts.nodes.map((post: any) => ({
    slug: post.slug,
  }))
}
interface Tag {
  id: string
  name: string
  slug: string
  uri: string
}
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const { post } = await getPostBySlug(slug)
  const { nodes: tags } = post.tags

  // console.log(tags)

  return (
    <>
      <article className="mx-auto prose">
        <Heading
          as="h1"
          className={cn(
            "text-4xl text-left md:text-5xl font-extrabold !leading-tight"
          )}
        >
          {post?.title}
        </Heading>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
      {tags && (
        <ul className="flex flex-wrap items-center gap-3 pt-12 mt-12 border-t border-border/40">
          {tags.map((tag: Tag) => {
            const { id, name, slug, uri } = tag
            return (
              <li
                key={id}
                className={cn(
                  "px-3.5 py-1 text-sm font-medium uppercase text-center text-background/90 rounded-full bg-muted/70 tracking-wide backdrop-blur-lg",
                  "cursor-pointer"
                )}
              >
                {name}
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}
