import { useState } from 'react';
import { Crown, Upload, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useEnhancedTheme } from '@/contexts/ThemeContext';
import { defaultThemes } from '@/types/theme';
import { useToast } from '@/hooks/use-toast';

export function PremiumThemeSelector() {
  const { isPremium, unlockPremium, customTheme, setCustomTheme, customBackgroundImage, setCustomBackgroundImage } = useEnhancedTheme();
  const { toast } = useToast();
  const [isUploading, setIsUploading] = useState(false);

  const handlePremiumUnlock = () => {
    // Simulate payment process
    setTimeout(() => {
      unlockPremium();
      toast({
        title: "Premium Unlocked!",
        description: "You now have access to custom themes and backgrounds.",
      });
    }, 1000);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setCustomBackgroundImage(result);
        setIsUploading(false);
        toast({
          title: "Background Updated",
          description: "Your custom background has been applied.",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isPremium) {
    return (
      <Card className="bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border-white/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-yellow-500" />
            Premium Themes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Unlock custom themes and background images for just $0.99
          </p>
          <Button onClick={handlePremiumUnlock} className="w-full">
            <Crown className="mr-2 h-4 w-4" />
            Unlock Premium - $0.99
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border-white/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Palette className="h-5 w-5" />
          Premium Themes
          <Badge variant="secondary">Premium</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2">Custom Background</h4>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => document.getElementById('bg-upload')?.click()}
              disabled={isUploading}
            >
              <Upload className="mr-2 h-4 w-4" />
              {isUploading ? 'Uploading...' : 'Upload Image'}
            </Button>
            {customBackgroundImage && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCustomBackgroundImage(null)}
              >
                Remove
              </Button>
            )}
          </div>
          <input
            id="bg-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Color Themes</h4>
          <div className="grid grid-cols-1 gap-2">
            {defaultThemes.map((theme) => (
              <Button
                key={theme.id}
                variant={customTheme?.id === theme.id ? "default" : "outline"}
                size="sm"
                onClick={() => setCustomTheme(theme)}
                className="justify-start"
              >
                <div
                  className="w-4 h-4 rounded-full mr-2"
                  style={{ backgroundColor: theme.primaryColor }}
                />
                {theme.name}
              </Button>
            ))}
            {customTheme && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCustomTheme(null)}
              >
                Reset to Default
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}