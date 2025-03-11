
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Dashboard from "./Dashboard";

const Index = () => {
  return (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  );
};

export default Index;
