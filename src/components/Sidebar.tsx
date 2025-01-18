import React from 'react';
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Building2,
  GraduationCap,
  Clock,
  CheckSquare,
  BarChart2,
  Settings,
  LogOut,
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'Employees', path: '/employees' },
  { icon: Briefcase, label: 'Positions', path: '/positions' },
  { icon: Building2, label: 'Branches', path: '/branches' },
  { icon: GraduationCap, label: 'Qualifications', path: '/qualifications' },
  { icon: Clock, label: 'Timecards', path: '/timecards' },
  { icon: CheckSquare, label: 'Approvals', path: '/approvals' },
  { icon: BarChart2, label: 'Reports', path: '/reports' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export function Sidebar({ currentPath }: { currentPath: string }) {
  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="w-64 bg-white border-r border-gray-100 h-screen fixed left-0 top-0 flex flex-col">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
            HR Dashboard
          </h1>
        </div>
      </div>

      <nav className="flex-1 py-6 overflow-y-auto">
        <div className="space-y-1 px-3">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`nav-link w-full text-left ${item.path === currentPath ? 'active' : ''}`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center space-x-3 px-3 py-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-medium">
            AM
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-700 truncate">Alessandro Moretti</p>
            <p className="text-xs text-gray-500 truncate">HR Manager</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}