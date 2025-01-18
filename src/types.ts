export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  startDate: string;
  status: 'active' | 'inactive';
}

export interface DashboardStat {
  label: string;
  value: number;
  change: number;
  trend: 'increase' | 'decrease';
}

export interface Activity {
  id: string;
  name: string;
  status: 'completed' | 'in-progress' | 'pending';
  date: string;
  score: number;
}