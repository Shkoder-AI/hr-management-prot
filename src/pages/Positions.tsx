import React from 'react';
import { Search, Filter, Plus } from 'lucide-react';

const positions = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    openings: 3,
    applicants: 45,
  },
  {
    id: '2',
    title: 'Product Marketing Manager',
    department: 'Marketing',
    location: 'New York, NY',
    type: 'Full-time',
    openings: 1,
    applicants: 28,
  },
];

export function Positions() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Open Positions</h2>
          <p className="text-sm text-gray-500">Manage job openings and recruitment</p>
        </div>
        <button className="btn-primary">
          <Plus className="w-5 h-5 mr-2" />
          Add Position
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search positions..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
              />
            </div>
            <button className="btn-secondary">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
          {positions.map((position) => (
            <div
              key={position.id}
              className="p-6 rounded-xl border border-gray-100 hover:border-purple-100 transition-colors duration-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{position.title}</h3>
                  <p className="text-sm text-gray-500">{position.department}</p>
                </div>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                  {position.type}
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-24">Location:</span>
                  <span className="font-medium text-gray-900">{position.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-24">Openings:</span>
                  <span className="font-medium text-gray-900">{position.openings}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-24">Applicants:</span>
                  <span className="font-medium text-gray-900">{position.applicants}</span>
                </div>
              </div>
              <div className="mt-6 flex space-x-3">
                <button className="btn-primary flex-1">View Details</button>
                <button className="btn-secondary flex-1">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}