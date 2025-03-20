
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontal, Mail, Phone } from 'lucide-react';

const leads = [
  {
    id: 'LEAD-7425',
    name: 'Michael Roberts',
    email: 'michael.roberts@example.com',
    phone: '+1 (555) 123-4567',
    source: 'website',
    status: 'new',
    date: '2023-09-12'
  },
  {
    id: 'LEAD-7424',
    name: 'Jennifer Lopez',
    email: 'jennifer.lopez@example.com',
    phone: '+1 (555) 987-6543',
    source: 'referral',
    status: 'contacted',
    date: '2023-09-11'
  },
  {
    id: 'LEAD-7423',
    name: 'Robert Chen',
    email: 'robert.chen@example.com',
    phone: '+1 (555) 456-7890',
    source: 'social',
    status: 'qualified',
    date: '2023-09-10'
  },
  {
    id: 'LEAD-7422',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    phone: '+1 (555) 234-5678',
    source: 'event',
    status: 'negotiation',
    date: '2023-09-09'
  },
  {
    id: 'LEAD-7421',
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 876-5432',
    source: 'advertisement',
    status: 'closed',
    date: '2023-09-08'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'new':
      return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
    case 'contacted':
      return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
    case 'qualified':
      return 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200';
    case 'negotiation':
      return 'bg-amber-100 text-amber-800 hover:bg-amber-200';
    case 'closed':
      return 'bg-green-100 text-green-800 hover:bg-green-200';
    default:
      return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
  }
};

export function RecentLeads() {
  return (
    <div className="data-card">
      <div className="p-6 flex justify-between items-center border-b border-border">
        <h2 className="text-lg font-semibold">Recent Leads</h2>
        <Button variant="outline" size="sm">View All</Button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Lead ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date Added</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell className="font-medium">{lead.id}</TableCell>
                <TableCell>{lead.name}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Mail className="h-3 w-3 mr-1" /> {lead.email}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Phone className="h-3 w-3 mr-1" /> {lead.phone}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="capitalize">{lead.source}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusColor(lead.status)}>
                    {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>{lead.date}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
