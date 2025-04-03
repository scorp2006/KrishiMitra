'use client';

import { useState, useRef } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function DiseaseDetectionPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [plantType, setPlantType] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [results, setResults] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      setSelectedFile(file);
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result as string);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files?.[0] || null;
    if (file) {
      setSelectedFile(file);
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result as string);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handlePlantTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlantType(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    
    // Mock API call
    setTimeout(() => {
      // This would normally be determined by an AI model
      const mockResults = {
        disease: "Late Blight",
        confidence: 94.8,
        description: "Late blight is caused by the fungus-like oomycete pathogen Phytophthora infestans. It primarily affects leaves, stems, and tubers of potato and tomato plants.",
        symptoms: [
          "Water-soaked light to dark green spots on leaves",
          "White fuzzy growth on the underside of leaves",
          "Dark brown lesions on stems",
          "Rapid wilting and death of foliage"
        ],
        treatment: [
          "Remove and destroy all infected plant parts",
          "Apply copper-based fungicide as a preventative measure",
          "Ensure proper spacing between plants for good air circulation",
          "Water at the base of plants instead of overhead to keep foliage dry"
        ],
        prevention: [
          "Use certified disease-free seed or resistant varieties",
          "Practice crop rotation (don't plant tomatoes or potatoes in the same location for 3-4 years)",
          "Keep the garden clean of plant debris",
          "Apply preventative fungicides during humid weather"
        ]
      };
      
      setResults(mockResults);
      setIsAnalyzing(false);
    }, 2500);
  };

  const resetForm = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setPlantType('');
    setResults(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

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

            {!results ? (
              <div className="bg-background border border-primary/20 rounded-xl p-6 md:p-8 shadow-sm">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-xl font-bold text-foreground">Upload Plant Image</h2>
                      <p className="text-sm text-foreground/70">
                        For best results, take a clear photo of the affected area in natural light.
                      </p>
                    </div>

                    <div 
                      className={`border-2 border-dashed ${previewUrl ? 'border-primary/50' : 'border-primary/30'} rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors`}
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        id="image-upload"
                        className="hidden"
                        accept="image/jpeg, image/png, image/jpg"
                        onChange={handleFileChange}
                      />
                      {previewUrl ? (
                        <div className="relative mx-auto w-full max-w-md">
                          <Image 
                            src={previewUrl} 
                            alt="Plant preview" 
                            width={400} 
                            height={300}
                            className="mx-auto rounded-md max-h-64 w-auto object-contain"
                          />
                          <button 
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedFile(null);
                              setPreviewUrl(null);
                              if (fileInputRef.current) {
                                fileInputRef.current.value = '';
                              }
                            }}
                            className="absolute top-2 right-2 bg-background/80 rounded-full p-1 hover:bg-background"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <>
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
                        </>
                      )}
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold">Plant Type (Optional)</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <div className={`border rounded-md p-3 flex items-center hover:border-primary cursor-pointer ${plantType === 'tomato' ? 'border-primary bg-primary/5' : ''}`}>
                          <input 
                            type="radio" 
                            id="tomato" 
                            name="plant-type" 
                            value="tomato" 
                            checked={plantType === 'tomato'} 
                            onChange={handlePlantTypeChange} 
                            className="mr-2" 
                          />
                          <label htmlFor="tomato" className="cursor-pointer">Tomato</label>
                        </div>
                        <div className={`border rounded-md p-3 flex items-center hover:border-primary cursor-pointer ${plantType === 'potato' ? 'border-primary bg-primary/5' : ''}`}>
                          <input 
                            type="radio" 
                            id="potato" 
                            name="plant-type" 
                            value="potato" 
                            checked={plantType === 'potato'} 
                            onChange={handlePlantTypeChange} 
                            className="mr-2" 
                          />
                          <label htmlFor="potato" className="cursor-pointer">Potato</label>
                        </div>
                        <div className={`border rounded-md p-3 flex items-center hover:border-primary cursor-pointer ${plantType === 'rice' ? 'border-primary bg-primary/5' : ''}`}>
                          <input 
                            type="radio" 
                            id="rice" 
                            name="plant-type" 
                            value="rice" 
                            checked={plantType === 'rice'} 
                            onChange={handlePlantTypeChange} 
                            className="mr-2" 
                          />
                          <label htmlFor="rice" className="cursor-pointer">Rice</label>
                        </div>
                        <div className={`border rounded-md p-3 flex items-center hover:border-primary cursor-pointer ${plantType === 'wheat' ? 'border-primary bg-primary/5' : ''}`}>
                          <input 
                            type="radio" 
                            id="wheat" 
                            name="plant-type" 
                            value="wheat" 
                            checked={plantType === 'wheat'} 
                            onChange={handlePlantTypeChange} 
                            className="mr-2" 
                          />
                          <label htmlFor="wheat" className="cursor-pointer">Wheat</label>
                        </div>
                        <div className={`border rounded-md p-3 flex items-center hover:border-primary cursor-pointer ${plantType === 'cotton' ? 'border-primary bg-primary/5' : ''}`}>
                          <input 
                            type="radio" 
                            id="cotton" 
                            name="plant-type" 
                            value="cotton" 
                            checked={plantType === 'cotton'} 
                            onChange={handlePlantTypeChange} 
                            className="mr-2" 
                          />
                          <label htmlFor="cotton" className="cursor-pointer">Cotton</label>
                        </div>
                        <div className={`border rounded-md p-3 flex items-center hover:border-primary cursor-pointer ${plantType === 'other' ? 'border-primary bg-primary/5' : ''}`}>
                          <input 
                            type="radio" 
                            id="other" 
                            name="plant-type" 
                            value="other" 
                            checked={plantType === 'other'} 
                            onChange={handlePlantTypeChange} 
                            className="mr-2" 
                          />
                          <label htmlFor="other" className="cursor-pointer">Other</label>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={!selectedFile || isAnalyzing}
                      className="w-full bg-primary text-white font-medium py-3 px-4 rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isAnalyzing ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Analyzing Image...
                        </span>
                      ) : (
                        'Detect Disease'
                      )}
                    </button>
                    <p className="text-xs text-center text-foreground/60">
                      Our AI model can identify up to 38 different plant diseases with 95% accuracy.
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-background border border-primary/20 rounded-xl p-6 md:p-8 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Disease Detection Results</h2>
                  <button 
                    onClick={resetForm}
                    className="text-primary hover:text-primary/80 font-medium flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    Analyze Another Image
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    {previewUrl && (
                      <div className="mb-4">
                        <p className="text-sm font-medium text-foreground/70 mb-2">Analyzed Image:</p>
                        <Image 
                          src={previewUrl} 
                          alt="Analyzed plant" 
                          width={400} 
                          height={300}
                          className="rounded-md w-full object-contain border border-foreground/10"
                        />
                      </div>
                    )}
                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-xl font-bold">Detected: {results.disease}</h3>
                          <p className="text-sm font-medium">
                            <span className="text-primary">{results.confidence}%</span> confidence
                          </p>
                        </div>
                        <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                          {plantType || 'Plant'} Disease
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-foreground/80">{results.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Common Symptoms
                      </h3>
                      <ul className="space-y-1 text-sm text-foreground/80">
                        {results.symptoms.map((symptom: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      Treatment
                    </h3>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      {results.treatment.map((step: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="bg-primary/10 text-primary rounded-full h-5 w-5 flex items-center justify-center text-xs font-medium mr-2 flex-shrink-0 mt-0.5">{index + 1}</span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Prevention
                    </h3>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      {results.prevention.map((tip: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="bg-primary/10 text-primary rounded-full h-5 w-5 flex items-center justify-center text-xs font-medium mr-2 flex-shrink-0 mt-0.5">{index + 1}</span>
                          {tip}
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
                    Print Results
                  </button>
                  <a
                    href="https://krishimitrai.gov.in/disease-management"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary/10 text-primary font-medium py-3 px-4 rounded-md hover:bg-primary/20 transition-colors text-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            )}

            {!results && (
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
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 