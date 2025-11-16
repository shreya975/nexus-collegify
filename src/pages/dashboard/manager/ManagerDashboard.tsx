import { PageShell } from '@/components/layout/PageShell';
import { StatCard } from '@/components/ui/StatCard';
import { Card } from '@/components/ui/card';
import { Building2, Users, TrendingUp, Activity } from 'lucide-react';

const ManagerDashboard = () => {
  const stats = [
    { title: 'Total Departments', value: '12', icon: Building2, trend: { value: '2 new', isPositive: true } },
    { title: 'Total Admins', value: '45', icon: Users, trend: { value: '5 this month', isPositive: true } },
    { title: 'Active Students', value: '2,847', icon: TrendingUp, trend: { value: '12% increase', isPositive: true } },
    { title: 'System Health', value: '98.5%', icon: Activity, trend: { value: '0.5%', isPositive: true } },
  ];

  const recentActivity = [
    { department: 'Computer Science', action: 'New admin assigned', time: '2 hours ago' },
    { department: 'Business', action: 'Department updated', time: '5 hours ago' },
    { department: 'Engineering', action: 'New courses added', time: '1 day ago' },
    { department: 'Arts', action: 'Student enrollment completed', time: '2 days ago' },
  ];

  return (
    <PageShell title="Manager Dashboard" subtitle="Overview of all departments and operations">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="p-6 glass border-border/50">
          <h3 className="text-lg font-serif font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/30 transition-smooth">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div className="flex-1">
                  <p className="font-medium text-sm">{activity.department}</p>
                  <p className="text-sm text-muted-foreground">{activity.action}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6 glass border-border/50">
          <h3 className="text-lg font-serif font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-4 rounded-xl bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-smooth">
              <p className="font-medium text-sm">View All Departments</p>
              <p className="text-xs text-muted-foreground mt-1">Manage department settings</p>
            </button>
            <button className="w-full text-left p-4 rounded-xl bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-smooth">
              <p className="font-medium text-sm">System Analytics</p>
              <p className="text-xs text-muted-foreground mt-1">View detailed reports</p>
            </button>
            <button className="w-full text-left p-4 rounded-xl bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-smooth">
              <p className="font-medium text-sm">Assign New Admin</p>
              <p className="text-xs text-muted-foreground mt-1">Add admin to department</p>
            </button>
          </div>
        </Card>
      </div>
    </PageShell>
  );
};

export default ManagerDashboard;
