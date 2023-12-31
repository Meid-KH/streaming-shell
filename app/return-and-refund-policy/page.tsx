import { Metadata } from "next"

import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Return & refund policy",
  description:
    "To help explain things as clearly as possible in this Return & Refund Policy, every time any of these terms are referenced",
  alternates: {
    canonical: "/return-and-refund-policy",
  },
}
export default function page() {
  return (
    <section className="py-56">
      <div className="container prose">
        <h1 className="text-5xl font-extrabold tracking-tight scroll-m-20 lg:text-7xl">
          Return & refund policy
        </h1>
        <h2>Definitions and Key Terms</h2>
        <p>
          To help explain things as clearly as possible in this Return & Refund
          Policy, every time any of these terms are referenced, they are
          strictly defined as:
        </p>
        <ul>
          <li>
            <strong>Cookie:</strong> A small amount of data generated by a
            website and saved by your web browser. It is used to identify your
            browser, provide analytics, remember information about you such as
            your language preference or login information.
          </li>
          <li>
            <strong>Company:</strong> When this policy mentions “Company,” “we,”
            “us,” or “our,” it refers to <strong>{siteConfig.name}</strong> ,
            that is responsible for your information under this Return & Refund
            Policy.
          </li>
          <li>
            <strong>Customer:</strong> Refers to the company, organization, or
            person that signs up to use the <strong>{siteConfig.name}</strong>{" "}
            Service to manage the relationships with your consumers or service
            users.
          </li>
          <li>
            <strong>Device:</strong> Any internet-connected device such as a
            phone, tablet, computer, or any other device that can be used to
            visit <strong>{siteConfig.name}</strong> and use the services.
          </li>
          <li>
            <strong>Service:</strong> Refers to the service provided by{" "}
            <strong>{siteConfig.name}</strong> as described in the relative
            terms (if available) and on this platform.
          </li>
          <li>
            <strong>Website:</strong> <strong>{siteConfig.name}</strong> ’s
            site, which can be accessed via this URL:{" "}
            <strong>{siteConfig.url}</strong>
          </li>
          <li>
            <strong>You:</strong> A person or entity that is registered with{" "}
            <strong>{siteConfig.name}</strong> to use the Services.
          </li>
        </ul>
        <h2>Return & Refund Policy</h2>
        <p>
          Thanks for shopping at <strong>{siteConfig.name}</strong> . We
          appreciate the fact that you like to buy the stuff we build. We also
          want to make sure you have a rewarding experience while you’re
          exploring, evaluating, and purchasing our products.
        </p>
        <p>
          As with any shopping experience, there are terms and conditions that
          apply to transactions at <strong>{siteConfig.name}</strong> . We’ll be
          as brief as our attorneys will allow. The main thing to remember is
          that by placing an order or making a purchase at{" "}
          <strong>{siteConfig.name}</strong> , you agree to the terms set forth
          below along with the Policy.
        </p>
        <p>
          If there’s something wrong with the product you bought, or if you are
          not happy with it, you have 1 week to issue a refund and return your
          purchase.
        </p>
        <p>
          If you would like to return a product, the only way would be if you
          follow the next guidelines:
        </p>
        <ul>
          <li>
            The package needs to come back with the original receipt of the
            purchase.
          </li>
          <li>
            The product has to be in the packaging we sent in the first place.
          </li>
          <li>
            The product has to be damage-free. If we find any damage on the
            product, we will cancel your refund immediately.
          </li>
        </ul>
        <h2>Refunds</h2>
        <p>
          We at <strong>{siteConfig.name}</strong> commit ourselves to serving
          our customers with the best products. Every single product that you
          choose is thoroughly inspected, checked for defects, and packaged with
          utmost care. We do this to ensure that you fall in love with our
          products.
        </p>
        <p>
          Sadly, there are times when we may not have the product(s) that you
          choose in stock or may face some issues with our inventory and quality
          check. In such cases, we may have to cancel your order. You will be
          intimated about it in advance so that you don’t have to worry
          unnecessarily about your order. If you have purchased via Online
          payment (not Cash on Delivery), then you will be refunded once our
          team confirms your request.
        </p>
        <p>
          We carry out thorough quality checks before processing the ordered
          item. We take utmost care while packing the product. At the same time,
          we ensure that the packing is good such that the items won’t get
          damaged during transit. Please note that{" "}
          <strong>{siteConfig.name}</strong> is not liable for damages that are
          caused to the items during transit or transportation.
        </p>
        <p>
          We will review your returned product as soon as we receive it, and if
          it follows the guidelines addressed above, we will proceed to issue a
          refund of your purchase. Your refund may take a couple of days to
          process, but you will be notified when you receive your money.
        </p>
        <h2>Shipping</h2>
        <p>
          <strong>{siteConfig.name}</strong> is responsible for return shipping
          costs. Every returning shipping is paid by{" "}
          <strong>{siteConfig.name}</strong> , even if the item didn’t have free
          shipping in the first place.
        </p>
        <h2>Your Consent</h2>
        <p>
          By using our website, registering an account, or making a purchase,
          you hereby consent to our Return & Refund Policy and agree to its
          terms.
        </p>
        <h2>Changes To Our Return & Refund Policy</h2>
        <p>
          Should we update, amend, or make any changes to this document so that
          they accurately reflect our Service and policies, those changes will
          be prominently posted here. Then, if you continue to use the Service,
          you will be bound by the updated Return & Refund Policy. If you do not
          want to agree to this or any updated Return & Refund Policy, you can
          delete your account.
        </p>
        <h2>Contact Us</h2>
        <p>Don’t hesitate to contact us if you have any questions.</p>
        <ul>
          <li>
            Via email:{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </li>
        </ul>
      </div>
    </section>
  )
}
