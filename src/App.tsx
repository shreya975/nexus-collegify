import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { RoleGate } from "@/components/auth/RoleGate";
import Login from "./pages/auth/Login";
import ManagerDashboard from "./pages/dashboard/manager/ManagerDashboard";
import AdminDashboard from "./pages/dashboard/admin/AdminDashboard";
import TeacherDashboard from "./pages/dashboard/teacher/TeacherDashboard";
import StudentDashboard from "./pages/dashboard/student/StudentDashboard";
import SettingsPage from "./pages/common/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Manager Routes */}
          <Route
            path="/dashboard/manager"
            element={
              <ProtectedRoute>
                <RoleGate allowedRoles={['manager']}>
                  <ManagerDashboard />
                </RoleGate>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/manager/*"
            element={
              <ProtectedRoute>
                <RoleGate allowedRoles={['manager']}>
                  <SettingsPage />
                </RoleGate>
              </ProtectedRoute>
            }
          />

          {/* Admin Routes */}
          <Route
            path="/dashboard/admin"
            element={
              <ProtectedRoute>
                <RoleGate allowedRoles={['admin']}>
                  <AdminDashboard />
                </RoleGate>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/admin/*"
            element={
              <ProtectedRoute>
                <RoleGate allowedRoles={['admin']}>
                  <SettingsPage />
                </RoleGate>
              </ProtectedRoute>
            }
          />

          {/* Teacher Routes */}
          <Route
            path="/dashboard/teacher"
            element={
              <ProtectedRoute>
                <RoleGate allowedRoles={['teacher']}>
                  <TeacherDashboard />
                </RoleGate>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/teacher/*"
            element={
              <ProtectedRoute>
                <RoleGate allowedRoles={['teacher']}>
                  <SettingsPage />
                </RoleGate>
              </ProtectedRoute>
            }
          />

          {/* Student Routes */}
          <Route
            path="/dashboard/student"
            element={
              <ProtectedRoute>
                <RoleGate allowedRoles={['student']}>
                  <StudentDashboard />
                </RoleGate>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/student/*"
            element={
              <ProtectedRoute>
                <RoleGate allowedRoles={['student']}>
                  <SettingsPage />
                </RoleGate>
              </ProtectedRoute>
            }
          />

          {/* Catch All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
