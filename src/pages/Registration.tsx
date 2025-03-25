import React, { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

// Import eye icons for password toggle
import { Eye, EyeOff } from 'lucide-react';

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

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRoleChange = (role: UserRoleType) => {
    setFormData((prevState) => ({
      ...prevState,
      role
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
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
  };

  return (
    <>
      <div>
        <Helmet>
          <title>Registration | Griwa International</title>
        </Helmet>
          <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <Card className="w-full max-w-md p-6">
            <CardHeader>
              <CardTitle className="text-center text-2xl">User Registration</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Email Field */}
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
                
                {/* Password Field with Show/Hide Icon */}
                <div className="relative">
                  <label 
                    htmlFor="password" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Input 
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Create a strong password"
                      required
                      className="w-full pr-10"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                
                {/* Role Selection */}
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
                    <SelectTrigger className="w-full mb-2">
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
                  className="w-full mt-12"
                >
                  Register User
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Registration;
