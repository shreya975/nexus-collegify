import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useUserStore } from '@/store/userStore';
import { api } from '@/lib/api';
import { ROLE_ROUTES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import campusBg from '@/assets/campus-bg.jpg';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const navigate = useNavigate();
  const login = useUserStore((state) => state.login);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      // Mock login - Replace with actual API call
      // const response = await api.post('/auth/login', data);
      
      // Mock response for demo
      const mockUser = {
        id: '1',
        name: 'Demo User',
        email: data.email,
        role: data.email.includes('manager') ? 'manager' as const :
              data.email.includes('admin') ? 'admin' as const :
              data.email.includes('teacher') ? 'teacher' as const :
              'student' as const,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + data.email,
      };

      const mockToken = 'demo-token-' + Math.random();

      login(mockUser, mockToken);
      toast.success('Welcome to EduNexus!');
      navigate(ROLE_ROUTES[mockUser.role]);
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${campusBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
          transform: 'scale(1.1)',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/40" />

      {/* Login Box */}
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="glass rounded-3xl p-8 shadow-glow">
          {/* Logo/Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-serif font-bold mb-2 bg-gradient-rose bg-clip-text text-transparent">
              EduNexus
            </h1>
            <p className="text-sm text-foreground/70">
              College Student Management System
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register('email')}
                className="h-11"
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  {...register('password')}
                  className="h-11 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              variant="gradient"
              className="w-full h-11 font-semibold"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 rounded-xl bg-muted/30 backdrop-blur-sm border border-border/20">
            <p className="text-xs font-medium mb-2 text-center text-muted-foreground">Demo Credentials:</p>
            <div className="space-y-1 text-xs text-muted-foreground">
              <p>• manager@edu.com (Manager)</p>
              <p>• admin@edu.com (Admin)</p>
              <p>• teacher@edu.com (Teacher)</p>
              <p>• student@edu.com (Student)</p>
              <p className="pt-1 text-center">Password: demo123</p>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="mt-6 text-center">
            <button className="text-sm text-muted-foreground hover:text-primary transition-smooth">
              Forgot your password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
