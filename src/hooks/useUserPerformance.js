import { useState, useEffect } from 'react';
import { getUserPerformance } from '../services/apiService';

function useUserPerformance(userId) {
  const [userPerformance, setUserPerformance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserPerformance = async () => {
      try {
        const performanceData = await getUserPerformance(userId);
        setUserPerformance(performanceData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUserPerformance();
  }, [userId]);

  return { userPerformance, loading, error };
}

export default useUserPerformance;
