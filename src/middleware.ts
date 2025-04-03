import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define public routes
const isPublicRoute = createRouteMatcher([
  '/',           // Home page
  '/sign-in(.*)' // Sign-in and any sign-in subroutes
])

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect() // Protect all other routes
  }
})

export const config = {
  matcher: [
    // Apply middleware to all routes except static assets
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always apply to API routes
    '/(api|trpc)(.*)',
  ],
}
