import { User } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


const STORAGE_KEY = 'auth_user';

/**
 * Saves user data to localStorage
 */
export const saveUserToStorage = (user: User): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } catch (error) {
    console.error('Error saving user to localStorage:', error);
  }
};

/**
 * Retrieves user data from localStorage
 */
export const getUserFromStorage = (): User | null => {
  try {
    const userData = localStorage.getItem(STORAGE_KEY);
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error('Error retrieving user from localStorage:', error);
    return null;
  }
};

/**
 * Removes user data from localStorage
 */
export const removeUserFromStorage = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error removing user from localStorage:', error);
  }
};

/**
 * Checks if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  return getUserFromStorage() !== null;
};

/**
 * Utility to merge Tailwind classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
