import React from 'react';
import { Search, Plus, GraduationCap, Award } from 'lucide-react';

const qualifications = [
  {
    id: '1',
    name: 'Project Management Professional (PMP)',
    provider: 'Project Management Institute',
    type: 'Certification',
    validityPeriod: '3 years',
    employees: 45,
  },
  {
    id: '2',
    name: 'AWS Solutions Architect',
    provider: 'Amazon Web Services',
    type: 'Certification',
    validityPeriod: '2 years',
    employees: 28,
  },
];

export function Qualifications() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Qualifications</h2>
          <p className="text-sm text-gray-500">Track certifications and professional development</p>
        </div>
        <button className="btn-primary">
          <Plus className="w-5 h-5 mr-2" />
          Add Qualification
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {qualifications.map((qual) => (
          <div
            key={qual.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-purple-100 transition-colors duration-200"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{qual.name}</h3>
                <p className="text-sm text-gray-500">{qual.provider}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Type</span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                  {qual.type}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Validity Period</span>
                <span className="text-sm font-medium text-gray-900">{qual.validityPeriod}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Certified Employees</span>
                <span className="text-sm font-medium text-gray-900">{qual.employees}</span>
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