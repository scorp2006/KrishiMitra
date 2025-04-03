import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function FertilizerRecommendationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Fertilizer <span className="text-primary">Recommendations</span>
            </h1>
            <p className="text-lg text-center text-foreground/80 mb-8">
              Get customized fertilizer recommendations and growth tips based on your soil conditions and selected crops.
            </p>

            <div className="bg-background border border-primary/20 rounded-xl p-6 md:p-8 shadow-sm">
              <form className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-foreground">Current Soil Nutrient Information</h2>
                  <p className="text-sm text-foreground/70">
                    Enter the NPK (Nitrogen, Phosphorus, Potassium) values from your soil test report. 
                    <Link href="/soil-testing-guide" className="text-primary hover:underline ml-1">
                      How to get soil tested?
                    </Link>
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="nitrogen" className="block text-sm font-medium text-foreground mb-1">
                        Nitrogen (N) (kg/ha)
                      </label>
                      <input
                        type="number"
                        id="nitrogen"
                        className="w-full px-3 py-2 bg-background border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="e.g., 80"
                      />
                    </div>
                    <div>
                      <label htmlFor="phosphorus" className="block text-sm font-medium text-foreground mb-1">
                        Phosphorus (P) (kg/ha)
                      </label>
                      <input
                        type="number"
                        id="phosphorus"
                        className="w-full px-3 py-2 bg-background border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="e.g., 40"
                      />
                    </div>
                    <div>
                      <label htmlFor="potassium" className="block text-sm font-medium text-foreground mb-1">
                        Potassium (K) (kg/ha)
                      </label>
                      <input
                        type="number"
                        id="potassium"
                        className="w-full px-3 py-2 bg-background border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="e.g., 60"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="ph" className="block text-sm font-medium text-foreground mb-1">
                      Soil pH Level
                    </label>
                    <input
                      type="number"
                      id="ph"
                      step="0.1"
                      min="0"
                      max="14"
                      className="w-full px-3 py-2 bg-background border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g., 6.5"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-foreground">Select Your Crop</h2>
                  <p className="text-sm text-foreground/70">
                    Choose the crop you are growing or planning to grow.
                  </p>
                  
                  <div>
                    <label htmlFor="crop" className="block text-sm font-medium text-foreground mb-1">
                      Crop Type
                    </label>
                    <select
                      id="crop"
                      className="w-full px-3 py-2 bg-background border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select crop</option>
                      <option value="rice">Rice</option>
                      <option value="wheat">Wheat</option>
                      <option value="maize">Maize</option>
                      <option value="cotton">Cotton</option>
                      <option value="sugarcane">Sugarcane</option>
                      <option value="potato">Potato</option>
                      <option value="tomato">Tomato</option>
                      <option value="onion">Onion</option>
                      <option value="soybean">Soybean</option>
                      <option value="groundnut">Groundnut</option>
                      <option value="mustard">Mustard</option>
                      <option value="chickpea">Chickpea</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-foreground">Growing Conditions</h2>
                  
                  <div>
                    <label htmlFor="growing-season" className="block text-sm font-medium text-foreground mb-1">
                      Growing Season
                    </label>
                    <select
                      id="growing-season"
                      className="w-full px-3 py-2 bg-background border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select season</option>
                      <option value="kharif">Kharif (Monsoon)</option>
                      <option value="rabi">Rabi (Winter)</option>
                      <option value="zaid">Zaid (Summer)</option>
                      <option value="year-round">Year-round</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="irrigation" className="block text-sm font-medium text-foreground mb-1">
                      Irrigation Method
                    </label>
                    <select
                      id="irrigation"
                      className="w-full px-3 py-2 bg-background border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select irrigation method</option>
                      <option value="drip">Drip Irrigation</option>
                      <option value="sprinkler">Sprinkler</option>
                      <option value="flood">Flood Irrigation</option>
                      <option value="rainfed">Rainfed (No Irrigation)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-medium py-3 px-4 rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Get Fertilizer Recommendations
                  </button>
                  <p className="text-xs text-center text-foreground/60 mt-2">
                    Our AI model will analyze your inputs to provide optimal fertilizer formulations and application schedules.
                  </p>
                </div>
              </form>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Benefits of Balanced Fertilization</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background rounded-lg border border-primary/20 p-5 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-full mr-3">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="font-bold">Increased Yield</h3>
                  </div>
                  <p className="text-sm text-foreground/80">
                    Balanced fertilization ensures plants receive all necessary nutrients for optimal growth, leading to higher crop yields.
                  </p>
                </div>

                <div className="bg-background rounded-lg border border-primary/20 p-5 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-full mr-3">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="font-bold">Improved Quality</h3>
                  </div>
                  <p className="text-sm text-foreground/80">
                    Crops grown with proper nutrition develop better taste, appearance, and nutritional content.
                  </p>
                </div>

                <div className="bg-background rounded-lg border border-primary/20 p-5 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-full mr-3">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold">Cost Effective</h3>
                  </div>
                  <p className="text-sm text-foreground/80">
                    Using the right amount of fertilizer at the right time reduces waste and maximizes your investment.
                  </p>
                </div>

                <div className="bg-background rounded-lg border border-primary/20 p-5 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-full mr-3">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold">Environmental Benefits</h3>
                  </div>
                  <p className="text-sm text-foreground/80">
                    Precise application reduces runoff and leaching, protecting water resources and surrounding ecosystems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 