'use client';

import { useEffect, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from "@/hooks/useAuth";
import { LogoutButton } from "@/components/LogoutButton";


/**
 * Dashboard page component
 * Shows welcome message and logout button
 */
function DashboardContent() {
  const { user, loading, isAuthenticated } = useAuth();
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [loading, isAuthenticated, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="rounded-full overflow-hidden w-24 h-24 mx-auto border-4 border-blue-100">
          <img 
            src={user.picture.large} 
            alt={`${user.name.first} ${user.name.last}`}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome, {user.name.first} {user.name.last}!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            You&apos;ve successfully logged in
          </p>
          <p className="mt-1 text-center text-sm text-gray-500">
            Email: {user.email}
          </p>
        </div>
        
        <div className="mt-8">
          <LogoutButton className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent />
    </Suspense>
  );
}
