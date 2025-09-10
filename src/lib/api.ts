import { User } from "@/types";

interface RandomUserResponse {
  results: User[];
}

/**
 * Fetches random user data from RandomUser API
 */
export const fetchRandomUserData = async (): Promise<User> => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=1&nat=us');
    
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }
    
    const data: RandomUserResponse = await response.json();
    
    if (!data.results || data.results.length === 0) {
      throw new Error('No user data received');
    }
    
    return data.results[0];
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
