import React, { useState } from 'react';
import { StatCard } from '../components/StatCard';
import { ActivityTable } from '../components/ActivityTable';
import { PerformanceGraph } from '../components/PerformanceGraph';
import type { Activity } from '../types';

const stats = [
  { label: 'Total Employees', value: 2731, change: 12, trend: 'increase' as const },
  { label: 'Open Positions', value: 1245, change: 8, trend: 'increase' as const },
  { label: 'Pending Approvals', value: 856, change: 3, trend: 'decrease' as const },
];

const activities: Activity[] = [
  {
    id: '1',
    name: 'John Smith',
    status: 'completed',
    date: 'Aug 15, 2024',
    score: 95,
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    status: 'in-progress',
    date: 'Aug 14, 2024',
    score: 82,
  },
];

const performanceData = {
  weekly: [
    { label: 'Mon', value: 82 },
    { label: 'Tue', value: 78 },
    { label: 'Wed', value: 85 },
    { label: 'Thu', value: 76 },
    { label: 'Fri', value: 89 },
    { label: 'Sat', value: 84 },
    { label: 'Sun', value: 81 },
  ],
  monthly: [
    { label: 'Week 1', value: 85 },
    { label: 'Week 2', value: 79 },
    { label: 'Week 3', value: 88 },
    { label: 'Week 4', value: 83 },
  ],
  quarterly: [
    { label: 'Jan', value: 78 },
    { label: 'Feb', value: 86 },
    { label: 'Mar', value: 82 },
  ],
  yearly: [
    { label: 'Q1', value: 81 },
    { label: 'Q2', value: 76 },
    { label: 'Q3', value: 85 },
    { label: 'Q4', value: 88 },
  ],
};

export function Dashboard() {
  const [timeframe, setTimeframe] = useState<'weekly' | 'monthly' | 'quarterly' | 'yearly'>('weekly');

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Performance Overview</h2>
            <div className="flex space-x-2">
              <button 
                className={`btn-secondary ${timeframe === 'weekly' ? 'active' : ''}`}
                onClick={() => setTimeframe('weekly')}
              >
                Weekly
              </button>
              <button 
                className={`btn-secondary ${timeframe === 'monthly' ? 'active' : ''}`}
                onClick={() => setTimeframe('monthly')}
              >
                Monthly
              </button>
              <button 
                className={`btn-secondary ${timeframe === 'quarterly' ? 'active' : ''}`}
                onClick={() => setTimeframe('quarterly')}
              >
                Quarterly
              </button>
              <button 
                className={`btn-secondary ${timeframe === 'yearly' ? 'active' : ''}`}
                onClick={() => setTimeframe('yearly')}
              >
                Yearly
              </button>
            </div>
          </div>
          
          <div className="h-[350px]">
            <PerformanceGraph data={performanceData[timeframe]} />
          </div>
        </div>
      </div>

      <ActivityTable activities={activities} />
    </>
  );
}