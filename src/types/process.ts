export interface Process {
  id: string;
  name: string;
  icon: string;
  cpu: number;
  memory: number;
  disk: number;
  network: number;
  status: 'running' | 'sleeping' | 'stopped';
  pid: number;
  user: string;
}

export interface SystemStats {
  totalCPU: number;
  totalMemory: number;
  usedMemory: number;
  totalProcesses: number;
  runningProcesses: number;
}