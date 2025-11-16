import { useState, createContext, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronLeft, ChevronRight, LogOut } from 'lucide-react';
import { useUserStore } from '@/store/userStore';
import { SIDEBAR_MENUS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const SidebarContext = createContext({ collapsed: false });

export const useSidebarCollapsed = () => useContext(SidebarContext);

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { user, logout } = useUserStore();

  if (!user) return null;

  const menuItems = SIDEBAR_MENUS[user.role];

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  return (
    <SidebarContext.Provider value={{ collapsed }}>
      <aside
        className={cn(
          'fixed left-0 top-0 h-screen bg-card border-r border-border/50 transition-all duration-300 z-50 glass',
          collapsed ? 'w-20' : 'w-20 lg:w-64'
        )}
      >
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-border/50">
          {!collapsed && (
            <h2 className="hidden lg:block font-serif text-xl font-bold bg-gradient-rose bg-clip-text text-transparent">
              EduNexus
            </h2>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto hover:bg-accent/50 hidden lg:flex"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </Button>
        </div>

        {/* User Info */}
        <div className="p-4 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-rose flex items-center justify-center text-white font-semibold flex-shrink-0">
              {user.name.charAt(0)}
            </div>
            {!collapsed && (
              <div className="hidden lg:block flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{user.name}</p>
                <p className="text-xs text-muted-foreground capitalize">{user.role}</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-2">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.url}
                to={item.url}
                end={item.url.endsWith(user.role)}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-smooth group',
                    isActive
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                )
                }
              >
                <item.icon size={20} className="flex-shrink-0" />
                {!collapsed && <span className="hidden lg:inline text-sm">{item.title}</span>}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Logout */}
        <div className="p-2 border-t border-border/50">
          <Button
            variant="ghost"
            onClick={handleLogout}
            className={cn(
              'w-full justify-start gap-3 hover:bg-destructive/10 hover:text-destructive transition-smooth',
              'lg:justify-start justify-center'
            )}
          >
            <LogOut size={20} />
            {!collapsed && <span className="hidden lg:inline">Logout</span>}
          </Button>
        </div>
      </aside>
    </SidebarContext.Provider>
  );
};
