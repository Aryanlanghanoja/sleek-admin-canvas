
import { BarChart3, DollarSign, ShoppingCart, Users, Sparkles } from 'lucide-react';

import { StatCard } from '@/components/dashboard/StatCard';
import { SalesChart } from '@/components/dashboard/SalesChart';
import { RecentOrders } from '@/components/dashboard/RecentOrders';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { ProductCustomers } from '@/components/dashboard/ProductCustomers';

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="dashboard-header">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
          Dashboard <Sparkles className="h-5 w-5 text-accent" />
        </h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your business.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
        <StatCard 
          title="Total Revenue" 
          value="$45,231.89" 
          icon={DollarSign}
          change={12.5}
          trend="up"
          className="card-gradient-primary"
        />
        <StatCard 
          title="New Customers" 
          value="2,845" 
          icon={Users}
          change={5.2}
          trend="up"
          className="card-gradient-secondary"
        />
        <StatCard 
          title="Total Orders" 
          value="1,759" 
          icon={ShoppingCart}
          change={-2.3}
          trend="down"
          className="card-gradient-accent text-white"
        />
        <StatCard 
          title="Conversion Rate" 
          value="3.24%" 
          icon={BarChart3}
          change={0.8}
          trend="up"
          className="card-gradient-purple"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
        <SalesChart />
        <RecentActivity />
      </div>
      
      <div className="grid grid-cols-1 gap-6 animate-fade-in" style={{animationDelay: "0.3s"}}>
        <ProductCustomers />
        <RecentOrders />
      </div>
    </div>
  );
};

export default Dashboard;
