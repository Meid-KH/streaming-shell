import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, we're here to listen. Our team is dedicated to providing exceptional service and ensuring your satisfaction",
  alternates: {
    canonical: "/contact",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}
export default function layout({ children }: RootLayoutProps) {
  return <>{children}</>
}
