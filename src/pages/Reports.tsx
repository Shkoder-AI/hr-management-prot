import React from 'react';
import { BarChart2, Download, Filter } from 'lucide-react';

const reports = [
  {
    id: '1',
    name: 'Employee Headcount',
    description: 'Total number of employees by department and location',
    lastGenerated: '2024-03-14',
    type: 'Monthly',
  },
  {
    id: '2',
    name: 'Turnover Rate',
    description: 'Employee turnover statistics and trends',
    lastGenerated: '2024-03-01',
    type: 'Quarterly',
  },
];

export function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Reports</h2>
          <p className="text-sm text-gray-500">Generate and download HR analytics reports</p>
        </div>
        <button className="btn-primary">
          <BarChart2 className="w-5 h-5 mr-2" />
          New Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-purple-100 transition-colors duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{report.name}</h3>
                <p className="text-sm text-gray-500">{report.description}</p>
              </div>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                {report.type}
              </span>
            </div>

            <div className="flex items-center text-sm text-gray-500 mb-6">
              <span>Last generated: {new Date(report.lastGenerated).toLocaleDateString()}</span>
            </div>

            <div className="flex space-x-3">
              <button className="btn-primary flex-1">
                <BarChart2 className="w-4 h-4 mr-2" />
                Generate
              </button>
              <button className="btn-secondary flex-1">
                <Download className="w-4 h-4 mr-2" />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Custom Report</h3>
          <button className="btn-secondary">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
            <select className="w-full rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500">
              <option>Employee Demographics</option>
              <option>Performance Metrics</option>
              <option>Attendance Report</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
            <select className="w-full rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500">
              <option>Last 30 Days</option>
              <option>Last Quarter</option>
              <option>Last Year</option>
              <option>Custom Range</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
            <select className="w-full rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500">
              <option>PDF Report</option>
              <option>Excel Spreadsheet</option>
              <option>CSV Data</option>
            </select>
          </div>
        </div>
        <button className="btn-primary w-full">Generate Custom Report</button>
      </div>
    </div>
  );
}