import { PageShell } from '@/components/layout/PageShell';
import { StatCard } from '@/components/ui/StatCard';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, GraduationCap, Calendar, Search } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Students', value: '642', icon: Users, trend: { value: '8% increase', isPositive: true } },
    { title: 'Active Courses', value: '28', icon: BookOpen, trend: { value: '3 new', isPositive: true } },
    { title: 'Teachers', value: '34', icon: GraduationCap, trend: { value: 'All assigned', isPositive: true } },
    { title: 'Current Semester', value: 'Spring 2024', icon: Calendar },
  ];

  const recentStudents = [
    { name: 'Alice Johnson', id: 'CS2024001', course: 'Computer Science', status: 'Active' },
    { name: 'Bob Smith', id: 'BU2024002', course: 'Business Admin', status: 'Active' },
    { name: 'Carol Williams', id: 'EN2024003', course: 'Engineering', status: 'Pending' },
    { name: 'David Brown', id: 'AR2024004', course: 'Arts', status: 'Active' },
  ];

  return (
    <PageShell title="Admin Dashboard" subtitle="Manage students, courses, and academic operations">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Student Search */}
        <Card className="lg:col-span-2 p-6 glass border-border/50">
          <h3 className="text-lg font-serif font-semibold mb-4">Quick Student Search</h3>
          <div className="flex gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input placeholder="Search by name or student ID..." className="pl-10" />
            </div>
            <Button variant="gradient">Search</Button>
          </div>

          {/* Recent Students Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Name</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Student ID</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Course</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentStudents.map((student) => (
                  <tr key={student.id} className="border-b border-border/30 hover:bg-accent/30 transition-smooth">
                    <td className="py-3 px-2 text-sm">{student.name}</td>
                    <td className="py-3 px-2 text-sm text-muted-foreground">{student.id}</td>
                    <td className="py-3 px-2 text-sm">{student.course}</td>
                    <td className="py-3 px-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        student.status === 'Active' 
                          ? 'bg-green-500/10 text-green-500'
                          : 'bg-yellow-500/10 text-yellow-500'
                      }`}>
                        {student.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6 glass border-border/50">
          <h3 className="text-lg font-serif font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-4 rounded-xl bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-smooth">
              <p className="font-medium text-sm">Add New Student</p>
              <p className="text-xs text-muted-foreground mt-1">Enroll student</p>
            </button>
            <button className="w-full text-left p-4 rounded-xl bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-smooth">
              <p className="font-medium text-sm">Create Course</p>
              <p className="text-xs text-muted-foreground mt-1">Add new course</p>
            </button>
            <button className="w-full text-left p-4 rounded-xl bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-smooth">
              <p className="font-medium text-sm">Assign Teacher</p>
              <p className="text-xs text-muted-foreground mt-1">Manage assignments</p>
            </button>
            <button className="w-full text-left p-4 rounded-xl bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-smooth">
              <p className="font-medium text-sm">Generate Report</p>
              <p className="text-xs text-muted-foreground mt-1">Download PDF</p>
            </button>
          </div>
        </Card>
      </div>
    </PageShell>
  );
};

export default AdminDashboard;
