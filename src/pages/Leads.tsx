
import { Helmet } from 'react-helmet';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { RecentLeads } from '@/components/dashboard/RecentLeads';
import { ProductCustomers } from '@/components/dashboard/ProductCustomers'; 

const Leads = () => {
  return (
    <DashboardLayout>
      <Helmet>
        <title>Leads | Oriwa International</title>
      </Helmet>
      <div className="p-6 space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Leads</h1>
            <p className="text-gray-500">Manage and track all your leads.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6 w-full">
          <RecentLeads fullPage />
          <ProductCustomers />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Leads;
