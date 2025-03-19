
import { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  Settings, 
  HelpCircle, 
  Calendar, 
  MessageSquare, 
  ShoppingCart, 
  Layers, 
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type SidebarLinkProps = {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  isCollapsed?: boolean;
};

const SidebarLink = ({ icon: Icon, label, isActive, isCollapsed }: SidebarLinkProps) => {
  return (
    <a href="#" className={cn("sidebar-item", isActive && "active", "group")}>
      <Icon size={20} />
      {!isCollapsed && <span className="transition-opacity duration-200">{label}</span>}
      {isCollapsed && <span className="absolute left-full ml-2 rounded bg-sidebar-accent px-2 py-1 text-xs text-sidebar-accent-foreground invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all">{label}</span>}
    </a>
  );
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={cn(
      "bg-gradient-to-b from-sidebar to-sidebar/90 h-screen flex flex-col transition-all duration-300 border-r border-sidebar-border relative shadow-lg",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="flex items-center p-4 h-16 border-b border-sidebar-border/50">
        {!collapsed && (
          <div className="w-full flex justify-center">
            <img 
              src="/lovable-uploads/e1fa932d-200e-41b7-aadb-60a7796b3864.png" 
              alt="Oriwa International" 
              className="h-10 max-w-full object-contain"
            />
          </div>
        )}
        {collapsed && (
          <div className="w-full flex justify-center">
            <div className="h-8 w-8 rounded-full bg-sidebar-accent flex items-center justify-center text-sidebar-accent-foreground font-bold">O</div>
          </div>
        )}
      </div>
      
      <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
        <div className="space-y-1">
          <SidebarLink icon={BarChart3} label="Dashboard" isActive isCollapsed={collapsed} />
          <SidebarLink icon={Layers} label="Products" isCollapsed={collapsed} />
          <SidebarLink icon={ShoppingCart} label="Orders" isCollapsed={collapsed} />
          <SidebarLink icon={Users} label="Customers" isCollapsed={collapsed} />
          <SidebarLink icon={MessageSquare} label="Messages" isCollapsed={collapsed} />
          <SidebarLink icon={Calendar} label="Calendar" isCollapsed={collapsed} />
        </div>
        
        <div className="pt-4 mt-4 border-t border-sidebar-border/50 space-y-1">
          <SidebarLink icon={Settings} label="Settings" isCollapsed={collapsed} />
          <SidebarLink icon={HelpCircle} label="Help" isCollapsed={collapsed} />
        </div>
      </nav>
      
      <Button 
        onClick={() => setCollapsed(!collapsed)} 
        size="sm" 
        variant="ghost" 
        className="absolute -right-3 top-20 rounded-full bg-white shadow-md h-6 w-6 p-0 flex items-center justify-center border border-sidebar-border/30"
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </Button>
    </div>
  );
};

export default Sidebar;
