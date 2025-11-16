import { PageShell } from '@/components/layout/PageShell';
import { StatCard } from '@/components/ui/StatCard';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, ClipboardCheck, AlertCircle } from 'lucide-react';

const TeacherDashboard = () => {
  const stats = [
    { title: 'My Courses', value: '5', icon: BookOpen },
    { title: 'Total Students', value: '142', icon: Users },
    { title: 'Attendance Today', value: '98%', icon: ClipboardCheck, trend: { value: '2% up', isPositive: true } },
    { title: 'Pending Tasks', value: '8', icon: AlertCircle },
  ];

  const todayCourses = [
    { name: 'Data Structures', time: '9:00 AM - 10:30 AM', room: 'Lab 201', students: 32, status: 'upcoming' },
    { name: 'Algorithms', time: '11:00 AM - 12:30 PM', room: 'Room 305', students: 28, status: 'upcoming' },
    { name: 'Database Systems', time: '2:00 PM - 3:30 PM', room: 'Lab 102', students: 35, status: 'scheduled' },
  ];

  const pendingTasks = [
    { task: 'Mark attendance for Data Structures', course: 'CSC301', priority: 'high' },
    { task: 'Update marks for Mid-term exam', course: 'CSC402', priority: 'medium' },
    { task: 'Review assignment submissions', course: 'CSC301', priority: 'medium' },
    { task: 'Prepare quiz for next class', course: 'CSC505', priority: 'low' },
  ];

  return (
    <PageShell title="Teacher Dashboard" subtitle="Manage your courses and student activities">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Schedule */}
        <Card className="p-6 glass border-border/50">
          <h3 className="text-lg font-serif font-semibold mb-4">Today's Schedule</h3>
          <div className="space-y-3">
            {todayCourses.map((course, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-accent/30 border border-border/50 hover:border-primary/30 transition-smooth">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-sm">{course.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{course.time}</p>
                  </div>
                  <Badge variant={course.status === 'upcoming' ? 'default' : 'secondary'} className="text-xs">
                    {course.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>📍 {course.room}</span>
                  <span>👥 {course.students} students</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Pending Tasks */}
        <Card className="p-6 glass border-border/50">
          <h3 className="text-lg font-serif font-semibold mb-4">Pending Tasks</h3>
          <div className="space-y-3">
            {pendingTasks.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-accent/30 border border-border/50 hover:bg-accent/40 transition-smooth cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.task}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.course}</p>
                  </div>
                  <Badge 
                    variant={item.priority === 'high' ? 'destructive' : item.priority === 'medium' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {item.priority}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PageShell>
  );
};

export default TeacherDashboard;
