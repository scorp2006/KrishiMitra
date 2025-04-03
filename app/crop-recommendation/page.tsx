import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function CropRecommendationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Crop <span className="text-primary">Recommendation</span>
            </h1>
            <p className="text-lg text-center text-foreground/80 mb-8">
              Get AI-powered recommendations for the most suitable crops based on your soil characteristics and local conditions.
            </p>

            <div className="bg-background border border-primary/20 rounded-xl p-6 md:p-8 shadow-sm">
              <form className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-foreground">Soil Nutrient Information</h2>
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
                  <h2 className="text-xl font-bold text-foreground">Location & Weather</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-foreground mb-1">
                        City/Town
                      </label>
                      <input
                        type="text"
                        id="city"
                        className="w-full px-3 py-2 bg-background border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="e.g., Mumbai"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-foreground mb-1">
                        State
                      </label>
                      <select
                        id="state"
                        className="w-full px-3 py-2 bg-background border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select state</option>
                        <option value="andhra-pradesh">Andhra Pradesh</option>
                        <option value="assam">Assam</option>
                        <option value="bihar">Bihar</option>
                        <option value="chhattisgarh">Chhattisgarh</option>
                        <option value="gujarat">Gujarat</option>
                        <option value="haryana">Haryana</option>
                        <option value="karnataka">Karnataka</option>
                        <option value="kerala">Kerala</option>
                        <option value="madhya-pradesh">Madhya Pradesh</option>
                        <option value="maharashtra">Maharashtra</option>
                        <option value="punjab">Punjab</option>
                        <option value="rajasthan">Rajasthan</option>
                        <option value="tamil-nadu">Tamil Nadu</option>
                        <option value="telangana">Telangana</option>
                        <option value="uttar-pradesh">Uttar Pradesh</option>
                        <option value="west-bengal">West Bengal</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-foreground">Land & Budget</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="area" className="block text-sm font-medium text-foreground mb-1">
                        Land Area (in acres)
                      </label>
                      <input
                        type="number"
                        id="area"
                        min="0.1"
                        step="0.1"
                        className="w-full px-3 py-2 bg-background border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="e.g., 2.5"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-1">
                        Budget (₹)
                      </label>
                      <input
                        type="number"
                        id="budget"
                        className="w-full px-3 py-2 bg-background border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="e.g., 25000"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-medium py-3 px-4 rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Get Crop Recommendations
                  </button>
                  <p className="text-xs text-center text-foreground/60 mt-2">
                    This AI model analyzes your inputs to provide the most suitable crop options. Results typically appear in 5-10 seconds.
                  </p>
                </div>
              </form>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">How It Works</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 rounded-full p-3 mr-4">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Enter Soil Data</h3>
                    <p className="text-foreground/80">Provide NPK values and pH level from your soil test report.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 rounded-full p-3 mr-4">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Add Location</h3>
                    <p className="text-foreground/80">Our system uses your location to factor in climate patterns and seasonal weather.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 rounded-full p-3 mr-4">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Set Constraints</h3>
                    <p className="text-foreground/80">Define your land area and budget to get practical recommendations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 rounded-full p-3 mr-4">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Review Results</h3>
                    <p className="text-foreground/80">Get a ranked list of suitable crops with expected yield and profitability estimates.</p>
                  </div>
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