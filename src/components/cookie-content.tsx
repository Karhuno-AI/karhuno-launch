"use client"

import { useState, useEffect, useRef } from "react"
import { X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { sendChatMessage } from "@/app/actions/chat"
import { useToast } from "@/components/ui/use-toast"

type CookiePreferences = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

type Message = {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export function CookieConsent() {
  const { toast } = useToast()
  const [showBanner, setShowBanner] = useState(false)
  const [showChatPanel, setShowChatPanel] = useState(false)
  const [chatMessage, setChatMessage] = useState("")
  const [email, setEmail] = useState("")
  const [showEmailField, setShowEmailField] = useState(true)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "👋 Hi there! How can we help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [isSending, setIsSending] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: true,
    marketing: true,
  })

  // Check if cookies are already accepted on component mount
  useEffect(() => {
    const cookieConsent = getCookie("cookie-consent")
    if (!cookieConsent) {
      setShowBanner(true)
    } else {
      try {
        const savedPreferences = JSON.parse(cookieConsent)
        setPreferences(savedPreferences)
      } catch (e) {
        setShowBanner(true)
        console.log(e)
      }
    }
  }, [])

  // Scroll to bottom of messages when new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    setPreferences(allAccepted)
    setCookie("cookie-consent", JSON.stringify(allAccepted), 365)
    setShowBanner(false)
  }


  const decline = () => {
    const minimal = {
      necessary: true,
      analytics: false,
      marketing: false,
    }
    setPreferences(minimal)
    setCookie("cookie-consent", JSON.stringify(minimal), 365)
    setShowBanner(false)
  }

  const toggleChatPanel = () => {
    setShowChatPanel(!showChatPanel)
  }

  const handleSendMessage = async () => {
    if (!chatMessage.trim()) return

    // Add user message to chat
    const userMessage: Message = {
      id: Date.now().toString(),
      text: chatMessage,
      isUser: true,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])

    // Clear input
    const messageToSend = chatMessage
    setChatMessage("")

    // Send message to server
    setIsSending(true)

    try {
      const formData = new FormData()
      formData.append("message", messageToSend)
      formData.append("email", email)

      const result = await sendChatMessage(formData)

      if (result.error) {
        throw new Error(result.error)
      }

      // Add response message
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            text: "Thanks for your message! We've received it and will get back to you soon.",
            isUser: false,
            timestamp: new Date(),
          },
        ])
        setIsSending(false)
      }, 1000)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send message",
        variant: "destructive",
      })
      setIsSending(false)
    }
  }

  return (
    <>
      {/* Cookie Consent Banner */}
      {showBanner && (
        <div className="fixed bottom-5 left-5 w-2/5 z-50 p-4 bg-background rounded-2xl shadow-lg">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">Cookie Preferences</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze
                    our traffic.
                  </p>
                </div>
                <Button variant="ghost" size="sm" onClick={decline} className="h-8 w-8 p-0">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={decline}>
                  Decline All
                </Button>
                <Button onClick={acceptAll}>Accept All</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Panel */}
      {showChatPanel && (
        <Card className="fixed bottom-20 right-4 w-80 z-40 shadow-xl">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Chat with us</CardTitle>
              <Button variant="ghost" size="sm" onClick={toggleChatPanel} className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <CardDescription>We typically reply within a few minutes</CardDescription>
          </CardHeader>

          {showEmailField && (
            <div className="px-4 pb-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email (optional)"
                className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="flex justify-end mt-2">
                <Button variant="ghost" size="sm" onClick={() => setShowEmailField(false)}>
                  Skip
                </Button>
                <Button
                  size="sm"
                  onClick={() => setShowEmailField(false)}
                  disabled={email !== "" && !email.includes("@")}
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {!showEmailField && (
            <>
              <CardContent className="h-64 overflow-y-auto border-y bg-muted/20 p-3">
                <div className="flex flex-col space-y-2">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`${
                        message.isUser
                          ? "bg-primary text-primary-foreground self-end rounded-tr-none"
                          : "bg-muted text-muted-foreground self-start rounded-tl-none"
                      } p-2 rounded-lg max-w-[80%]`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  ))}
                  {isSending && (
                    <div className="bg-muted text-muted-foreground p-2 rounded-lg rounded-tl-none max-w-[80%] self-start">
                      <div className="flex space-x-1">
                        <div
                          className="w-2 h-2 bg-current rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-current rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-current rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        ></div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
              <CardFooter className="pt-3">
                <form
                  className="flex w-full space-x-2"
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSendMessage()
                  }}
                >
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button size="sm" type="submit" disabled={isSending || !chatMessage.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardFooter>
            </>
          )}
        </Card>
      )}
    </>
  )
}

// Helper functions for cookie management
function setCookie(name: string, value: string, days: number) {
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`
}

function getCookie(name: string): string | null {
  const nameEQ = `${name}=`
  const ca = document.cookie.split(";")
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === " ") c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}