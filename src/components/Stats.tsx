import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import { Card } from './ui/Card';

interface Stat {
  title: string;
  value: string;
  change: number;
  changeLabel: string;
}

interface StatsProps {
  stats: Stat[];
}

export function Stats({ stats }: StatsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
          <div className="mt-2 flex items-baseline justify-between">
            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            <div
              className={`flex items-center text-sm ${
                stat.change >= 0 ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {stat.change >= 0 ? (
                <ArrowUpIcon className="h-4 w-4" />
              ) : (
                <ArrowDownIcon className="h-4 w-4" />
              )}
              <span className="ml-1">{Math.abs(stat.change)}%</span>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-500">{stat.changeLabel}</p>
        </Card>
      ))}
    </div>
  );
}