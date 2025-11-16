import { Navigate } from 'react-router-dom';
import { useUserStore, UserRole } from '@/store/userStore';
import { ReactNode } from 'react';
import { ROLE_ROUTES } from '@/lib/constants';

interface RoleGateProps {
  children: ReactNode;
  allowedRoles: UserRole[];
}

export const RoleGate = ({ children, allowedRoles }: RoleGateProps) => {
  const user = useUserStore((state) => state.user);

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to={ROLE_ROUTES[user?.role || 'student']} replace />;
  }

  return <>{children}</>;
};
