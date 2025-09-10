'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { removeUserFromStorage } from "@/lib/utils";

interface LogoutButtonProps {
  className?: string;
}

/**
 * Component for logout functionality
 */
export const LogoutButton = ({ className }: LogoutButtonProps) => {
  const router = useRouter();

  const handleLogout = () => {
    removeUserFromStorage();
    router.push('/login');
  };

  return (
    <Button
      variant="destructive"
      onClick={handleLogout}
      className={className}
      aria-label="Logout"
    >
      Logout
    </Button>
  );
};
