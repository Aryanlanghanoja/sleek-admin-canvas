
import { Helmet } from 'react-helmet';
import { SalesChart } from '@/components/dashboard/SalesChart';
import { StatCard } from '@/components/dashboard/StatCard';
import { RecentLeads } from '@/components/dashboard/RecentLeads';
import { ProductCustomers } from '@/components/dashboard/ProductCustomers';
import { RecentActivity } from '@/components/dashboard/RecentActivity';

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | Oriwa International</title>
      </Helmet>
      <div className="p-6 space-y-8">
        <div className="dashboard-header">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-gray-500">Welcome back to your dashboard.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="Total Revenue" 
            value="$45,231.89" 
            change="+20.1%" 
            trend="up" 
            description="Revenue this month" 
          />
          <StatCard 
            title="New Leads" 
            value="1,234" 
            change="+12.3%" 
            trend="up" 
            description="New leads this month" 
          />
          <StatCard 
            title="Active Customers" 
            value="573" 
            change="+7.5%" 
            trend="up" 
            description="Active users" 
          />
          <StatCard 
            title="Conversion Rate" 
            value="4.35%" 
            change="-3.2%" 
            trend="down" 
            description="From last month" 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SalesChart />
          </div>
          <div>
            <RecentActivity />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <RecentLeads />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProductCustomers />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
