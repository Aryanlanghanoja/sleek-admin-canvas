
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Customers = () => {
  return (
    <>
      <Helmet>
        <title>Customers | Oriwa International</title>
      </Helmet>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Customer Management</h1>
        
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Customer management page is under construction.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Customers;
