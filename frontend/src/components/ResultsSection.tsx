import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ResultsSectionProps {
  isLoading?: boolean;
  results?: any;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ isLoading = false, results }) => {
  if (isLoading) {
    return (
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <Skeleton className="h-6 sm:h-8 w-48 sm:w-64 mx-auto mb-3 sm:mb-4" />
            <Skeleton className="h-4 w-72 sm:w-96 mx-auto" />
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-200">
              <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-b-2 border-blue-600 mx-auto mb-6"></div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">
                Analyzing Your Website...
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mb-6">
                Our AI is examining your website's design, performance, accessibility, and SEO. 
                This may take a few moments.
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2 text-sm text-slate-500">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  <span>Scanning design elements...</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-slate-500">
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse animation-delay-200"></div>
                  <span>Checking accessibility...</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-slate-500">
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse animation-delay-400"></div>
                  <span>Evaluating performance...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!results) return null;

  return (
    <section id="results" className="py-16 sm:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            Analysis Results
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            Here's what we found about your website's performance and areas for improvement.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">AI Analysis Summary</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Results generated using Replicate’s LLaVA-13B model.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="text-base text-slate-800 leading-relaxed">
                <pre className="text-sm text-slate-800 whitespace-pre-wrap">
                  {typeof results === 'string'
                    ? results
                    : typeof results === 'object'
                    ? JSON.stringify(results, null, 2)
                    : 'No feedback received.'}
                </pre>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
