
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
import { MoreHorizontal } from 'lucide-react';

const orders = [
  {
    id: '#ORD-7425',
    customer: 'Michael Roberts',
    product: 'Premium Headphones',
    status: 'completed',
    total: '$299.00',
    date: '2023-09-12'
  },
  {
    id: '#ORD-7424',
    customer: 'Jennifer Lopez',
    product: 'Smartwatch Ultra',
    status: 'processing',
    total: '$499.00',
    date: '2023-09-11'
  },
  {
    id: '#ORD-7423',
    customer: 'Robert Chen',
    product: 'Bluetooth Speaker',
    status: 'cancelled',
    total: '$149.00',
    date: '2023-09-10'
  },
  {
    id: '#ORD-7422',
    customer: 'Emily Davis',
    product: 'Wireless Earbuds',
    status: 'shipped',
    total: '$129.00',
    date: '2023-09-09'
  },
  {
    id: '#ORD-7421',
    customer: 'Alex Johnson',
    product: 'Laptop Stand',
    status: 'completed',
    total: '$59.00',
    date: '2023-09-08'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800 hover:bg-green-200';
    case 'processing':
      return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
    case 'shipped':
      return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
    case 'cancelled':
      return 'bg-red-100 text-red-800 hover:bg-red-200';
    default:
      return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
  }
};

export function RecentOrders() {
  return (
    <div className="data-card">
      <div className="p-6 flex justify-between items-center border-b border-border">
        <h2 className="text-lg font-semibold">Recent Orders</h2>
        <Button variant="outline" size="sm">View All</Button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusColor(order.status)}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.date}</TableCell>
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
