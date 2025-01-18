import React from 'react';
import { Bell, UserPlus2 } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Employees } from './pages/Employees';
import { Positions } from './pages/Positions';
import { Branches } from './pages/Branches';
import { Qualifications } from './pages/Qualifications';
import { Timecards } from './pages/Timecards';
import { Approvals } from './pages/Approvals';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';

function App() {
  // Simple client-side routing
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Dashboard />;
      case '/employees':
        return <Employees />;
      case '/positions':
        return <Positions />;
      case '/branches':
        return <Branches />;
      case '/qualifications':
        return <Qualifications />;
      case '/timecards':
        return <Timecards />;
      case '/approvals':
        return <Approvals />;
      case '/reports':
        return <Reports />;
      case '/settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Sidebar currentPath={currentPath} />
      <div className="ml-64 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, Alessandro</h1>
            <p className="text-gray-500 mt-1">Here's what's happening in your HR dashboard today.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-400 hover:text-gray-600 rounded-xl hover:bg-gray-100">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button className="btn-primary">
              <UserPlus2 className="w-5 h-5 mr-2" />
              New Hire
            </button>
          </div>
        </div>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;