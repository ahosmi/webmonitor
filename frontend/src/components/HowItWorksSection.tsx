import React from 'react';
import { Upload, Search, Brain, FileText } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Submit Your Website',
      description: 'Provide your website URL or upload a screenshot for analysis',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Search,
      title: 'AI Analysis',
      description: 'Our AI scans your website for design, performance, and accessibility issues',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Brain,
      title: 'Smart Evaluation',
      description: 'Advanced algorithms evaluate UX patterns and best practices',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: FileText,
      title: 'Detailed Report',
      description: 'Receive comprehensive feedback with actionable recommendations',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl lg:max-w-3xl mx-auto px-4">
            Get professional website analysis in four simple steps. Our AI-powered platform 
            makes it easy to understand and improve your web presence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-4 sm:mb-6">
                <div className={`flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 ${step.color} rounded-full mx-auto mb-3 sm:mb-4`}>
                  <step.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 sm:mb-3">{step.title}</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed px-2">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">
              Ready to improve your website?
            </h3>
            <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base px-4">
              Join thousands of developers and designers who trust WebMonitor for their website analysis needs.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500">
              <span>✓ Instant analysis</span>
              <span>✓ Detailed reports</span>
              <span>✓ Actionable insights</span>
              <span>✓ No registration required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};