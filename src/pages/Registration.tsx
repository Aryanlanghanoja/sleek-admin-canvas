import React, { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

// Define user roles as a const enum for type safety
const UserRole = {
  EMPLOYEE: 'Employee',
  ADMIN: 'Admin',
  MARKETING: 'Marketing Person'
} as const;

// Type for user roles
type UserRoleType = typeof UserRole[keyof typeof UserRole];

// Interface for user registration form
interface UserRegistrationForm {
  email: string;
  password: string;
  role: UserRoleType;
}

const Registration: React.FC = () => {
  const [formData, setFormData] = useState<UserRegistrationForm>({
    email: '',
    password: '',
    role: UserRole.EMPLOYEE
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRoleChange = (role: UserRoleType) => {
    setFormData(prevState => ({
      ...prevState,
      role
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validation logic
    if (!formData.email || !formData.password) {
      alert('Please fill in all fields');
      return;
    }

    // Password strength check
    if (formData.password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }

    // Simulate registration process
    console.log('Registration Submitted:', formData);
    
    // TODO: Add actual registration logic (API call, etc.)
    // Example: 
    // registerUser(formData)
    //   .then(response => {
    //     // Handle successful registration
    //   })
    //   .catch(error => {
    //     // Handle registration error
    //   });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6">
        <CardHeader>
          <CardTitle className="text-center text-2xl">User Registration</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <Input 
                id="email"
                name="email"
                type="email" 
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email address"
                required
                className="w-full"
              />
            </div>
            
            <div>
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <Input 
                id="password"
                name="password"
                type="password" 
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a strong password"
                required
                className="w-full"
              />
            </div>
            
            <div>
              <label 
                htmlFor="role" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                User Role
              </label>
              <Select 
                value={formData.role}
                onValueChange={handleRoleChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={UserRole.EMPLOYEE}>
                    {UserRole.EMPLOYEE}
                  </SelectItem>
                  <SelectItem value={UserRole.ADMIN}>
                    {UserRole.ADMIN}
                  </SelectItem>
                  <SelectItem value={UserRole.MARKETING}>
                    {UserRole.MARKETING}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              type="submit" 
              className="w-full mt-4"
            >
              Register User
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Registration;