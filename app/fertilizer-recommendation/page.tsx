'use client';

import { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function FertilizerRecommendationPage() {
  const [formData, setFormData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    crop: '',
    soilType: '',
    ph: '',
    moisture: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockRecommendations = generateMockRecommendations(formData);
      setRecommendations(mockRecommendations);
      setShowResults(true);
      setIsLoading(false);
    }, 2000);
  };

  const generateMockRecommendations = (data: any) => {
    // This would be replaced with actual AI model predictions
    let primaryRecommendation = "";
    let recommendationDetails = [];
    let applicationTips = [];
    
    // Simple logic to determine fertilizer recommendations
    const n = parseInt(data.nitrogen) || 0;
    const p = parseInt(data.phosphorus) || 0;
    const k = parseInt(data.potassium) || 0;
    
    if (n < 50) {
      primaryRecommendation = "Nitrogen-rich Fertilizer";
      recommendationDetails = [
        "Urea (46-0-0)",
        "Ammonium Nitrate (34-0-0)",
        "Blood Meal (12-0-0)"
      ];
      applicationTips = [
        "Apply in split doses throughout the growing season",
        "Best applied early in the growing season",
        "Apply when soil is moist to reduce nitrogen volatilization"
      ];
    } else if (p < 40) {
      primaryRecommendation = "Phosphorus-rich Fertilizer";
      recommendationDetails = [
        "Triple Superphosphate (0-46-0)",
        "Rock Phosphate (0-32-0)",
        "Bone Meal (4-12-0)"
      ];
      applicationTips = [
        "Apply before planting as phosphorus moves slowly in soil",
        "Mix into the soil near the root zone for best uptake",
        "Most effective in slightly acidic soils (pH 6.0-7.0)"
      ];
    } else if (k < 40) {
      primaryRecommendation = "Potassium-rich Fertilizer";
      recommendationDetails = [
        "Potassium Chloride (0-0-60)",
        "Potassium Sulfate (0-0-50)",
        "Wood Ash (0-2-5)"
      ];
      applicationTips = [
        "Apply throughout the growing season",
        "Particularly important during fruit or seed development",
        "Can be applied as a side dressing around plants"
      ];
    } else {
      primaryRecommendation = "Balanced NPK Fertilizer";
      recommendationDetails = [
        "Balanced NPK (10-10-10)",
        "Organic Compost (~1-1-1)",
        "Complete Plant Food (14-14-14)"
      ];
      applicationTips = [
        "Apply at planting time and then every 4-6 weeks",
        "Water thoroughly after application",
        "Follow package directions for application rates"
      ];
    }
    
    return {
      primaryRecommendation,
      npkRatio: determineNPKRatio(n, p, k),
      recommendedProducts: recommendationDetails,
      applicationTips: applicationTips,
      organicAlternatives: getOrganicAlternatives(primaryRecommendation),
      expectedBenefits: getExpectedBenefits(data.crop)
    };
  };

  const determineNPKRatio = (n: number, p: number, k: number) => {
    if (n < 50 && p >= 40 && k >= 40) return "High N-P-K ratio (3-1-1)";
    if (n >= 50 && p < 40 && k >= 40) return "High P-N-K ratio (1-3-1)";
    if (n >= 50 && p >= 40 && k < 40) return "High K-N-P ratio (1-1-3)";
    if (n < 50 && p < 40) return "High N-P ratio (2-2-1)";
    if (p < 40 && k < 40) return "High P-K ratio (1-2-2)";
    if (n < 50 && k < 40) return "High N-K ratio (2-1-2)";
    return "Balanced N-P-K ratio (1-1-1)";
  };

  const getOrganicAlternatives = (primaryRec: string) => {
    if (primaryRec.includes("Nitrogen")) {
      return ["Compost", "Fish emulsion", "Blood meal", "Green manure crops"];
    } else if (primaryRec.includes("Phosphorus")) {
      return ["Bone meal", "Rock phosphate", "Fish bone meal", "Composted poultry manure"];
    } else if (primaryRec.includes("Potassium")) {
      return ["Wood ash", "Seaweed extract", "Compost", "Greensand"];
    } else {
      return ["Well-aged compost", "Worm castings", "Complete organic fertilizer", "Cover crops"];
    }
  };

  const getExpectedBenefits = (crop: string) => {
    const benefits = [
      "Improved crop yield and quality",
      "Enhanced plant growth and vigor",
      "Increased resistance to pests and diseases",
      "Better nutrient uptake efficiency"
    ];

    switch (crop) {
      case "rice":
        benefits.push("Stronger stems to prevent lodging");
        benefits.push("Improved grain filling");
        break;
      case "wheat":
        benefits.push("Improved protein content in grain");
        benefits.push("Enhanced drought tolerance");
        break;
      case "cotton":
        benefits.push("Improved fiber quality");
        benefits.push("Enhanced boll development");
        break;
      case "sugarcane":
        benefits.push("Increased sugar content");
        benefits.push("Improved ratooning ability");
        break;
      default:
        benefits.push("Customized nutrient supply for optimal growth");
    }

    return benefits;
  };

  const handleReset = () => {
    setFormData({
      nitrogen: '',
      phosphorus: '',
      potassium: '',
      crop: '',
      soilType: '',
      ph: '',
      moisture: ''
    });
    setShowResults(false);
    setRecommendations(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Fertilizer <span className="text-primary">Recommendation</span>
            </h1>
            <p className="text-lg text-center text-foreground/80 mb-8">
              Get personalized fertilizer recommendations based on your soil's nutrient levels and crop requirements.
            </p>

            {!showResults ? (
              <div className="bg-background border border-primary/20 rounded-xl p-6 md:p-8 shadow-sm">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-foreground mb-4">Soil Nutrient Information</h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="nitrogen" className="text-sm font-medium text-foreground/80">
                            Nitrogen (N) mg/kg
                          </label>
                          <input
                            type="number"
                            id="nitrogen"
                            name="nitrogen"
                            value={formData.nitrogen}
                            onChange={handleInputChange}
                            placeholder="e.g. 40"
                            className="w-full border border-foreground/20 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phosphorus" className="text-sm font-medium text-foreground/80">
                            Phosphorus (P) mg/kg
                          </label>
                          <input
                            type="number"
                            id="phosphorus"
                            name="phosphorus"
                            value={formData.phosphorus}
                            onChange={handleInputChange}
                            placeholder="e.g. 35"
                            className="w-full border border-foreground/20 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="potassium" className="text-sm font-medium text-foreground/80">
                            Potassium (K) mg/kg
                          </label>
                          <input
                            type="number"
                            id="potassium"
                            name="potassium"
                            value={formData.potassium}
                            onChange={handleInputChange}
                            placeholder="e.g. 45"
                            className="w-full border border-foreground/20 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-foreground mb-4">Crop & Soil Details</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="crop" className="text-sm font-medium text-foreground/80">
                            Crop Type
                          </label>
                          <select
                            id="crop"
                            name="crop"
                            value={formData.crop}
                            onChange={handleInputChange}
                            className="w-full border border-foreground/20 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            required
                          >
                            <option value="">Select Crop</option>
                            <option value="rice">Rice</option>
                            <option value="wheat">Wheat</option>
                            <option value="maize">Maize</option>
                            <option value="cotton">Cotton</option>
                            <option value="sugarcane">Sugarcane</option>
                            <option value="pulses">Pulses</option>
                            <option value="vegetables">Vegetables</option>
                            <option value="fruits">Fruits</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="soilType" className="text-sm font-medium text-foreground/80">
                            Soil Type
                          </label>
                          <select
                            id="soilType"
                            name="soilType"
                            value={formData.soilType}
                            onChange={handleInputChange}
                            className="w-full border border-foreground/20 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            required
                          >
                            <option value="">Select Soil Type</option>
                            <option value="loamy">Loamy</option>
                            <option value="clay">Clay</option>
                            <option value="sandy">Sandy</option>
                            <option value="silt">Silt</option>
                            <option value="black">Black Cotton Soil</option>
                            <option value="red">Red Soil</option>
                            <option value="alluvial">Alluvial Soil</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="ph" className="text-sm font-medium text-foreground/80">
                            Soil pH
                          </label>
                          <input
                            type="number"
                            id="ph"
                            name="ph"
                            value={formData.ph}
                            onChange={handleInputChange}
                            step="0.1"
                            min="0"
                            max="14"
                            placeholder="e.g. 6.5"
                            className="w-full border border-foreground/20 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="moisture" className="text-sm font-medium text-foreground/80">
                            Soil Moisture (%)
                          </label>
                          <input
                            type="number"
                            id="moisture"
                            name="moisture"
                            value={formData.moisture}
                            onChange={handleInputChange}
                            placeholder="e.g. 40"
                            className="w-full border border-foreground/20 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-primary text-white font-medium py-3 px-4 rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
                        'Get Recommendations'
                      )}
                    </button>
                    <p className="text-xs text-center text-foreground/60">
                      Our AI model analyzes soil nutrient levels and crop requirements to recommend optimal fertilizers.
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-background border border-primary/20 rounded-xl p-6 md:p-8 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Fertilizer Recommendations</h2>
                  <button 
                    onClick={handleReset}
                    className="text-primary hover:text-primary/80 font-medium flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    New Analysis
                  </button>
                </div>
                
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 mb-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{recommendations?.primaryRecommendation}</h3>
                      <p className="text-sm text-foreground/70">{recommendations?.npkRatio}</p>
                    </div>
                    <div className="bg-background rounded-md px-4 py-2 text-sm border border-foreground/10">
                      <p className="font-medium">Soil Nutrient Status:</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-2 py-0.5 bg-primary/20 text-primary rounded text-xs">N: {formData.nitrogen} mg/kg</span>
                        <span className="px-2 py-0.5 bg-primary/20 text-primary rounded text-xs">P: {formData.phosphorus} mg/kg</span>
                        <span className="px-2 py-0.5 bg-primary/20 text-primary rounded text-xs">K: {formData.potassium} mg/kg</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">
                      Recommended Products
                    </h3>
                    <ul className="space-y-2">
                      {recommendations?.recommendedProducts.map((product: string, index: number) => (
                        <li key={index} className="flex items-center p-3 bg-foreground/5 rounded-lg">
                          <span className="bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">{index + 1}</span>
                          <span>{product}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-3">
                      Application Tips
                    </h3>
                    <ul className="space-y-2">
                      {recommendations?.applicationTips.map((tip: string, index: number) => (
                        <li key={index} className="flex items-start p-3 bg-foreground/5 rounded-lg">
                          <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">
                      Organic Alternatives
                    </h3>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <ul className="space-y-1">
                        {recommendations?.organicAlternatives.map((alt: string, index: number) => (
                          <li key={index} className="flex items-center">
                            <svg className="h-5 w-5 text-green-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            {alt}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-green-700 mt-2">Organic alternatives may have lower nutrient concentrations but provide additional soil health benefits.</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-3">
                      Expected Benefits
                    </h3>
                    <ul className="space-y-1 border border-foreground/10 rounded-lg p-4 bg-foreground/5">
                      {recommendations?.expectedBenefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 flex gap-3">
                  <button
                    onClick={() => window.print()} 
                    className="flex-1 bg-foreground/10 text-foreground font-medium py-3 px-4 rounded-md hover:bg-foreground/20 transition-colors"
                  >
                    Print Recommendations
                  </button>
                  <a
                    href="https://krishimitrai.gov.in/fertilizer-guide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary/10 text-primary font-medium py-3 px-4 rounded-md hover:bg-primary/20 transition-colors text-center"
                  >
                    More Information
                  </a>
                </div>
              </div>
            )}

            {!showResults && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-background rounded-lg border border-foreground/10 p-5">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <h3 className="text-lg font-semibold">Input NPK Values</h3>
                    </div>
                    <p className="text-foreground/70 text-sm">Enter your soil's nitrogen, phosphorus, and potassium levels from your soil test report.</p>
                  </div>
                  
                  <div className="bg-background rounded-lg border border-foreground/10 p-5">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <h3 className="text-lg font-semibold">Specify Crop & Soil</h3>
                    </div>
                    <p className="text-foreground/70 text-sm">Select your crop type and provide additional soil characteristics for more accurate recommendations.</p>
                  </div>
                  
                  <div className="bg-background rounded-lg border border-foreground/10 p-5">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <h3 className="text-lg font-semibold">Get Recommendations</h3>
                    </div>
                    <p className="text-foreground/70 text-sm">Receive personalized fertilizer recommendations based on soil needs and crop requirements.</p>
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