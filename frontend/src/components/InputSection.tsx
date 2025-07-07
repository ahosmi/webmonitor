import React from 'react';
import { Upload, Link, FileImage, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface InputSectionProps {
  onAnalyze: (url?: string, file?: File) => void;
}

export const InputSection: React.FC<InputSectionProps> = ({ onAnalyze }) => {
  const [url, setUrl] = React.useState('');
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [dragActive, setDragActive] = React.useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        setSelectedFile(file);
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUrlAnalysis = () => {
    if (!url.trim()) return;
    onAnalyze(url);
  };

  const handleScreenshotAnalysis = () => {
    if (!selectedFile) return;
    onAnalyze(undefined, selectedFile);
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              Analyze Your Website
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              Choose your preferred method to get started with your website analysis
            </p>
          </div>

          <Tabs defaultValue="url" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 sm:mb-8 max-w-md mx-auto">
              <TabsTrigger value="url" className="flex items-center space-x-2 text-xs sm:text-sm">
                <Link className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Analyze URL</span>
                <span className="sm:hidden">URL</span>
              </TabsTrigger>
              <TabsTrigger value="screenshot" className="flex items-center space-x-2 text-xs sm:text-sm">
                <FileImage className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Upload Screenshot</span>
                <span className="sm:hidden">Screenshot</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="url">
              <Card className="max-w-2xl mx-auto">
                <CardHeader className="text-center pb-4 sm:pb-6">
                  <CardTitle className="flex items-center justify-center space-x-2 text-lg sm:text-xl">
                    <Link className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                    <span>Website URL Analysis</span>
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base px-2">
                    Enter your website URL to get comprehensive analysis including performance, SEO, and accessibility
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 px-4 sm:px-6">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Input
                      type="url"
                      placeholder="https://example.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="flex-1 text-sm sm:text-base"
                    />
                    <Button 
                      onClick={handleUrlAnalysis}
                      disabled={!url.trim()}
                      className="bg-blue-600 hover:bg-blue-700 min-w-[120px] sm:min-w-[140px] text-sm sm:text-base"
                    >
                      <span className="hidden sm:inline">Analyze URL</span>
                      <span className="sm:hidden">Analyze</span>
                    </Button>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 text-center px-2">
                    We'll analyze your live website for design, performance, accessibility, and SEO
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="screenshot">
              <Card className="max-w-2xl mx-auto">
                <CardHeader className="text-center pb-4 sm:pb-6">
                  <CardTitle className="flex items-center justify-center space-x-2 text-lg sm:text-xl">
                    <FileImage className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                    <span>Screenshot Analysis</span>
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base px-2">
                    Upload a screenshot of your website to get design and UX feedback
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 px-4 sm:px-6">
                  <div
                    className={`border-2 border-dashed rounded-lg p-6 sm:p-8 text-center transition-colors duration-200 ${
                      dragActive 
                        ? 'border-purple-400 bg-purple-50' 
                        : 'border-slate-300 hover:border-purple-400 hover:bg-slate-50'
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    {selectedFile ? (
                      <div className="space-y-3">
                        <FileImage className="h-10 w-10 sm:h-12 sm:w-12 text-purple-600 mx-auto" />
                        <div>
                          <p className="font-medium text-slate-900 text-sm sm:text-base break-all">{selectedFile.name}</p>
                          <p className="text-xs sm:text-sm text-slate-500">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedFile(null)}
                          className="text-xs sm:text-sm"
                        >
                          Remove
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <Upload className="h-10 w-10 sm:h-12 sm:w-12 text-slate-400 mx-auto" />
                        <div>
                          <p className="text-base sm:text-lg font-medium text-slate-700">
                            Drop your screenshot here
                          </p>
                          <p className="text-sm sm:text-base text-slate-500">or click to browse</p>
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileSelect}
                          className="hidden"
                          id="file-upload"
                        />
                        <label htmlFor="file-upload">
                          <Button variant="outline" className="cursor-pointer text-sm sm:text-base" asChild>
                            <span>Choose File</span>
                          </Button>
                        </label>
                      </div>
                    )}
                  </div>
                  
                  {selectedFile && (
                    <Button 
                      onClick={handleScreenshotAnalysis}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-sm sm:text-base"
                    >
                      <span className="hidden sm:inline">Analyze Screenshot</span>
                      <span className="sm:hidden">Analyze</span>
                    </Button>
                  )}
                  
                  <p className="text-xs sm:text-sm text-slate-500 text-center px-2">
                    Supported formats: PNG, JPG, JPEG. Max file size: 10MB
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};