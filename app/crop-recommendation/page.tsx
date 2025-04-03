'use client';

import { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function CropRecommendationPage() {
  const [formData, setFormData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    ph: '',
    city: '',
    state: '',
    area: '',
    budget: ''
  });

  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 2000);
  };

  // Mock crop recommendations based on input
  const getCropRecommendations = () => {
    // This would normally be determined by an AI model
    const recommendations = [
      {
        name: 'Rice',
        confidence: 92,
        expectedYield: '5.2 tons/hectare',
        profitability: 'High',
        details: 'Ideal for your soil conditions with adequate nitrogen levels. Suitable for the rainfall patterns in your region.'
      },
      {
        name: 'Wheat',
        confidence: 85,
        expectedYield: '4.8 tons/hectare',
        profitability: 'Medium-High',
        details: 'Good match for your phosphorus rich soil. Consider additional potassium supplements.'
      },
      {
        name: 'Cotton',
        confidence: 78,
        expectedYield: '2.1 tons/hectare',
        profitability: 'Medium',
        details: 'Moderate suitability. Your soil pH is in the optimal range for cotton cultivation.'
      }
    ];
    
    return recommendations;
  };

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

            {!showResults ? (
              <div className="bg-background border border-primary/20 rounded-xl p-6 md:p-8 shadow-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
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
                          value={formData.nitrogen}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-background border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="e.g., 80"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phosphorus" className="block text-sm font-medium text-foreground mb-1">
                          Phosphorus (P) (kg/ha)
                        </label>
                        <input
                          type="number"
                          id="phosphorus"
                          value={formData.phosphorus}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-background border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="e.g., 40"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="potassium" className="block text-sm font-medium text-foreground mb-1">
                          Potassium (K) (kg/ha)
                        </label>
                        <input
                          type="number"
                          id="potassium"
                          value={formData.potassium}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-background border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="e.g., 60"
                          required
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
                        value={formData.ph}
                        onChange={handleInputChange}
                        step="0.1"
                        min="0"
                        max="14"
                        className="w-full px-3 py-2 bg-background border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="e.g., 6.5"
                        required
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
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-background border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="e.g., Mumbai"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-foreground mb-1">
                          State
                        </label>
                        <select
                          id="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-background border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
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
                          value={formData.area}
                          onChange={handleInputChange}
                          min="0.1"
                          step="0.1"
                          className="w-full px-3 py-2 bg-background border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="e.g., 2.5"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-1">
                          Budget (₹)
                        </label>
                        <input
                          type="number"
                          id="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-background border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="e.g., 25000"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-primary text-white font-medium py-3 px-4 rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-70"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Analyzing Data...
                        </span>
                      ) : (
                        'Get Crop Recommendations'
                      )}
                    </button>
                    <p className="text-xs text-center text-foreground/60 mt-2">
                      This AI model analyzes your inputs to provide the most suitable crop options. Results typically appear in 5-10 seconds.
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-background border border-primary/20 rounded-xl p-6 md:p-8 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Recommended Crops</h2>
                  <button 
                    onClick={() => setShowResults(false)}
                    className="text-primary hover:text-primary/80 font-medium flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    Back to Form
                  </button>
                </div>
                
                <div className="text-sm text-foreground/80 p-4 bg-primary/5 rounded-lg mb-6">
                  <p className="font-medium">Based on your inputs:</p>
                  <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2">
                    <div>
                      <span className="font-medium">N:</span> {formData.nitrogen} kg/ha
                    </div>
                    <div>
                      <span className="font-medium">P:</span> {formData.phosphorus} kg/ha
                    </div>
                    <div>
                      <span className="font-medium">K:</span> {formData.potassium} kg/ha
                    </div>
                    <div>
                      <span className="font-medium">pH:</span> {formData.ph}
                    </div>
                    <div>
                      <span className="font-medium">Location:</span> {formData.city}
                    </div>
                    <div>
                      <span className="font-medium">State:</span> {formData.state.replace('-', ' ')}
                    </div>
                    <div>
                      <span className="font-medium">Land:</span> {formData.area} acres
                    </div>
                    <div>
                      <span className="font-medium">Budget:</span> ₹{formData.budget}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {getCropRecommendations().map((crop, index) => (
                    <div key={index} className={`border ${index === 0 ? 'border-primary/30 bg-primary/5' : 'border-foreground/10'} rounded-lg p-4`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-foreground flex items-center">
                            {crop.name}
                            {index === 0 && (
                              <span className="ml-2 text-xs bg-primary text-white px-2 py-0.5 rounded-full">
                                Best Match
                              </span>
                            )}
                          </h3>
                          <div className="mt-1 text-sm font-medium">
                            <span className="text-primary">{crop.confidence}%</span> confidence
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm">
                            <span className="font-medium">Expected Yield:</span> {crop.expectedYield}
                          </div>
                          <div className="text-sm">
                            <span className="font-medium">Profitability:</span> {crop.profitability}
                          </div>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-foreground/80">{crop.details}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <button 
                    onClick={() => window.print()}
                    className="w-full bg-foreground/10 text-foreground font-medium py-3 px-4 rounded-md hover:bg-foreground/20 transition-colors"
                  >
                    Print or Save Results
                  </button>
                </div>
              </div>
            )}

            {!showResults && (
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
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 