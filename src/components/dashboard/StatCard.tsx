
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: number;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}

export function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  change, 
  trend = 'neutral',
  className 
}: StatCardProps) {
  return (
    <div className={cn("stat-card", className)}>
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <div className="text-2xl font-bold">{value}</div>
        </div>
        <div className={cn(
          "p-2 rounded-full",
          trend === 'up' && "bg-green-100 text-green-700",
          trend === 'down' && "bg-red-100 text-red-700",
          trend === 'neutral' && "bg-blue-100 text-blue-700"
        )}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      
      {change !== undefined && (
        <div className="mt-4 flex items-center text-sm">
          <span className={cn(
            "font-medium mr-1",
            trend === 'up' && "text-green-600",
            trend === 'down' && "text-red-600",
            trend === 'neutral' && "text-blue-600"
          )}>
            {change > 0 ? '+' : ''}{change}%
          </span>
          <span className="text-muted-foreground">vs last month</span>
        </div>
      )}
    </div>
  );
}
