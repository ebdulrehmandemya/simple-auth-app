'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { validateIranianMobile } from "@/lib/validation";
import { fetchRandomUserData } from "@/lib/api";
import { saveUserToStorage } from "@/lib/utils";
//import { User } from "@/types";

interface LoginFormProps {
  className?: string;
}

/**
 * Login form component with Iranian mobile number validation
 */
export const LoginForm = ({ className }: LoginFormProps) => {
  const [mobile, setMobile] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate mobile number
    const validation = validateIranianMobile(mobile);
    if (!validation.isValid) {
      setError(validation.message);
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    try {
      // Fetch user data
      const userData = await fetchRandomUserData();
      
      // Save to localStorage
      saveUserToStorage(userData);
      
      // Redirect to dashboard
      router.push('/dashboard');
    } catch (err) {
      setError('Failed to login. Please try again.');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="space-y-4">
        <Input
          id="mobile"
          type="tel"
          label="Mobile Number"
          placeholder="Enter your Iranian mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          error={error}
          aria-describedby={error ? "mobile-error" : undefined}
          required
        />
        
        <Button 
          type="submit" 
          className="w-full"
          isLoading={isLoading}
          disabled={isLoading}
          aria-label="Login"
        >
          Login
        </Button>
      </div>
    </form>
  );
};
