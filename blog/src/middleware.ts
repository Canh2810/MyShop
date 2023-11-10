import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the cookie or token from the request
  const cookie = request.cookies.get('next-auth.session-token')

  // If not, redirect to the login page
  if (!cookie) {
    // Create a new URL object with the login page path
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // If yes, continue the normal rendering process
  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/post/:path*'],
}
