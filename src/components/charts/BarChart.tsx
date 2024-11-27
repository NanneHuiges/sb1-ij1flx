import { Bar, BarChart as RechartsBarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card } from '../ui/Card';

interface BarChartProps {
  data: Array<{ name: string; value: number }>;
  title: string;
}

export function BarChart({ data, title }: BarChartProps) {
  return (
    <Card className="h-[400px]">
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>
      <ResponsiveContainer width="100%" height="90%">
        <RechartsBarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </Card>
  );
}