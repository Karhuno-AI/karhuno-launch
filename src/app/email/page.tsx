"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Send, AlertCircle, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Define form schema with validation
const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }).optional(),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
})

export default function EmailSender() {
  const [isLoading, setIsLoading] = useState(false)
  const [showSandboxWarning, setShowSandboxWarning] = useState(true)

  // Initialize form with react-hook-form and zod validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  })

  // Handle form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: values.email, // This can be empty and will use SES_TO_EMAIL as fallback
          subject: values.subject,
          message: values.message,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        console.log(response.ok)
        // Reset form on success
        form.reset()
      } else {
        throw new Error(data.error || "Failed to send email")
      }
    } catch (error: any) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container flex items-center justify-center min-h-screen py-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Send Email via AWS SES</CardTitle>
          <CardDescription>Fill out the form below to send an email using AWS Simple Email Service.</CardDescription>
        </CardHeader>

        {showSandboxWarning && (
          <CardContent className="pt-0 pb-2">
            <Alert variant="destructive" className="bg-amber-50 border-amber-200">
              <AlertCircle className="h-4 w-4 text-amber-600" />
              <AlertTitle className="text-amber-800">AWS SES Sandbox Mode</AlertTitle>
              <AlertDescription className="text-amber-700">
                Your AWS SES account is likely in sandbox mode. You can only send emails to verified email addresses.
                <Button
                  variant="link"
                  className="h-auto p-0 text-amber-800 font-semibold"
                  onClick={() => setShowSandboxWarning(false)}
                >
                  Dismiss
                </Button>
              </AlertDescription>
            </Alert>
          </CardContent>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <Alert variant="default" className="bg-blue-50 border-blue-200">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-blue-700">
                  Leave the recipient field empty to use the default recipient:{" "}
                  {process.env.NEXT_PUBLIC_SES_TO_EMAIL || "team@karhuno.com"}
                </AlertDescription>
              </Alert>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Recipient Email (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="recipient@example.com" {...field} />
                    </FormControl>
                    <FormDescription>Must be a verified email in your AWS SES account</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Email subject" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your email message" className="min-h-[120px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Email
                  </span>
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  )
}

