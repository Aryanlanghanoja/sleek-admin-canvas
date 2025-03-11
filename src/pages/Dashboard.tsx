
import { BarChart3, DollarSign, ShoppingCart, Users } from 'lucide-react';

import { StatCard } from '@/components/dashboard/StatCard';
import { SalesChart } from '@/components/dashboard/SalesChart';
import { RecentOrders } from '@/components/dashboard/RecentOrders';
import { RecentActivity } from '@/components/dashboard/RecentActivity';

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your business.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Revenue" 
          value="$45,231.89" 
          icon={DollarSign}
          change={12.5}
          trend="up"
        />
        <StatCard 
          title="New Customers" 
          value="2,845" 
          icon={Users}
          change={5.2}
          trend="up"
        />
        <StatCard 
          title="Total Orders" 
          value="1,759" 
          icon={ShoppingCart}
          change={-2.3}
          trend="down"
        />
        <StatCard 
          title="Conversion Rate" 
          value="3.24%" 
          icon={BarChart3}
          change={0.8}
          trend="up"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SalesChart />
        <RecentActivity />
      </div>
      
      <RecentOrders />
    </div>
  );
};

export default Dashboard;
