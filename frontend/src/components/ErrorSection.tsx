import React from 'react';
import { AlertTriangle, Wifi, RefreshCw, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ErrorSectionProps {
  errorType: 'repair' | 'connection';
  attemptCount: number;
  onRetry: () => void;
}

export const ErrorSection: React.FC<ErrorSectionProps> = ({ 
  errorType, 
  attemptCount, 
  onRetry 
}) => {
  const isRepairError = errorType === 'repair';
  const isConnectionError = errorType === 'connection';

  return (
    <section id="error" className="py-16 sm:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <CardHeader className="pb-4 sm:pb-6">
              <div className="flex justify-center mb-4">
                {isRepairError ? (
                  <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full">
                    <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full">
                    <Wifi className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
                  </div>
                )}
              </div>
              
              <CardTitle className="text-xl sm:text-2xl text-slate-900 mb-2 px-4">
                {isRepairError ? 'AI Service Under Maintenance' : 'Unable to Connect'}
              </CardTitle>
              
              <CardDescription className="text-base sm:text-lg px-4">
                {isRepairError ? (
                  <>
                    Our AI analysis service is currently undergoing maintenance. 
                    Please try again in a few moments.
                  </>
                ) : (
                  <>
                    We're unable to connect to our AI service right now. 
                    Please check your connection and try again later.
                  </>
                )}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
              <div className="bg-slate-50 p-3 sm:p-4 rounded-lg">
                <div className="flex items-center justify-center space-x-2 text-sm text-slate-600 mb-2">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Attempt {attemptCount} of 5</span>
                </div>
                
                {isRepairError ? (
                  <p className="text-xs sm:text-sm text-slate-600">
                    We're working to restore full functionality. Thank you for your patience.
                  </p>
                ) : (
                  <p className="text-xs sm:text-sm text-slate-600">
                    Multiple connection attempts have failed. Our team has been notified.
                  </p>
                )}
              </div>
              
              {isRepairError ? (
                <Button 
                  onClick={onRetry}
                  className="bg-orange-600 hover:bg-orange-700 text-white text-sm sm:text-base"
                >
                  <RefreshCw className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Try Again
                </Button>
              ) : (
                <div className="space-y-3">
                  <Button 
                    onClick={onRetry}
                    variant="outline"
                    className="border-red-200 text-red-700 hover:bg-red-50 text-sm sm:text-base"
                  >
                    <RefreshCw className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Retry Connection
                  </Button>
                  <p className="text-xs text-slate-500">
                    If the problem persists, please contact support
                  </p>
                </div>
              )}
              
              <div className="pt-3 sm:pt-4 border-t border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">What you can do:</h4>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-1 text-left max-w-md mx-auto">
                  <li>• Check your internet connection</li>
                  <li>• Wait a few minutes and try again</li>
                  <li>• Try analyzing a different website</li>
                  {isConnectionError && <li>• Contact our support team if issues persist</li>}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};