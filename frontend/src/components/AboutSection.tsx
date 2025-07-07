import React from 'react';
import { Brain, Users, Award, Lightbulb } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            About WebMonitor
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl lg:max-w-3xl mx-auto px-4">
            Powered by advanced AI technology, WebMonitor provides comprehensive website analysis 
            to help you create better user experiences and improve your online presence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
              Why Choose WebMonitor?
            </h3>
            <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Our AI-powered platform combines multiple analysis techniques to give you 
              actionable insights about your website's design, performance, accessibility, 
              and SEO potential.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-lg mt-1 flex-shrink-0">
                  <Brain className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm sm:text-base">AI-Powered Analysis</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Advanced algorithms analyze your website like a human expert would</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-green-100 rounded-lg mt-1 flex-shrink-0">
                  <Lightbulb className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm sm:text-base">Actionable Insights</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Get specific recommendations you can implement immediately</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
            <div className="bg-slate-50 p-4 sm:p-6 rounded-xl text-center">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-2 sm:mb-3" />
              <div className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">10K+</div>
              <div className="text-xs sm:text-sm text-slate-600">Websites Analyzed</div>
            </div>
            <div className="bg-slate-50 p-4 sm:p-6 rounded-xl text-center">
              <Award className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 mx-auto mb-2 sm:mb-3" />
              <div className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">95%</div>
              <div className="text-xs sm:text-sm text-slate-600">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};