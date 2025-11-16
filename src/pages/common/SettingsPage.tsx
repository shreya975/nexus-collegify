import { PageShell } from '@/components/layout/PageShell';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useUserStore } from '@/store/userStore';

const SettingsPage = () => {
  const user = useUserStore((state) => state.user);

  return (
    <PageShell title="Settings" subtitle="Manage your account preferences">
      <div className="max-w-4xl">
        {/* Profile Settings */}
        <Card className="p-6 glass border-border/50 mb-6">
          <h3 className="text-lg font-serif font-semibold mb-6">Profile Information</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue={user?.name} className="mt-2" />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue={user?.email} className="mt-2" disabled />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="mt-2" />
            </div>
            <Button variant="gradient">Save Changes</Button>
          </div>
        </Card>

        {/* Notification Settings */}
        <Card className="p-6 glass border-border/50 mb-6">
          <h3 className="text-lg font-serif font-semibold mb-6">Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-muted-foreground">Receive updates via email</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Push Notifications</p>
                <p className="text-sm text-muted-foreground">Receive push notifications</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Weekly Reports</p>
                <p className="text-sm text-muted-foreground">Get weekly performance reports</p>
              </div>
              <Switch />
            </div>
          </div>
        </Card>

        {/* Security Settings */}
        <Card className="p-6 glass border-border/50">
          <h3 className="text-lg font-serif font-semibold mb-6">Security</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" className="mt-2" />
            </div>
            <Button variant="gradient">Update Password</Button>
          </div>
        </Card>
      </div>
    </PageShell>
  );
};

export default SettingsPage;
