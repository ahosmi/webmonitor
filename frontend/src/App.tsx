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
  const [analysisResults, setAnalysisResults] = React.useState<any>(null);

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
      let response;

      if (file) {
        const formData = new FormData();
        formData.append('screenshot', file);

        response = await fetch('http://localhost:5000/api/screenshot', {
          method: 'POST',
          body: formData,
        });
      } else if (url) {
        response = await fetch('http://localhost:5000/api/url', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url }),
        });
      } else {
        throw new Error('No input provided');
      }

      if (!response.ok) {
        throw new Error('Failed to fetch from backend');
      }

      const data = await response.json();
      setAnalysisResults(data.feedback || data);
      setShowResults(true);
    } catch (error) {
      console.error(error);
      const newAttemptCount = attemptCount + 1;
      setAttemptCount(newAttemptCount);
      setErrorType('connection');
      setHasError(true);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleRetry = () => {
    setHasError(false);
    setShowResults(false);
  };

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
