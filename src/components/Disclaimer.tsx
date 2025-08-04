import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Disclaimer: React.FC = () => {
  return (
    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/30 rounded-lg p-3 mb-4">
      <div className="flex items-start space-x-2">
        <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
        <div className="text-xs text-amber-800 dark:text-amber-200">
          <p className="font-medium mb-1">Demo App Notice</p>
          <p>This is a simulation of a task manager. Web browsers cannot access real system processes or kill them for security reasons. All data shown is mock data for demonstration purposes.</p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;