'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from "@/lib/utils";
import { LoginForm } from "@/components/LoginForm";

/**
 * Login page component
 */
export default function LoginPage() {
  const router = useRouter();

  // Redirect to dashboard if already authenticated
  useEffect(() => {
    if (isAuthenticated()) {
      router.push('/dashboard');
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-xl sm:p-10">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your Iranian mobile number to continue
          </p>
        </div>
        
        <div className="mt-8">
          <LoginForm />
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Valid formats: 09xxxxxxxxx, +989xxxxxxxxx, 00989xxxxxxxxx
          </p>
        </div>
      </div>
    </div>
  );
}
