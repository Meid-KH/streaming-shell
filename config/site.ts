export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Streaming Shell",
  description: "Top-notch Premium Streaming Subscriptions",
  url: "https://www.streamingshell.uk",
  email: process.env.NEXT_PUBLIC_SITE_EMAIL,
  phone: process.env.NEXT_PUBLIC_SITE_PHONE,
  author: "Alejandro",
  authorUrl: "https://www.mkhobba.com",
  locale: "en_GB",
  mainNav: [
    {
      title: "Channels",
      href: "/#",
      icon: "channels",
    },
    {
      title: "Pricing",
      href: "/#pricing",
      icon: "pricing",
    },
    {
      title: "FAQ",
      href: "/#faq",
      icon: "faq",
    },
    // {
    //   title: "Blog",
    //   href: "/#",
    //   icon: "blog",
    // },
    {
      title: "Contact",
      href: "/contact",
      icon: "contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
  discount: "30% OFF",
}
