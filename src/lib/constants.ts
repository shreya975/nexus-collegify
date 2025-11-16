import { Home, Building2, Users, BarChart3, Settings, Calendar, BookOpen, ClipboardCheck, Award, MessageSquare, FolderOpen, UserCheck, TrendingUp, FileText } from 'lucide-react';

export const ROLE_ROUTES = {
  manager: '/dashboard/manager',
  admin: '/dashboard/admin',
  teacher: '/dashboard/teacher',
  student: '/dashboard/student',
} as const;

export const SIDEBAR_MENUS = {
  manager: [
    { title: 'Dashboard', url: '/dashboard/manager', icon: Home },
    { title: 'Departments', url: '/dashboard/manager/departments', icon: Building2 },
    { title: 'Admins', url: '/dashboard/manager/admins', icon: Users },
    { title: 'Analytics', url: '/dashboard/manager/analytics', icon: BarChart3 },
    { title: 'Settings', url: '/dashboard/manager/settings', icon: Settings },
  ],
  admin: [
    { title: 'Dashboard', url: '/dashboard/admin', icon: Home },
    { title: 'Years & Semesters', url: '/dashboard/admin/years', icon: Calendar },
    { title: 'Courses', url: '/dashboard/admin/courses', icon: BookOpen },
    { title: 'Teacher Assignments', url: '/dashboard/admin/assignments', icon: UserCheck },
    { title: 'Students', url: '/dashboard/admin/students', icon: Users },
    { title: 'Promotions', url: '/dashboard/admin/promotions', icon: TrendingUp },
    { title: 'Reports', url: '/dashboard/admin/reports', icon: FileText },
    { title: 'Settings', url: '/dashboard/admin/settings', icon: Settings },
  ],
  teacher: [
    { title: 'Dashboard', url: '/dashboard/teacher', icon: Home },
    { title: 'My Courses', url: '/dashboard/teacher/courses', icon: BookOpen },
    { title: 'Attendance', url: '/dashboard/teacher/attendance', icon: ClipboardCheck },
    { title: 'Marks', url: '/dashboard/teacher/marks', icon: Award },
    { title: 'Messages', url: '/dashboard/teacher/messages', icon: MessageSquare },
    { title: 'Resources', url: '/dashboard/teacher/resources', icon: FolderOpen },
    { title: 'Settings', url: '/dashboard/teacher/settings', icon: Settings },
  ],
  student: [
    { title: 'Dashboard', url: '/dashboard/student', icon: Home },
    { title: 'My Courses', url: '/dashboard/student/courses', icon: BookOpen },
    { title: 'Attendance', url: '/dashboard/student/attendance', icon: ClipboardCheck },
    { title: 'Performance', url: '/dashboard/student/performance', icon: Award },
    { title: 'Messages', url: '/dashboard/student/messages', icon: MessageSquare },
    { title: 'Profile', url: '/dashboard/student/profile', icon: Users },
    { title: 'Settings', url: '/dashboard/student/settings', icon: Settings },
  ],
};
