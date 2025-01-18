import React from 'react';
import { Search, Filter, CheckCircle, XCircle } from 'lucide-react';

const approvals = [
  {
    id: '1',
    employee: 'Davide Rossi',
    type: 'Leave Request',
    requestDate: '2024-03-14',
    details: 'Vacation: March 20-24',
    status: 'pending',
  },
  {
    id: '2',
    employee: 'Sofia Conti',
    type: 'Overtime',
    requestDate: '2024-03-13',
    details: '4 hours on March 15',
    status: 'pending',
  },
];

const statusStyles = {
  pending: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  approved: 'bg-green-50 text-green-700 border-green-200',
  rejected: 'bg-red-50 text-red-700 border-red-200',
};

export function Approvals() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Pending Approvals</h2>
          <p className="text-sm text-gray-500">Review and manage employee requests</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search requests..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
              />
            </div>
            <button className="btn-secondary">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </button>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {approvals.map((approval) => (
            <div key={approval.id} className="p-6 hover:bg-gray-50/50 transition-colors duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-medium">
                    {approval.employee.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{approval.employee}</h3>
                    <p className="text-sm text-gray-500">{approval.type}</p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full border ${
                    statusStyles[approval.status as keyof typeof statusStyles]
                  }`}
                >
                  {approval.status}
                </span>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Request Date: {new Date(approval.requestDate).toLocaleDateString()}</p>
                  <p className="text-sm font-medium text-gray-900 mt-1">{approval.details}</p>
                </div>
                <div className="flex space-x-3">
                  <button className="btn-secondary text-green-600 hover:bg-green-50">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Approve
                  </button>
                  <button className="btn-secondary text-red-600 hover:bg-red-50">
                    <XCircle className="w-4 h-4 mr-2" />
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}