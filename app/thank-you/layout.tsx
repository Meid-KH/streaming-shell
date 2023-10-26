import { Metadata } from "next"
import Script from "next/script"

interface RootLayoutProps {
  children: React.ReactNode
}
export const metadata: Metadata = {
  title: "Thank You for Your Purchase!",
  description:
    "Thank you for your trust in us. Your satisfaction is our top priority, and we're committed to providing you with the best TV experience possible",
  alternates: {
    canonical: "/thank-you",
  },
}
export default function layout({ children }: RootLayoutProps) {
  return (
    <>
      {/* <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-11367202905"
      />
      <Script
        id="google-tag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-11367202905');`,
        }}
      /> */}

      {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11362969000">
      </script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-11362969000');
      </script> */}
      {children}
    </>
  )
}
