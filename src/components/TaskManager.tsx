import React, { useState, useEffect } from 'react';
import { Process, SystemStats as SystemStatsType } from '@/types/process';
import { mockProcesses, mockSystemStats } from '@/data/mockProcesses';
import ProcessItem from './ProcessItem';
import SystemStats from './SystemStats';
import Disclaimer from './Disclaimer';
import { ThemeToggle } from './ThemeToggle';
import { PremiumThemeSelector } from './PremiumThemeSelector';
import { Button } from '@/components/ui/button';
import { RefreshCw, Search, Settings } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useEnhancedTheme } from '@/contexts/ThemeContext';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
const TaskManager: React.FC = () => {
  const [processes, setProcesses] = useState<Process[]>(mockProcesses);
  const [stats, setStats] = useState<SystemStatsType>(mockSystemStats);
  const [searchTerm, setSearchTerm] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { toast } = useToast();
  const { customBackgroundImage } = useEnhancedTheme();

  const filteredProcesses = processes.filter(process =>
    process.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleKillProcess = (id: string) => {
    const process = processes.find(p => p.id === id);
    if (process) {
      setProcesses(prev => prev.filter(p => p.id !== id));
      toast({
        title: "Process Terminated",
        description: `${process.name} has been terminated successfully.`,
        variant: "destructive",
      });
      
      // Update stats
      setStats(prev => ({
        ...prev,
        totalProcesses: prev.totalProcesses - 1,
        runningProcesses: process.status === 'running' ? prev.runningProcesses - 1 : prev.runningProcesses,
        totalCPU: Math.max(0, prev.totalCPU - process.cpu),
        usedMemory: Math.max(0, prev.usedMemory - process.memory)
      }));
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      // Simulate data refresh with slight variations
      const refreshedProcesses = processes.map(process => ({
        ...process,
        cpu: Math.max(0, process.cpu + (Math.random() - 0.5) * 5),
        memory: Math.max(0, process.memory + (Math.random() - 0.5) * 20),
        network: Math.max(0, process.network + (Math.random() - 0.5) * 1)
      }));
      setProcesses(refreshedProcesses);
      setIsRefreshing(false);
    }, 1000);
  };

  const backgroundStyle = customBackgroundImage 
    ? { 
        backgroundImage: `url(${customBackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    : {};

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 transition-colors duration-300"
      style={backgroundStyle}
    >
      <div className="max-w-md mx-auto space-y-4">
        {/* Header with Theme Controls */}
        <div className="flex justify-between items-center py-4">
          <div className="text-center flex-1">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Task Manager
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Monitor & Control Processes</p>
          </div>
          <div className="flex gap-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                  <Settings className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md">
                <SheetHeader>
                  <SheetTitle>Theme Settings</SheetTitle>
                  <SheetDescription>
                    Customize your Task Manager appearance
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                  <PremiumThemeSelector />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Disclaimer */}
        <Disclaimer />

        {/* System Stats */}
        <SystemStats stats={stats} />

        {/* Controls */}
        <div className="flex space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search processes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-white/20 dark:border-gray-700/20"
            />
          </div>
          <Button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
          >
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          </Button>
        </div>

        {/* Process List */}
        <div className="space-y-3">
          {filteredProcesses.length === 0 ? (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              No processes found
            </div>
          ) : (
            filteredProcesses.map(process => (
              <ProcessItem
                key={process.id}
                process={process}
                onKill={handleKillProcess}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskManager;