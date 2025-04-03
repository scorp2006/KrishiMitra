import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Define public paths that don't require authentication
  const isPublicPath = path === '/auth/signin' || 
                       path === '/auth/error' || 
                       path === '/' || 
                       path.startsWith('/api/') || 
                       path.startsWith('/_next/');
  
  // Define protected paths that require authentication
  const isProtectedPath = path === '/profile' || 
                         path.startsWith('/profile/') || 
                         path === '/recommendations';
  
  const token = await getToken({ 
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  });

  // Redirect to login if accessing a protected route without being authenticated
  if (isProtectedPath && !token) {
    return NextResponse.redirect(new URL('/auth/signin', request.url));
  }

  // Redirect to homepage if trying to access login page while already authenticated
  if (path === '/auth/signin' && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/profile/:path*',
    '/recommendations/:path*',
    '/auth/signin',
    '/auth/error'
  ],
}; 