import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, ExternalLink, Globe, Code, X } from 'lucide-react';

const DeveloperProfile = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const showPopup = isHovered || isClicked;

  // Handle clicking outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsClicked(false);
      }
    };

    if (isClicked) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isClicked]);

  return (
    <div 
      className="fixed bottom-6 right-6 z-50"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Developer Name Label */}
      <div className="absolute bottom-20 right-0 mb-2">
        <div className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full border shadow-sm">
          <span className="text-sm font-medium text-foreground">Sushant</span>
        </div>
      </div>

      {/* Floating Button */}
      <div
        className="relative"
        onClick={() => setIsClicked(!isClicked)}
      >
        <Button
          size="lg"
          className="h-14 w-14 rounded-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-white"
        >
          <Code className="h-6 w-6 text-white" />
        </Button>

        {/* Popup Card */}
        {showPopup && (
          <Card 
            className="absolute bottom-16 right-0 w-64 shadow-xl border-2 border-primary/20 bg-background/95 backdrop-blur-sm animate-in slide-in-from-bottom-2 fade-in-0 duration-300"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <User className="h-5 w-5 text-primary" />
                  Developer Profile
                </CardTitle>
                {isClicked && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 hover:bg-destructive/10"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsClicked(false);
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-muted-foreground">Name:</span>
                  <span className="text-sm font-semibold">Sushant</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-muted-foreground">Reg:</span>
                  <Badge variant="outline" className="text-xs">12218023</Badge>
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-medium text-muted-foreground">Assignment Topic:</span>
                  <p className="text-sm font-semibold text-primary">SageMaker</p>
                </div>
              </div>
              
              <div className="pt-2 border-t">
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open('https://sushant.enally.in/', '_blank');
                  }}
                >
                  <Globe className="h-4 w-4 mr-2" />
                  Visit Portfolio
                  <ExternalLink className="h-3 w-3 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default DeveloperProfile;
