import React from 'react';
import { ArrowRight, Zap, Shield, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section id="home" className="pt-16 pb-16 sm:pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          {/* Main Content */}
          <div className="mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
              <span className="text-blue-600">WebMonitor</span>
              <br />
              <span className="text-slate-700">Smart Website Auditor</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
              Get instant AI-powered feedback on your website's design, UX, performance, and accessibility. 
              Transform your web presence with actionable insights.
            </p>
            <Button 
              onClick={onGetStarted}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              Start Analysis
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto px-4">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg mb-3 sm:mb-4 mx-auto">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Performance</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Analyze loading speed, optimization, and technical performance metrics.</p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg mb-3 sm:mb-4 mx-auto">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Accessibility</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Ensure your website is accessible to all users with comprehensive checks.</p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg mb-3 sm:mb-4 mx-auto">
                <Target className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">UX & Design</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Get expert feedback on user experience and visual design elements.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};