import { LayoutGrid } from 'lucide-react';
import { AreaChart } from './components/charts/AreaChart';
import { BarChart } from './components/charts/BarChart';
import { Stats } from './components/Stats';
import { monthlyRevenue, stats, userActivity } from './data/mockData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <LayoutGrid className="h-6 w-6 text-blue-600" />
          <h1 className="ml-2 text-xl font-semibold">DataLekkers Dashboard</h1>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Stats stats={stats} />
        
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <AreaChart data={monthlyRevenue} title="Monthly Revenue" />
          <BarChart data={userActivity} title="Weekly User Activity" />
        </div>
      </main>
    </div>
  );
}

export default App;