import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  Settings, 
  HelpCircle, 
  Calendar, 
  MessageSquare, 
  UserPlus, 
  Layers,
  LogOut 
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: BarChart3 },
  // { title: "Products", url: "/products", icon: Layers },
  { title: "Leads", url: "/leads", icon: UserPlus },
  { title: "Customers", url: "/customers", icon: Users },
  // { title: "Messages", url: "/messages", icon: MessageSquare },
  { title: "Calendar", url: "/calendar", icon: Calendar },
];

const settingsItems = [
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "Log out", url: "/help", icon: LogOut },
];

const AppSidebar = () => {
  const location = useLocation();

  return (
    <Sidebar className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 shadow-lg w-64">
      
      {/* Header */}
      <SidebarHeader className="p-6 border-b border-gray-700">
        <div className="flex items-center justify-center">
          <span className="relative text-2xl font-extrabold uppercase bg-gradient-to-r from-orange-500 via-orange-300 to-yellow-300 bg-clip-text text-transparent tracking-wider p-1">
            Griwa International
          </span>
        </div>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent className="py-4">
        
        {/* Main Menu */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400 uppercase tracking-wide px-4">
            Main Menu
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location.pathname === item.url}
                    className={`flex items-center gap-3 px-4 py-2 rounded-md transition ${
                      location.pathname === item.url 
                        ? 'bg-orange-500 text-white shadow-md'
                        : 'hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <Link to={item.url} className="flex items-center gap-3 w-full">
                      <item.icon className="w-5 h-5" />
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Support Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400 uppercase tracking-wide px-4 mt-4">
            Support
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location.pathname === item.url}
                    className={`flex items-center gap-3 px-4 py-2 rounded-md transition ${
                      location.pathname === item.url 
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <Link to={item.url} className="flex items-center gap-3 w-full">
                      <item.icon className="w-5 h-5" />
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="bg-gray-900 p-4 border-t border-gray-700">
        <div className="text-center text-white-400 text-xs">
          Griwa International © {new Date().getFullYear()}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
