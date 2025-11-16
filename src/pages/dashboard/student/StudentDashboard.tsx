import { PageShell } from '@/components/layout/PageShell';
import { StatCard } from '@/components/ui/StatCard';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BookOpen, ClipboardCheck, Award, Calendar } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const StudentDashboard = () => {
  const stats = [
    { title: 'Enrolled Courses', value: '6', icon: BookOpen },
    { title: 'Attendance', value: '92%', icon: ClipboardCheck, trend: { value: '3% up', isPositive: true } },
    { title: 'Average Grade', value: 'A-', icon: Award },
    { title: 'Next Class', value: '2 hrs', icon: Calendar },
  ];

  const attendanceData = [
    { name: 'Present', value: 92, color: 'hsl(340, 75%, 70%)' },
    { name: 'Absent', value: 8, color: 'hsl(240, 10%, 25%)' },
  ];

  const performanceData = [
    { month: 'Jan', grade: 85 },
    { month: 'Feb', grade: 88 },
    { month: 'Mar', grade: 90 },
    { month: 'Apr', grade: 87 },
    { month: 'May', grade: 92 },
    { month: 'Jun', grade: 94 },
  ];

  const upcomingClasses = [
    { name: 'Data Structures', time: 'Today, 2:00 PM', room: 'Lab 201', professor: 'Dr. Smith' },
    { name: 'Algorithms', time: 'Tomorrow, 9:00 AM', room: 'Room 305', professor: 'Prof. Johnson' },
    { name: 'Database Systems', time: 'Tomorrow, 11:00 AM', room: 'Lab 102', professor: 'Dr. Williams' },
  ];

  const courseProgress = [
    { name: 'Data Structures', progress: 75 },
    { name: 'Algorithms', progress: 82 },
    { name: 'Database Systems', progress: 68 },
    { name: 'Web Development', progress: 90 },
  ];

  return (
    <PageShell title="Student Dashboard" subtitle="Track your academic progress and schedule">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Attendance Chart */}
        <Card className="p-6 glass border-border/50">
          <h3 className="text-lg font-serif font-semibold mb-4">Attendance Overview</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={attendanceData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {attendanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-4 mt-4">
            {attendanceData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-sm text-muted-foreground">{item.name}: {item.value}%</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Performance Trend */}
        <Card className="lg:col-span-2 p-6 glass border-border/50">
          <h3 className="text-lg font-serif font-semibold mb-4">Performance Trend</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))' 
                }} 
              />
              <Line type="monotone" dataKey="grade" stroke="hsl(340, 75%, 70%)" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Classes */}
        <Card className="p-6 glass border-border/50">
          <h3 className="text-lg font-serif font-semibold mb-4">Upcoming Classes</h3>
          <div className="space-y-3">
            {upcomingClasses.map((cls, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-accent/30 border border-border/50 hover:border-primary/30 transition-smooth">
                <h4 className="font-medium text-sm">{cls.name}</h4>
                <div className="mt-2 space-y-1 text-xs text-muted-foreground">
                  <p>🕒 {cls.time}</p>
                  <p>📍 {cls.room}</p>
                  <p>👨‍🏫 {cls.professor}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Course Progress */}
        <Card className="p-6 glass border-border/50">
          <h3 className="text-lg font-serif font-semibold mb-4">Course Progress</h3>
          <div className="space-y-4">
            {courseProgress.map((course) => (
              <div key={course.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{course.name}</span>
                  <span className="text-sm text-muted-foreground">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PageShell>
  );
};

export default StudentDashboard;
