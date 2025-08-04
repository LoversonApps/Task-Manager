import React from 'react';
import { SystemStats as SystemStatsType } from '@/types/process';
import { Progress } from '@/components/ui/progress';
import { Activity, HardDrive, Layers } from 'lucide-react';

interface SystemStatsProps {
  stats: SystemStatsType;
}

const SystemStats: React.FC<SystemStatsProps> = ({ stats }) => {
  const memoryPercentage = (stats.usedMemory / stats.totalMemory) * 100;

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-4 text-white shadow-lg">
      <h2 className="text-lg font-bold mb-4 flex items-center">
        <Activity className="mr-2 h-5 w-5" />
        System Overview
      </h2>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">CPU Usage</span>
            <span className="text-sm">{stats.totalCPU}%</span>
          </div>
          <Progress value={stats.totalCPU} className="h-2" />
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Memory</span>
            <span className="text-sm">{stats.usedMemory}MB / {stats.totalMemory}MB</span>
          </div>
          <Progress value={memoryPercentage} className="h-2" />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex items-center space-x-2">
            <Layers className="h-4 w-4" />
            <div>
              <p className="text-xs opacity-80">Total Processes</p>
              <p className="font-semibold">{stats.totalProcesses}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <HardDrive className="h-4 w-4" />
            <div>
              <p className="text-xs opacity-80">Running</p>
              <p className="font-semibold">{stats.runningProcesses}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemStats;