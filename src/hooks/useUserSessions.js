import { useState, useEffect } from 'react';
import { getUserAverageSessions } from '../services/apiService';

function useUserSessions(userId) {
  const [userSessions, setUserSessions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserSessions = async () => {
      try {
        const sessionsData = await getUserAverageSessions(userId);
        setUserSessions(sessionsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUserSessions();
  }, [userId]);

  return { userSessions, loading, error };
}

export default useUserSessions;
