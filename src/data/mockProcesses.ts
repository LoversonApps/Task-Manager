import { Process, SystemStats } from '@/types/process';

export const mockProcesses: Process[] = [
  {
    id: '1',
    name: 'Safari',
    icon: '🌐',
    cpu: 15.2,
    memory: 245.8,
    disk: 0.1,
    network: 2.3,
    status: 'running',
    pid: 1234,
    user: 'user'
  },
  {
    id: '2',
    name: 'Messages',
    icon: '💬',
    cpu: 2.1,
    memory: 89.4,
    disk: 0.0,
    network: 0.8,
    status: 'running',
    pid: 2345,
    user: 'user'
  },
  {
    id: '3',
    name: 'Music',
    icon: '🎵',
    cpu: 8.7,
    memory: 156.2,
    disk: 0.3,
    network: 1.2,
    status: 'running',
    pid: 3456,
    user: 'user'
  },
  {
    id: '4',
    name: 'Photos',
    icon: '📸',
    cpu: 0.5,
    memory: 67.1,
    disk: 0.0,
    network: 0.0,
    status: 'sleeping',
    pid: 4567,
    user: 'user'
  },
  {
    id: '5',
    name: 'Camera',
    icon: '📷',
    cpu: 12.3,
    memory: 198.5,
    disk: 0.2,
    network: 0.0,
    status: 'running',
    pid: 5678,
    user: 'user'
  },
  {
    id: '6',
    name: 'Settings',
    icon: '⚙️',
    cpu: 0.1,
    memory: 23.7,
    disk: 0.0,
    network: 0.0,
    status: 'sleeping',
    pid: 6789,
    user: 'user'
  }
];

export const mockSystemStats: SystemStats = {
  totalCPU: 38.9,
  totalMemory: 4096,
  usedMemory: 780.7,
  totalProcesses: 156,
  runningProcesses: 23
};