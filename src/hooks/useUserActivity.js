import { useState, useEffect } from 'react';
import { getUserActivity } from '../services/apiService';

function useUserActivity(userId) {
  const [userActivity, setUserActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const activityData = await getUserActivity(userId);
        setUserActivity(activityData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchActivity();
  }, [userId]);

  return { userActivity, loading, error };
}

export default useUserActivity;
