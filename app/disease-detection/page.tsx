import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function DiseaseDetectionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Plant Disease <span className="text-primary">Detection</span>
            </h1>
            <p className="text-lg text-center text-foreground/80 mb-8">
              Upload an image of your crop to quickly identify diseases and get recommended treatments.
            </p>

            <div className="bg-background border border-primary/20 rounded-xl p-6 md:p-8 shadow-sm">
              <form>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold text-foreground">Upload Plant Image</h2>
                    <p className="text-sm text-foreground/70">
                      For best results, take a clear photo of the affected area in natural light.
                    </p>
                  </div>

                  <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors">
                    <input
                      type="file"
                      id="image-upload"
                      className="hidden"
                      accept="image/jpeg, image/png, image/jpg"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 mx-auto text-primary/50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="mt-2 text-foreground">
                        <span className="text-primary font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-foreground/60 mt-1">JPG, PNG or JPEG (max. 10MB)</p>
                    </label>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold">Plant Type (Optional)</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <div className="border rounded-md p-3 flex items-center hover:border-primary cursor-pointer">
                        <input type="radio" id="tomato" name="plant-type" className="mr-2" />
                        <label htmlFor="tomato" className="cursor-pointer">Tomato</label>
                      </div>
                      <div className="border rounded-md p-3 flex items-center hover:border-primary cursor-pointer">
                        <input type="radio" id="potato" name="plant-type" className="mr-2" />
                        <label htmlFor="potato" className="cursor-pointer">Potato</label>
                      </div>
                      <div className="border rounded-md p-3 flex items-center hover:border-primary cursor-pointer">
                        <input type="radio" id="rice" name="plant-type" className="mr-2" />
                        <label htmlFor="rice" className="cursor-pointer">Rice</label>
                      </div>
                      <div className="border rounded-md p-3 flex items-center hover:border-primary cursor-pointer">
                        <input type="radio" id="wheat" name="plant-type" className="mr-2" />
                        <label htmlFor="wheat" className="cursor-pointer">Wheat</label>
                      </div>
                      <div className="border rounded-md p-3 flex items-center hover:border-primary cursor-pointer">
                        <input type="radio" id="cotton" name="plant-type" className="mr-2" />
                        <label htmlFor="cotton" className="cursor-pointer">Cotton</label>
                      </div>
                      <div className="border rounded-md p-3 flex items-center hover:border-primary cursor-pointer">
                        <input type="radio" id="other" name="plant-type" className="mr-2" />
                        <label htmlFor="other" className="cursor-pointer">Other</label>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-medium py-3 px-4 rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Detect Disease
                  </button>
                  <p className="text-xs text-center text-foreground/60">
                    Our AI model can identify up to 38 different plant diseases with 95% accuracy.
                  </p>
                </div>
              </form>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Supported Crops</h2>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Tomato (Early blight, Late blight, Leaf mold)
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Potato (Early blight, Late blight)
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Rice (Brown spot, Leaf blast, Bacterial blight)
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Cotton (Bacterial blight, Leaf curl)
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Wheat (Leaf rust, Powdery mildew)
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    And many more...
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">How It Works</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary/10 rounded-full p-2 mr-3">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Upload</h3>
                      <p className="text-sm text-foreground/80">Take a clear photo of the affected plant parts.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary/10 rounded-full p-2 mr-3">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Analysis</h3>
                      <p className="text-sm text-foreground/80">Our AI model analyzes visual patterns in the image.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary/10 rounded-full p-2 mr-3">
                      <span className="text-primary font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Diagnosis</h3>
                      <p className="text-sm text-foreground/80">Get the disease name and confidence score.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary/10 rounded-full p-2 mr-3">
                      <span className="text-primary font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Treatment</h3>
                      <p className="text-sm text-foreground/80">Receive recommendations for treatment and prevention.</p>
                    </div>
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