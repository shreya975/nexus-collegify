import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { useUserStore } from '@/store/userStore';

interface PageShellProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export const PageShell = ({ children, title, subtitle }: PageShellProps) => {
  const user = useUserStore((state) => state.user);

  // Apply dark mode for staff roles
  const isStaff = user?.role && ['manager', 'admin', 'teacher'].includes(user.role);

  return (
    <div className={isStaff ? 'dark' : ''}>
      <div className="min-h-screen bg-background">
        <Sidebar />
        
        {/* Main content with responsive margin */}
        <div className="ml-20 lg:ml-64 transition-all duration-300">
          <Topbar title={title} subtitle={subtitle} />
          
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};
