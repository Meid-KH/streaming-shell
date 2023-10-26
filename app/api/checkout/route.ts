import { NextResponse } from "next/server"

const shopUrl = process.env.SHOP_URL

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

  return await NextResponse.json({
    status: "ok",
    id,
    // redirectUrl: `${shopUrl}/shop/?add-to-cart=${id}`,
    // redirectUrl: `${shopUrl}/?add-to-cart=${id}`,s
    redirectUrl: `${shopUrl}/checkout?add-to-cart=${id}`,
    // redirectUrl: `${shopUrl}/`,
  })
}
