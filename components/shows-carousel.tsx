"use client"

import Image from "next/image"
import { Autoplay, Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/autoplay"
import Link from "next/link"

import imageBlurHash, { cn } from "@/lib/utils"

import { Icons } from "./icons"
import { buttonVariants } from "./ui/button"

const showImages = [
  "superman-lois.png",
  "ucl.png",
  "the-good-doctor.png",
  "premier-league.png",
  "django.png",
  "laliga.png",
  "better-call-saul.png",
  "shutter-island.png",
  "aquaman.png",
  "meg.png",
  "alphas.png",
  "got.png",
  "pb.png",
  "life.png",
  "logan.png",
  "fury.png",
  "great-white.png",
  "from-paris-with-love.png",
  "free-guy.png",
  "12-strong.png",
  "breaking-bad.png",
  "got.png",
  "nobody.png",
]

const ShowsCarousel = () => {
  return (
    <Swiper
      className="!flex overflow-visible___"
      modules={[Navigation, Autoplay]}
      spaceBetween={40}
      // slidesPerView={3}
      loop
      speed={6000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      // scrollbar={{ draggable: false }}
      navigation={{
        nextEl: ".swiper__next",
        prevEl: ".swiper__prev",
      }}
      breakpoints={{
        300: {
          slidesPerView: 2,
          speed: 2500,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // 1024: {
        //   slidesPerView: 4,
        // },
        1280: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1500: {
          slidesPerView: 5,
        },
      }}
    >
      {showImages.map((image, index) => (
        <SwiperSlide
          key={index}
          className="relative cursor-pointer select-none group"
        >
          <Image
            src={`/img/shows/${image}`}
            className={cn(
              // "w-[200] md:w-[500px] h-[400] md:h-[700px]",
              "aspect-[2/4]",
              "object-cover object-top mx-auto duration-200 opacity-60 hover:opacity-70"
            )}
            width={500}
            height={700}
            alt={image}
            // priority={true}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${imageBlurHash(500, 600)}`}
          />
          {/* <Link
            href="#pricing"
            // className= inset-x-0  w-full px-2 py-8 text-center bg-primary text-muted"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "opacity-0 transition group-hover:opacity-100",
              "absolute inset-x-0 duration-150 z-10 font-semibold tracking-tight bottom-0 rounded-none py-8 px-12 w-full",
              "hidden lg:inline-flex"
            )}
          >
            Subscribe now
          </Link> */}
        </SwiperSlide>
      ))}
      {/* <button className="absolute left-0 z-20 grid w-20 h-20 -translate-y-1/2 border rounded-full place-items-center translate-x-1/4 border-muted/20 bg-muted/20 hover:bg-muted/80 hover:text-background backdrop-blur-lg top-1/2 swiper__prev">
        <Icons.arrowLeft className="w-6 h-6" />
      </button>
      <button className="absolute right-0 z-20 grid w-20 h-20 -translate-y-1/2 border rounded-full place-items-center -translate-x-1/4 border-muted/20 bg-muted/20 hover:bg-muted/80 hover:text-background backdrop-blur-lg top-1/2 swiper__next">
        <Icons.arrowRight className="w-6 h-6" />
      </button> */}
    </Swiper>
  )
}

export default ShowsCarousel
