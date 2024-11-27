import { Area, AreaChart as RechartsAreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card } from '../ui/Card';

interface AreaChartProps {
  data: Array<{ name: string; value: number }>;
  title: string;
}

export function AreaChart({ data, title }: AreaChartProps) {
  return (
    <Card className="h-[400px]">
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>
      <ResponsiveContainer width="100%" height="90%">
        <RechartsAreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            fillOpacity={1}
            fill="url(#colorValue)"
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </Card>
  );
}