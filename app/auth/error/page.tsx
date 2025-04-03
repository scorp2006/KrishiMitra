'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  let errorMessage = 'An unknown error occurred during authentication.';
  
  if (error === 'AccessDenied') {
    errorMessage = 'Access denied. You may not have permission to sign in.';
  } else if (error === 'Configuration') {
    errorMessage = 'There is a problem with the server configuration. Please try again later.';
  } else if (error === 'OAuthSignin' || error === 'OAuthCallback') {
    errorMessage = 'There was a problem with the Google sign-in process. Please try again.';
  } else if (error === 'OAuthAccountNotLinked') {
    errorMessage = 'The email is already associated with another account using a different sign-in method.';
  } else if (error === 'Callback') {
    errorMessage = 'There was a problem during the authentication callback. Please try again.';
  } else if (error === 'OAuthCreateAccount') {
    errorMessage = 'Could not create a user account. Please try again later.';
  } else if (error === 'EmailCreateAccount') {
    errorMessage = 'Could not create a user account using the email provided. Please try a different method.';
  } else if (error === 'SessionRequired') {
    errorMessage = 'You need to be signed in to access this page.';
  }

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-md">
          <div className="bg-background border border-red-300 rounded-xl p-8 shadow-sm">
            <div className="flex items-center justify-center text-red-500 mb-6">
              <svg className="h-16 w-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            
            <h1 className="text-2xl font-bold mb-4 text-center">Authentication Error</h1>
            <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6">
              {errorMessage}
            </div>

            <div className="flex flex-col gap-4">
              <Link 
                href="/auth/signin"
                className="bg-primary text-white font-medium py-3 px-4 rounded-md hover:bg-primary/90 transition-colors text-center"
              >
                Try Again
              </Link>
              <Link 
                href="/"
                className="bg-foreground/10 text-foreground font-medium py-3 px-4 rounded-md hover:bg-foreground/20 transition-colors text-center"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 