import React from 'react';
import { Search, Plus, MapPin } from 'lucide-react';

const branches = [
  {
    id: '1',
    name: 'San Francisco HQ',
    address: '123 Market Street, San Francisco, CA 94105',
    employees: 450,
    departments: ['Engineering', 'Product', 'Marketing', 'Sales'],
    status: 'active',
  },
  {
    id: '2',
    name: 'New York Office',
    address: '456 Madison Avenue, New York, NY 10022',
    employees: 280,
    departments: ['Sales', 'Marketing', 'Customer Support'],
    status: 'active',
  },
];

export function Branches() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Branches</h2>
          <p className="text-sm text-gray-500">Manage your organization's locations</p>
        </div>
        <button className="btn-primary">
          <Plus className="w-5 h-5 mr-2" />
          Add Branch
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {branches.map((branch) => (
          <div
            key={branch.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-purple-100 transition-colors duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{branch.name}</h3>
                  <p className="text-sm text-gray-500">{branch.address}</p>
                </div>
              </div>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-50 text-green-700 border border-green-200">
                {branch.status}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium text-gray-500 mb-2">Departments</div>
                <div className="flex flex-wrap gap-2">
                  {branch.departments.map((dept) => (
                    <span
                      key={dept}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-purple-50 text-purple-700 border border-purple-200"
                    >
                      {dept}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-sm font-medium text-gray-500 mb-2">Employee Count</div>
                <div className="text-2xl font-bold text-gray-900">{branch.employees}</div>
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
  );
}