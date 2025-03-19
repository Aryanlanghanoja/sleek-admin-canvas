
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Administrator",
    company: "Acme Inc.",
    bio: "Product manager with 5+ years of experience in SaaS products.",
    location: "San Francisco, CA",
    website: "https://johndoe.com",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveProfile = () => {
    // In a real app, this would save to a backend
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully.",
    });
  };

  return (
    <DashboardLayout>
      <div className="container py-6 max-w-5xl animate-fade-in">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Overview Card */}
          <Card className="md:col-span-1 shadow-md">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback className="text-xl">JD</AvatarFallback>
                </Avatar>
              </div>
              <CardTitle>{profileData.name}</CardTitle>
              <CardDescription>{profileData.role}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm">
                <p className="text-muted-foreground">Company</p>
                <p className="font-medium">{profileData.company}</p>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">Email</p>
                <p className="font-medium">{profileData.email}</p>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">Location</p>
                <p className="font-medium">{profileData.location}</p>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">Website</p>
                <p className="font-medium">{profileData.website}</p>
              </div>
              <Button variant="outline" className="w-full">Change Password</Button>
            </CardContent>
          </Card>

          {/* Profile Edit Section */}
          <div className="md:col-span-2">
            <Tabs defaultValue="personal">
              <TabsList className="mb-6">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="account">Account Settings</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Update your personal information and how it appears on your profile
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={profileData.name} 
                          onChange={handleInputChange} 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={profileData.email} 
                          onChange={handleInputChange} 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="role" className="text-sm font-medium">
                          Role
                        </label>
                        <Input 
                          id="role" 
                          name="role" 
                          value={profileData.role} 
                          onChange={handleInputChange} 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium">
                          Company
                        </label>
                        <Input 
                          id="company" 
                          name="company" 
                          value={profileData.company} 
                          onChange={handleInputChange} 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="location" className="text-sm font-medium">
                          Location
                        </label>
                        <Input 
                          id="location" 
                          name="location" 
                          value={profileData.location} 
                          onChange={handleInputChange} 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="website" className="text-sm font-medium">
                          Website
                        </label>
                        <Input 
                          id="website" 
                          name="website" 
                          value={profileData.website} 
                          onChange={handleInputChange} 
                        />
                      </div>
                      <div className="col-span-2 space-y-2">
                        <label htmlFor="bio" className="text-sm font-medium">
                          Bio
                        </label>
                        <textarea 
                          id="bio" 
                          name="bio" 
                          rows={4}
                          className="w-full rounded-md border border-input px-3 py-2 text-sm"
                          value={profileData.bio} 
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button onClick={handleSaveProfile}>Save Changes</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="account" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>
                      Manage your account settings and preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Password</h3>
                        <div className="grid grid-cols-1 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="current-password" className="text-sm font-medium">
                              Current Password
                            </label>
                            <Input id="current-password" name="current-password" type="password" />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="new-password" className="text-sm font-medium">
                              New Password
                            </label>
                            <Input id="new-password" name="new-password" type="password" />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="confirm-password" className="text-sm font-medium">
                              Confirm Password
                            </label>
                            <Input id="confirm-password" name="confirm-password" type="password" />
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <Button>Update Password</Button>
                        </div>
                      </div>
                      
                      <div className="space-y-4 pt-4 border-t">
                        <h3 className="text-lg font-medium">Danger Zone</h3>
                        <div className="p-4 border border-destructive/20 rounded-md bg-destructive/5">
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                              <h4 className="font-medium">Delete Account</h4>
                              <p className="text-sm text-muted-foreground">
                                Permanently delete your account and all of your data
                              </p>
                            </div>
                            <Button variant="destructive">Delete Account</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>
                      Choose what notifications you want to receive
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Notification settings would go here */}
                      <p className="text-muted-foreground">
                        Notification settings coming soon...
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
