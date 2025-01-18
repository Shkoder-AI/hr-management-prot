import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import type { DashboardStat } from '../types';

export function StatCard({ label, value, change, trend }: DashboardStat) {
  return (
    <div className="stat-card group">
      <div className="absolute -right-8 -top-8 w-24 h-24 bg-purple-50/50 rounded-full transition-transform duration-300 group-hover:scale-150" />
      <div className="relative">
        <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
        <div className="flex items-end justify-between">
          <h3 className="text-3xl font-bold tracking-tight">{value.toLocaleString()}</h3>
          <div 
            className={`flex items-center px-2.5 py-1 rounded-full text-sm font-medium ${
              trend === 'increase' 
                ? 'text-green-700 bg-green-50' 
                : 'text-red-700 bg-red-50'
            }`}
          >
            {trend === 'increase' ? (
              <ArrowUpRight className="w-4 h-4 mr-1" />
            ) : (
              <ArrowDownRight className="w-4 h-4 mr-1" />
            )}
            <span>{Math.abs(change)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}