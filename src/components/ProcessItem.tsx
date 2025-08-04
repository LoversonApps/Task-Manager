import React from 'react';
import { Process } from '@/types/process';
import { Button } from '@/components/ui/button';
import { X, Activity, HardDrive, Wifi } from 'lucide-react';

interface ProcessItemProps {
  process: Process;
  onKill: (id: string) => void;
}

const ProcessItem: React.FC<ProcessItemProps> = ({ process, onKill }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'text-green-500';
      case 'sleeping': return 'text-yellow-500';
      case 'stopped': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{process.icon}</span>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">{process.name}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">PID: {process.pid}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`text-xs font-medium ${getStatusColor(process.status)}`}>
            {process.status}
          </span>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => onKill(process.id)}
            className="h-8 w-8 p-0 bg-red-500 hover:bg-red-600"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="flex items-center space-x-1">
          <Activity className="h-3 w-3 text-blue-500" />
          <span className="text-gray-600 dark:text-gray-400">CPU: {process.cpu}%</span>
        </div>
        <div className="flex items-center space-x-1">
          <HardDrive className="h-3 w-3 text-purple-500" />
          <span className="text-gray-600 dark:text-gray-400">RAM: {process.memory}MB</span>
        </div>
        <div className="flex items-center space-x-1">
          <HardDrive className="h-3 w-3 text-orange-500" />
          <span className="text-gray-600 dark:text-gray-400">Disk: {process.disk}MB/s</span>
        </div>
        <div className="flex items-center space-x-1">
          <Wifi className="h-3 w-3 text-green-500" />
          <span className="text-gray-600 dark:text-gray-400">Net: {process.network}MB/s</span>
        </div>
      </div>
    </div>
  );
};

export default ProcessItem;