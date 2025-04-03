import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              Agriculture <span className="text-primary">News</span>
            </h1>
            
            <div className="bg-background border border-primary/20 rounded-xl p-8 shadow-sm mb-12">
              <div className="flex flex-col items-center justify-center">
                <Image 
                  src="/logo.png" 
                  alt="KrishiMitra Logo" 
                  width={100} 
                  height={100} 
                  className="mb-6"
                />
                
                <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
                
                <p className="text-lg text-foreground/80 mb-6">
                  We're working hard to bring you the latest news and updates from the agriculture sector.
                </p>
                
                <div className="inline-block bg-primary/10 rounded-full px-6 py-3 font-medium text-primary">
                  Stay tuned for updates!
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background border border-foreground/10 rounded-xl p-6 text-left">
                <h3 className="font-bold text-xl mb-4">What to expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Latest agricultural policy updates</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Weather forecasts for farming regions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Market prices and trends</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Success stories from the farming community</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-background border border-foreground/10 rounded-xl p-6 text-left">
                <h3 className="font-bold text-xl mb-4">Subscribe for updates</h3>
                <p className="text-foreground/80 mb-4">
                  Be the first to know when our news section launches. Leave your email to get notified.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow px-4 py-2 rounded-md border border-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    disabled
                  />
                  <button 
                    className="bg-primary text-white font-medium py-2 px-4 rounded-md opacity-50 cursor-not-allowed"
                    disabled
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-foreground/60 mt-2">
                  (Subscription feature coming soon)
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 