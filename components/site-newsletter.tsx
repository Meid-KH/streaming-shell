"use client"

import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { newsletter } from "@/lib/airtable"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import Heading from "@/components/ui/heading"
import { Input } from "@/components/ui/input"

import { Icons } from "./icons"

const formSchema = z.object({
  email: z.string().email().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const NewsLetter = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [isError, setIsError] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    setIsError(false)
    setIsSuccess(false)

    try {
      const response = await newsletter.create([
        {
          fields: {
            Email: values.email,
          },
        },
      ])
      setIsSuccess(true)
      setIsLoading(false)
      form.reset()
      console.log(response)

      return response
    } catch (error) {
      setIsLoading(false)
      console.log(error)
      form.reset()
      setIsError(true)
    }
  }

  return (
    <section className="py-32 border-b bg-black/50 backdrop-blur-sm border-border/20">
      <div className="container">
        <div className="grid items-end gap-16 md:grid-cols-2">
          <div className="space-y-3">
            <Heading
              as="div"
              className="leading-none tracking-tighter text-left"
            >
              Join Our <span className="text-muted">Newsletter </span> &nbsp;
              {/* todo: add icn like 📨 */}
            </Heading>
            <p className="text-muted/80">
              Never miss a beat and be the first to receive exciting updates,
              exclusive offers, and insider content—join our newsletter today
              and stay connected with us!
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full max-w-xl ml-auto"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div
                      className={cn(
                        "flex items-center w-full gap-2",
                        "rounded-full relative"
                      )}
                    >
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Your email..."
                          className="h-20 pl-5 pr-32 rounded-3xl border-border/50"
                          {...field}
                        />
                      </FormControl>
                      <Button
                        type="submit"
                        className="absolute inset-y-4 right-4 rounded-2xl"
                      >
                        {isLoading ? (
                          <>
                            Submitting...{" "}
                            <Icons.spinner className="w-5 h-5 animate-spin" />
                          </>
                        ) : (
                          <span>Subscribe</span>
                        )}
                      </Button>
                    </div>
                    {/* <FormDescription>Enter your country here</FormDescription> */}
                    <FormMessage className="ml-3.5" />
                  </FormItem>
                )}
              />
              {/* Alert */}
              {(isError || isSuccess) && (
                <div
                  className={cn(
                    isError && "bg-yellow-200/30 border-yellow-400/80",
                    isSuccess && "bg-green-200/30 border-green-400/80",
                    "text-center text-sm font-medium p-2.5 border rounded-xl mt-3"
                  )}
                >
                  <p>
                    {isError && "Something went wrong! 😕"}
                    {isSuccess && "Thanks! your message has been sent 🎊"}
                  </p>
                </div>
              )}
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter
