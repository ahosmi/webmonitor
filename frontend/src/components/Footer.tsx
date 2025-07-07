import React from 'react';
import { Monitor, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Monitor className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
            <span className="text-lg sm:text-xl font-bold">WebMonitor</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-xs sm:text-sm text-slate-300">
            <span>Built with ❤️ by Ahosmi</span>
            <div className="flex items-center space-x-1">
              <span>Powered by Replicate AI</span>
              <ExternalLink className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
            </div>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-700 text-center text-xs sm:text-sm text-slate-400">
          <p>© 2025 WebMonitor. All rights reserved. Making the web more accessible, one analysis at a time.</p>
        </div>
      </div>
    </footer>
  );
};