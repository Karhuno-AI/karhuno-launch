import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { jwtVerify } from "jose"


// Define paths that require authentication
const protectedPaths = ["/dashboard", "/profile", "/settings", "/account"]

// Function to check if the path requires authentication
function isProtectedPath(path: string): boolean {
  // Check if the path exactly matches any of the protected paths
  if (protectedPaths.includes(path)) {
    return true
  }

  // Check if the path starts with any of the protected paths followed by /
  for (const protectedPath of protectedPaths) {
    if (path.startsWith(`${protectedPath}/`)) {
      return true
    }
  }

  return false
}

// Verify JWT token
async function verifyToken(token: string) {
  try {
    const secret = process.env.JWT_SECRET
    if (!secret) {
      throw new Error("JWT_SECRET environment variable is not set")
    }

    const secretKey = new TextEncoder().encode(secret)
    const { payload } = await jwtVerify(token, secretKey)
    return payload
  } catch (error) {
    console.error("Error verifying token:", error)
    return null
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // If the path is not protected, allow access without authentication
  if (!isProtectedPath(pathname)) {
    return NextResponse.next()
  }

  // Check for authentication token in cookies
  const authToken = request.cookies.get("auth-token")?.value

  // If no token is found, redirect to sign-in page
  if (!authToken) {
    // Create a new URL for the redirect
    const redirectUrl = new URL("/signin", request.url)
    redirectUrl.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // Validate the token
  const payload = await verifyToken(authToken)

  // If token is invalid, redirect to sign-in page
  if (!payload) {
    // Create a new URL for the redirect
    const redirectUrl = new URL("/signin", request.url)
    redirectUrl.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // If token is valid, allow the request
  return NextResponse.next()
}

// Update the middleware to explicitly exclude API routes

// Update the matcher configuration to ensure API routes are excluded
export const config = {
  matcher: [
    // Match all request paths except for:
    // - API routes (/api/*)
    // - Static files (_next/static/*, favicon.ico, etc.)
    // - Public assets (/images/*, /fonts/*, etc.)
    "/((?!api|_next/static|_next/image|favicon.ico|images|fonts).*)",
  ],
}
