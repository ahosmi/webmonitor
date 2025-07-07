import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { InputSection } from '@/components/InputSection';
import { ResultsSection } from '@/components/ResultsSection';
import { ErrorSection } from '@/components/ErrorSection';
import { Footer } from '@/components/Footer';

function App() {
  const [activeSection, setActiveSection] = React.useState('home');
  const [showResults, setShowResults] = React.useState(false);
  const [isAnalyzing, setIsAnalyzing] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const [errorType, setErrorType] = React.useState<'repair' | 'connection'>('connection');
  const [attemptCount, setAttemptCount] = React.useState(0);
  const [analysisResults, setAnalysisResults] = React.useState(null);

  const handleGetStarted = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAnalyze = async (url?: string, file?: File) => {
    setIsAnalyzing(true);
    setShowResults(false);
    setHasError(false);
    setAnalysisResults(null);
    
    try {
      // Since there's no backend yet, we'll immediately show the connection error
      // This simulates the inability to connect to Replicate API
      throw new Error('No backend API available');
      
    } catch (error) {
      const newAttemptCount = attemptCount + 1;
      setAttemptCount(newAttemptCount);
      
      // Show connection error since we can't reach the API
      setErrorType('connection');
      setHasError(true);
      setIsAnalyzing(false);
    }
  };

  const handleRetry = () => {
    setHasError(false);
    handleAnalyze();
  };

  // Handle scroll to update active section
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'how-it-works', 'input-section'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} onNavigate={setActiveSection} />
      <Hero onGetStarted={handleGetStarted} />
      <AboutSection />
      <HowItWorksSection />
      
      <div id="input-section">
        <InputSection onAnalyze={handleAnalyze} />
      </div>
      
      {isAnalyzing && !hasError && (
        <ResultsSection isLoading={isAnalyzing} />
      )}
      
      {showResults && analysisResults && !hasError && (
        <ResultsSection results={analysisResults} />
      )}
      
      {hasError && (
        <ErrorSection 
          errorType={errorType} 
          attemptCount={attemptCount}
          onRetry={handleRetry}
        />
      )}
      
      <Footer />
    </div>
  );
}

export default App;